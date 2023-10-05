import { OSWare } from "../Cyberware";

export const OSOptions: { [key: string]: OSWare } = {
	sandevistan: {
		id: "sandevistan",
		name: "Sandevistan",
		description:
			"A pervasive rewiring of the user's nervous system, musculature, and mind - the Sandevistan allows the user to slow down their perception of time, and significantly increases the speed at which they can move and react.",
		price: 500,
		slot: "OS",
		tier: 1,
		capCost: 10,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "reflex", value: 4 }],
		OS: "speed",
	},
	berserk: {
		id: "berserk",
		name: "Berserk",
		description:
			"A pervasive rewiring of the user's nervous system, musculature, and mind - the Berserk chip allows the user to enter a state of heightened aggression, increasing their strength and speed, and allowing them to ignore pain and injury. This chip also acts as a foundation for cyberware necessary for the use of heavier weapons and armor.",
		price: 500,
		slot: "OS",
		tier: 1,
		capCost: 10,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "phys", value: 4 }],
		OS: "strength",
	},
	netrunnerDeck: {
		id: "netrunnerDeck",
		name: "Netrunner Deck",
		description:
			"A pervasive neural rewire transforms large swathes of the user's central nervous system into a cyberdeck, allowing them to interface with the Net and run programs directly from their brain.",
		price: 500,
		slot: "OS",
		tier: 1,
		capCost: 10,
		hasRequirements: true,
		requirements: [{ type: "stat", stat: "neuro", value: 4 }],
		OS: "net",
	},
};