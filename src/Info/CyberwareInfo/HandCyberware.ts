import { Cyberware } from "../Cyberware";

export const handOptions: { [key: string]: Cyberware } = {
	subdermalGrip: {
		id: "subdermalGrip",
		name: "Subdermal Grip",
		description:
			"A set of augments that allow the user to directly interface with smart weapons, and physical tech access points.",
		price: 80,
		slot: "hands",
		tier: 0,
		capCost: 3,
		hasRequirements: true,
		requirements: [{ type: "cyberware", cyberware: "neuralLink", tier: 0 }],
	},
	rippers: {
		id: "rippers",
		name: "Rippers",
		description:
			"Extensible Carbo-Glass fingernails which can be extended and retracted at will, and which can be used as a weapon, augmenting unarmed strikes when extended.",
		price: 120,
		slot: "hands",
		tier: 0,
		capCost: 4,
		hasRequirements: false,
	},
};
