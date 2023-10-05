import { Cyberware } from "../Cyberware";

export const armOptions: { [key: string]: Cyberware } = {
	mantisBlades: {
		id: "mantisBlades",
		name: "Mantis Blades",
		description:
			"A set of retractable blades that extend from the user's forearms, allowing them to make deadly melee attacks.",
		price: 400,
		slot: "arms",
		tier: 1,
		capCost: 6,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "reflex", value: 2 }],
	},
	monowhip: {
		id: "monowhip",
		name: "Monowhip",
		description:
			"A retractable whip made of a single molecule of super-hard material, capable of slicing through almost any material.",
		price: 400,
		slot: "arms",
		tier: 1,
		capCost: 6,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "reflex", value: 3 }],
	},
	ordnArms: {
		id: "ordnArms",
		name: "OrdnArms",
		description:
			"A full rebuild from mid-bicep down, the Militech OrdnArms are a set of modular cybernetic arms which enable direct installation and utilization of high-end military-grade weaponry.",
		price: 400,
		slot: "arms",
		tier: 1,
		capCost: 7,
		hasRequirements: true,
		requirements: [
			{ type: "stat", stat: "phys", value: 5 },
			{ type: "OS", OS: "strength" },
		],
	},
	swissMultiArm: {
		id: "swissMultiArm",
		name: "Swiss MultiArm",
		description:
			"A forearm-down rebuild, this is a play on the old swiss army knife - it allows the user to integrate a wide variety of tools and basic weaponry into their arm, and swap between them with a thought.",
		price: 100,
		slot: "arms",
		tier: 0,
		capCost: 5,
		hasRequirements: false,
	},
};