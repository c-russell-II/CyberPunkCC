import { Cyberware } from "../Cyberware";

export const muscularOptions: { [key: string]: Cyberware } = {
	graftedMuscle: {
		id: "graftedMuscle",
		name: "graftedMuscle",
		description:
			"A comprehensive set of additional fibers and muscles grafted onto the user's existing musculature, increasing their strength and speed.",
		price: 150,
		slot: "muscular",
		tier: 0,
		capCost: 3,
		hasRequirements: true,
		requirements: [{ type: "OS", OS: "strength" }],
	},
	borgMuscles: {
		id: "borgMuscles",
		name: "Borg Muscles",
		description:
			"One half of a set of augments functionally turning the user's body into a fully Cyborg construct.",
		price: 300,
		tier: 2,
		capCost: 8,
		slot: "muscular",
		hasRequirements: true,
		requirements: [{ type: "OS", OS: "strength" }],
	},
};