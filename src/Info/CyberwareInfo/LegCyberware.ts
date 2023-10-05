import { Cyberware } from "../Cyberware";

export const legOptions: { [key: string]: Cyberware } = {
	jumpJets: {
		id: "jumpJets",
		name: "Jump Jets",
		description:
			"A set of augments that allow the user to make incredible leaps and jumps.",
		price: 250,
		slot: "legs",
		tier: 1,
		capCost: 6,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "phys", value: 3 }],
	},
	speedSkates: {
		id: "speedSkates",
		name: "Speed Skates",
		description:
			"A set of augments that allow the user to move at incredible speeds, and to skate along the ground or other surfaces. Named 'skates' not for being literal skates, but for the odd skating motion the user makes when moving at high speeds.",
		price: 140,
		slot: "legs",
		tier: 1,
		capCost: 6,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "reflex", value: 3 }],
	},
	gripFeet: {
		id: "gripFeet",
		name: "Grip Feet",
		description:
			"A set of augments that allow the user to climb any surface, and to walk on walls and ceilings.",
		price: 120,
		slot: "legs",
		tier: 0,
		capCost: 4,
		hasRequirements: false,
	},
};