import { Cyberware } from "../Cyberware";

export const skinOptions: { [key: string]: Cyberware } = {
	skinWeave: {
		//armor
		id: "skinWeave",
		name: "Skin Weave",
		description:
			"A set of augments that reinforce the user's skin, increasing their durability and resistance to damage.",
		price: 100,
		slot: "skin",
		tier: 0,
		capCost: 2,
		hasRequirements: true,
		requirements: [{ type: "OS", OS: "strength" }],
	},
	subdermalArmor: {
		//MOAR ARMOR
		id: "subdermalArmor",
		name: "Subdermal Armor",
		description:
			"A set of augments that insert a layer of flexible armor beneath the user's skin, significantly increasing their toughness.",
		price: 200,
		slot: "skin",
		tier: 1,
		capCost: 4,
		hasRequirements: true,
		requirements: [{ type: "OS", OS: "strength" }],
	},
	pcaInterface: {
		id: "pcaInterface",
		name: "Personal Combat Armor Interface",
		description:
			"A suite of ports, internal rewiring, and minor neural modification enabling direct integration with a variety of powered combat armors.",
		price: 300,
		slot: "skin",
		tier: 1,
		capCost: 8,
		hasRequirements: true,
		requirements: [
			{ type: "OS", OS: "strength" },
			{ type: "stat", stat: "phys", value: 5 },
		],
	},
	opticalCamo: {
		id: "opticalCamo",
		name: "Optical Camo",
		description: "A suite of chromatophores and optical sensors that allow the user to blend into their surroundings.",
		price: 250,
		slot: "skin",
		tier: 1,
		capCost: 4,
		hasRequirements: false
	},
	fashionWare: {
		id: "fashionWare",
		name: "FashionWare",
		description:
			"A catchall term for any possible non-functional ware installed entirely for the purpose of aesthetics.",
		price: 0,
		slot: "skin",
		tier: 0,
		capCost: 0,
		hasRequirements: false,
	},
};