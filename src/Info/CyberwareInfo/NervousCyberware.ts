import { Cyberware } from "../Cyberware";

export const nervousOptions: { [key: string]: Cyberware } = {
	synapticAccel: {
		//gives one reroll on initiative rolls per combat.
		id: "synapticAccel",
		name: "SynapticAccel",
		description:
			"A set of augments that allow temporary boosts to synaptic responses, increasing the user's speed and reaction time.",
		price: 200,
		tier: 1,
		slot: "nervous",
		capCost: 4,
		hasRequirements: true,
		requirements: [{ type: "OS", OS: "speed" }],
	},
	synapticShielding: {
		//provides EMP defense and acts as armor against electrical damage types.
		id: "synapticShielding",
		name: "Synaptic Shielding",
		description:
			"A set of augments that protect the user's nervous system from electrical damage, and from the effects of EMP.",
		price: 200,
		tier: 1,
		slot: "nervous",
		capCost: 4,
		hasRequirements: true,
		requirements: [{ type: "OS", OS: "net" }],
	},
	synapticIntegration: {
		//lets you use your nervous system to timeshare for net actions
		id: "synapticIntegration",
		name: "Synaptic Integration",
		description:
			"A set of augments that allow the user to interface with a cyberdeck, and to use their nervous system to timeshare for net actions.",
		price: 200,
		tier: 1,
		slot: "nervous",
		capCost: 4,
		hasRequirements: true,
		requirements: [
			{ type: "OS", OS: "net" },
			{ type: "stat", stat: "phys", value: 3 },
		],
	},
};