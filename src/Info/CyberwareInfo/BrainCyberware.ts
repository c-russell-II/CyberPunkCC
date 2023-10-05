import { Cyberware } from "../Cyberware";

export const brainOptions: { [key: string]: Cyberware } = {
	neuralLink: {
		id: "neuralLink",
		name: "Neural Link",
		description:
			"A basic set of augments that allow the user to interface with other cyberware and wireless net systems.",
		price: 40,
		slot: "brain",
		tier: 0,
		capCost: 2,
		hasRequirements: false,
	},
	chipwareSocket: {
		id: "chipwareSocket",
		name: "Chipware Socket",
		description:
			"A catch-all term for a industry standard base for a variety of cyberware, allowing the user to install a variety of chips and modules.",
		price: 30,
		slot: "brain",
		tier: 0,
		capCost: 1,
		hasRequirements: false,
		baseSlot: "socket",
	},
	memoryChip: {
		id: "memoryChip",
		name: "Mem Chip",
		description:
			"A basic memory chip, allowing the user to store and access data.",
		price: 30,
		slot: "brain",
		tier: 0,
		capCost: 1,
		hasRequirements: true,
		requirements: [{ type: "slot", slot: "socket", tier: 0 }],
	},
	skillIntegrator: {
		id: "skillIntegrator",
		name: "Skill Integrator",
		description:
			"A set of augments that allow the user to directly interface with a skill chip, allowing them to use the skills stored on the chip.",
		price: 50,
		slot: "brain",
		tier: 1,
		capCost: 2,
		hasRequirements: true,
		requirements: [
			{ type: "slot", slot: "socket", tier: 0 },
			{ type: "stat", stat: "neuro", value: 3 },
		],
	},
	commWare: {
		id: "commWare",
		name: "CommWare",
		description:
			"A neural integration link for exterior communication. Primarily used for radio and phone communication, but can be used for other forms of communication as well, which forms are available will primarily depend on the available cyberware.",
		tier: 0,
		price: 30,
		slot: "brain",
		capCost: 1,
		hasRequirements: false,
	},
};