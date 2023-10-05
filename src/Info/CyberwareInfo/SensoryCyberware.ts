import { Cyberware } from "../Cyberware";

export const sensoryOptions: { [key: string]: Cyberware } = {
	kiroshiOptics: {
		id: "kiroshiOptics",
		name: "Kiroshi Optics",
		description:
			"A basic set of cybereyes, capable of interfacing with other cyberware and wireless net systems. This is the basic requirement for any other cyberware that requires visual input.",
		price: 100,
		slot: "sensory",
		tier: 0,
		capCost: 1,
		hasRequirements: false,
		baseSlot: "optical",
	},
	kiroshiOpticsMKII: {
		id: "kiroshiOpticsMKII",
		name: "Kiroshi Optics MKII",
		description:
			"An upgraded set of cybereyes, capable of interfacing with other cyberware and wireless net systems, as well as being capable of basic zooming and recording functions. This fulfills the basic requirement for any other cyberware that requires visual input.",
		price: 300,
		slot: "sensory",
		tier: 1,
		capCost: 2,
		hasRequirements: false,
		baseSlot: "optical",
	},
	cyberaudio: {
		id: "cyberaudio",
		name: "Cyberaudio",
		description:
			"A basic set of cyberaudio, capable of interfacing with other cyberware and wireless net systems. This is the basic requirement for any other cyberware that requires audio input.",
		price: 80,
		slot: "sensory",
		tier: 0,
		capCost: 1,
		hasRequirements: false,
		baseSlot: "aural",
	},
	chromedAudio: {
		id: "chromedAudio",
		name: "Chromed Audio",
		description:
			"A more advanced set of audio implants, acting as the basis for many further augments and enabling connections to external net systems and other cyberware.",
		price: 150,
		tier: 1,
		slot: "sensory",
		capCost: 2,
		hasRequirements: false,
		baseSlot: "aural",
	},
	olfactoryBooster: {
		id: "olfactoryBooster",
		name: "Olfactory Booster",
		description:
			"A set of augments for the user's nose, allowing them to detect and identify a wide variety of scents and smells. This is the basic requirement for any other cyberware that requires olfactory input.",
		price: 80,
		slot: "sensory",
		tier: 0,
		capCost: 1,
		hasRequirements: true,
		requirements: [{ type: "cyberware", cyberware: "neuralLink", tier: 0 }],
		baseSlot: "olfactory",
	},
	tactileBooster: {
		id: "tactileBooster",
		name: "Tactile Booster",
		description:
			"A set of augments for the user's skin, allowing them to detect and identify a wide variety of textures and temperatures. This is the basic requirement for any other cyberware that requires tactile input.",
		price: 80,
		slot: "sensory",
		tier: 0,
		capCost: 1,
		hasRequirements: true,
		requirements: [{ type: "cyberware", cyberware: "neuralLink", tier: 0 }],
		baseSlot: "tactile",
	},
	//TODO: write down mechanical effects of pain editor
	painEditor: {
		id: "painEditor",
		name: "Pain Editor",
		description:
			"A set of augments that intercepts pain signals before they reach the brain, allowing the user to ignore pain and injury.",
		price: 200,
		slot: "sensory",
		tier: 1,
		capCost: 3,
		hasRequirements: true,
		requirements: [{ type: "OS", OS: "strength" }],
	},
	chyron: {
		id: "chyron",
		name: "Chyron",
		description:
			"A screen integrated into cybereyes that acts as a UI for messaging, data browsing, etc.",
		price: 50,
		slot: "sensory",
		tier: 0,
		capCost: 1,
		hasRequirements: true,
		requirements: [{ type: "slot", slot: "optical", tier: 0 }],
	},
	runnerVision: {
		id: "runnerVision",
		name: "Runner Vision",
		description:
			"A catchall term for a small suite of aftermarket modifications to UI-capable cybereyes, enabling the user to see a variety of information about their surroundings, including the location of enemies, allies, and other points of interest, as well as providing a UI layer for netrunning activities.",
		price: 100,
		tier: 1,
		slot: "sensory",
		capCost: 3,
		hasRequirements: true,
		requirements: [
			{ type: "slot", slot: "optical", tier: 0 },
			{ type: "OS", OS: "net" },
		],
	},
	altVision: {
		id: "altVision",
		name: "Alt Vision",
		description:
			"A set of augments that allow the user to see in the infrared and ultraviolet spectrums.",
		price: 120,
		tier: 1,
		capCost: 2,
		slot: "sensory",
		hasRequirements: true,
		requirements: [{ type: "slot", slot: "optical", tier: 1 }],
	},
	dolphinAdaptation: {
		id: "dolphinAdaptation",
		name: "Dolphin Adaptation",
		description:
			"A set of augments that allow the user to hear ultrasound, and to use echolocation to navigate and identify objects to a limited degree.",
		price: 100,
		tier: 1,
		capCost: 2,
		slot: "sensory",
		hasRequirements: true,
		requirements: [{ type: "slot", slot: "aural", tier: 1 }],
	},
};