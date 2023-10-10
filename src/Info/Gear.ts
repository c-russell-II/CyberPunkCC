import { StatReq } from "./Cyberware";

/*
So what gear do I unequivocally *need* for this game?
Firearms - various types
Melee weapons - various types
*/

interface BaseGear {
    id: string;
    name: string;
    price: number;
    description: string;
    type: string;
}

export type AnyFirearm = FirearmNoReqs | FirearmWithReqs;

interface BaseFirearm extends BaseGear {
    type: 'firearm';
    firearmType: 'pistol' | 'subMachineGun' | 'sniper' | 'assaultRifle' | 'shotgun' | 'heavy'
    damage: number;
    range: 'short' | 'medium' | 'long' | 'extreme';
    rof: number;
    hasRequirements: boolean;
}
interface FirearmNoReqs extends BaseFirearm {
    hasRequirements: false
}
interface FirearmWithReqs extends BaseFirearm {
    hasRequirements: true;
    requirements: StatReq[];
}

const pistols: { [key: string]: AnyFirearm } = {
	lightPistol: {
		id: "lightPistol",
		name: "pistol",
		price: 50,
		description: "A small pistol that isn't difficult to conceal.",
		type: "firearm",
		firearmType: "pistol",
		damage: 1,
		range: "short",
		rof: 1,
		hasRequirements: false,
	},
	stealthPistol: {
		id: "stealthPistol",
		name: "stealth pistol",
		firearmType: "pistol",
		price: 100,
		description:
			"A small pistol with integrated suppressor, expressly designed for concealment.",
		type: "firearm",
		damage: 1,
		range: "short",
		rof: 1,
		hasRequirements: false,
	},
	revolver: {
		id: "revolver",
		name: "revolver",
		firearmType: "pistol",
		price: 90,
		description: "An old, but functional six-shooter.",
		type: "firearm",
		damage: 2,
		range: "medium",
		rof: 1,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "phys", value: 2 }],
	},
	heavyPistol: {
		id: "heavyPistol",
		name: "heavy pistol",
		firearmType: "pistol",
		price: 160,
		description: "A weighty, solid-steel built semiautomatic handgun.",
		type: "firearm",
		damage: 3,
		range: "medium",
		rof: 1,
		hasRequirements: false,
	},
	heavyRevolver: {
		id: "heavyRevolver",
		name: "heavy revolver",
		firearmType: "pistol",
		price: 180,
		description: "An outsized, centerfire revolver in a heavy caliber.",
		type: "firearm",
		damage: 4,
		range: "medium",
		rof: 1,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "phys", value: 3 }],
	},
};

const subMachineGuns: { [key: string]: AnyFirearm } = {
	smg: {
		id: "smg",
		name: "submachine gun",
		firearmType: "subMachineGun",
		price: 200,
		description: "A small, lightweight automatic weapon.",
		type: "firearm",
		damage: 2,
		range: "medium",
		rof: 2,
		hasRequirements: false,
	},
	fastSmg: {
		id: "fastSmg",
		name: "Fast submachine gun",
		firearmType: "subMachineGun",
		price: 250,
		description: "A light submachine gun with a higher rate of fire.",
		type: "firearm",
		damage: 2,
		range: "medium",
		rof: 3,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "reflex", value: 2 }],
	},
	overclockedSmg: {
		id: "overclockedSmg",
		name: "Overclocked submachine gun",
		firearmType: "subMachineGun",
		price: 300,
		description: "A light submachine gun with an absurd rate of fire.",
		type: "firearm",
		damage: 1,
		range: "medium",
		rof: 4,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "reflex", value: 3 }],
	},
	heavySmg: {
		id: "heavySmg",
		name: "heavy submachine gun",
		firearmType: "subMachineGun",
		price: 300,
		description: "A larger, heavier automatic weapon.",
		type: "firearm",
		damage: 3,
		range: "medium",
		rof: 2,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "phys", value: 2 }],
	},
};

const assaultRifles: { [key: string]: AnyFirearm } = {
	ar: {
		id: "ar",
		name: "assault rifle",
		firearmType: "assaultRifle",
		price: 300,
		description: "A standard-issue military rifle.",
		type: "firearm",
		damage: 3,
		range: "long",
		rof: 2,
		hasRequirements: false,
	},
	heavyAr: {
		id: "heavyAr",
		name: "heavy assault rifle",
		firearmType: "assaultRifle",
		price: 400,
		description: "A larger, heavier military rifle.",
		type: "firearm",
		damage: 3,
		range: "long",
		rof: 3,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "phys", value: 3 }],
	},
	fastAr: {
		id: "fastAr",
		name: "fast assault rifle",
		firearmType: "assaultRifle",
		price: 300,
		description: "A military assault rifle with an increased rate of fire.",
		type: "firearm",
		damage: 2,
		range: "long",
		rof: 4,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "reflex", value: 3 }],
	},
	dmr: {
		id: "dmr",
		name: "designated marksman rifle",
		firearmType: "assaultRifle",
		price: 400,
		description: "A long-range rifle with a scope.",
		type: "firearm",
		damage: 4,
		range: "extreme",
		rof: 1,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "phys", value: 3 }],
	},
};

const shotguns: { [key: string]: AnyFirearm } = {
	shotgun: {
		id: "shotgun",
		name: "shotgun",
		firearmType: "shotgun",
		price: 200,
		description: "Standard shotgun sold for home defense.",
		type: "firearm",
		damage: 3,
		range: "short",
		rof: 2,
		hasRequirements: false,
	},
	heavyShotgun: {
		id: "heavyShotgun",
		name: "heavy shotgun",
		firearmType: "shotgun",
		price: 250,
		description: "Heavier, more powerful shotgun.",
		type: "firearm",
		damage: 4,
		range: "short",
		rof: 2,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "phys", value: 3 }],
	},
};

const snipers: { [key: string]: AnyFirearm } = {
	targetRifle: {
		id: "targetRifle",
		name: "target rifle",
		firearmType: "sniper",
		price: 200,
		description:
			"A light, long-ranged rifle designed primarily for target shooting.",
		type: "firearm",
		damage: 2,
		range: "extreme",
		rof: 1,
		hasRequirements: false,
	},
	sniperRifle: {
		id: "sniperRifle",
		name: "sniper rifle",
		firearmType: "sniper",
		price: 300,
		description: "A long-ranged rifle designed for hunting or military use.",
		type: "firearm",
		damage: 4,
		range: "extreme",
		rof: 1,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "phys", value: 3 }],
	},
	antiMaterielRifle: {
		id: "antiMaterielRifle",
		name: "Anti-Materiel Rifle",
		firearmType: "sniper",
		price: 400,
		description:
			"A large, heavy rifle designed to destroy vehicles and other heavy targets.",
		type: "firearm",
		damage: 5,
		range: "extreme",
		rof: 1,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "phys", value: 4 }],
	},
};

const heavyWeapons: { [key: string]: AnyFirearm } = {
	lmg: {
		id: "lmg",
		name: "light machine gun",
		firearmType: "heavy",
		price: 400,
		description:
			"A heavy military weapon designed for sustained, suppressive fire.",
		type: "firearm",
		damage: 2,
		range: "long",
		rof: 4,
		hasRequirements: true,
		requirements: [
			{ type: "stat", stat: "phys", value: 4 },
			{ type: "stat", stat: "phys", value: 5 },
		],
	},
	infantryCannon: {
		id: "infantryCannon",
		name: "infantry cannon",
		firearmType: "heavy",
		price: 450,
		description:
			"A heavy, specialized weapon designed for use against borgs and emplacements.",
		type: "firearm",
		damage: 5,
		range: "medium",
		rof: 1,
		hasRequirements: true,
		requirements: [
			{ type: "stat", stat: "phys", value: 4 },
			{ type: "stat", stat: "phys", value: 5 },
		],
	},
};

export const firearms: {[key: string]: {[key: string]: AnyFirearm}} = {
    pistol: pistols,
    subMachineGun: subMachineGuns,
    assaultRifle: assaultRifles,
    shotgun: shotguns,
    sniper: snipers,
    heavy: heavyWeapons
};
