import { armOptions } from "./CyberwareInfo/ArmCyberware";
import { brainOptions } from "./CyberwareInfo/BrainCyberware";
import { handOptions } from "./CyberwareInfo/HandCyberware";
import { legOptions } from "./CyberwareInfo/LegCyberware";
import { muscularOptions } from "./CyberwareInfo/MuscleCyberware";
import { nervousOptions } from "./CyberwareInfo/NervousCyberware";
import { OSOptions } from "./CyberwareInfo/OSCyberware";
import { sensoryOptions } from "./CyberwareInfo/SensoryCyberware";
import { skeletonOptions } from "./CyberwareInfo/SkeletonCyberware";
import { skinOptions } from "./CyberwareInfo/SkinCyberware";

export type Cyberware = AnyReqCyberware | OSWare | SlotWare;
export type AnyReqCyberware =
	| CyberwareNoRequirements
	| CyberwareWithRequirements;
export interface BaseCyberware {
	id: string;
	name: string;
	description: string;
	price: number;
	slot:
		| "OS"
		| "sensory"
		| "skeleton"
		| "muscular"
		| "arms"
		| "legs"
		| "hands"
		| "brain"
		| "nervous"
		| "skin";
	tier: number;
	capCost: number;
	hasRequirements: boolean;
}
export interface CyberwareNoRequirements extends BaseCyberware {
	hasRequirements: false;
}
export interface CyberwareWithRequirements extends BaseCyberware {
	hasRequirements: true;
	requirements: AnyReq[];
}

export interface OSWare extends CyberwareWithRequirements {
	slot: "OS";
	OS: "speed" | "strength" | "net";
}

//Handling cases where multiple types of cyberware can act as prerequisites for other cyberware.
export interface SlotWareNoReq extends CyberwareNoRequirements {
	baseSlot: string;
}
export interface SlotWareWithReq extends CyberwareWithRequirements {
	baseSlot: string;
}
export type SlotWare = SlotWareNoReq | SlotWareWithReq;

export type AnyReq = StatReq | CyberwareReq | OSReq | SlotReq;
export interface BaseReq {
	type: "stat" | "cyberware" | "OS" | "slot";
}

export interface SlotReq extends BaseReq {
	type: "slot";
	slot: string;
	tier: number;
}
export interface CyberwareReq extends BaseReq {
	type: "cyberware";
	cyberware: string;
	tier: number;
}

export interface OSReq extends BaseReq {
	type: "OS";
	OS: "speed" | "strength" | "net";
}

export interface StatReq extends BaseReq {
	type: "stat";
	stat: "neuro" | "phys" | "reflex";
	value: number;
}

export function requirementCheck(
	cyberware: Cyberware,
	stats: { [key: string]: number },
	installedCyberware: { [key: string]: Cyberware }
) {
	if (cyberware.hasRequirements) {
		//TODO: handle comprehensive requirement checking!
		const reqs = cyberware.requirements;
		const statReqs = reqs.filter((req) => req.type === "stat");
		const wareReqs = reqs.filter((req) => req.type === "cyberware");
		const slotReqs = reqs.filter((req) => req.type === "slot");
		const OSReqs = reqs.filter((req) => req.type === "OS");
		const statReqCheck = statReqs.every((req) =>
			checkStatReqs(req as StatReq, stats)
		);
		const wareReqCheck = wareReqs.every((req) =>
			checkWareReqs(req as CyberwareReq, installedCyberware)
		);
		const slotReqCheck = slotReqs.every((req) =>
			checkSlotReqs(req as SlotReq, installedCyberware)
		);
		const OSReqCheck = OSReqs.every((req) =>
			checkOSReqs(req as OSReq, installedCyberware)
		);
		return statReqCheck && wareReqCheck && slotReqCheck && OSReqCheck;
	}
	return true;
}
const checkWareReqs = (
	req: CyberwareReq,
	installedCyberware: { [key: string]: Cyberware }
) => {
	const ware = installedCyberware[req.cyberware];
	if (!ware) return false;
	return ware.tier >= req.tier;
};

const checkSlotReqs = (
	req: SlotReq,
	installedCyberware: { [key: string]: Cyberware }
) => {
	return Object.values(installedCyberware).some(
		(ware) => ware.slot === req.slot && ware.tier >= req.tier
	);
};

const checkOSReqs = (
	req: OSReq,
	installedCyberware: { [key: string]: Cyberware }
) => {
	return Object.values(installedCyberware).some((ware) => {
		if (ware.slot === "OS") {
			const curr = ware as OSWare;
			return curr.OS === req.OS;
		} else return false;
	});
};

const checkStatReqs = (req: StatReq, stats: { [key: string]: number }) =>
	stats[req.stat] >= req.value;

export const cyberwareBySlot: { [key: string]: Cyberware[] } = {
	OS: Object.values(OSOptions),
	Sensory: Object.values(sensoryOptions),
	Skeleton: Object.values(skeletonOptions),
	Muscular: Object.values(muscularOptions),
	Arms: Object.values(armOptions),
	Legs: Object.values(legOptions),
	Hands: Object.values(handOptions),
	Brain: Object.values(brainOptions),
	Nervous: Object.values(nervousOptions),
	Skin: Object.values(skinOptions),
};
