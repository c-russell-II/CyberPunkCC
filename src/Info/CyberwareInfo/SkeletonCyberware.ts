import { Cyberware } from "../Cyberware";

export const skeletonOptions: { [key: string]: Cyberware } = {
	boneLacing: {
		id: "boneLacing",
		name: "Bone Lacing",
		description:
			"A set of augments that lace the skeleton of the user with a variety of materials, increasing their durability and strength.",
		price: 100,
		slot: "skeleton",
		tier: 0,
		capCost: 3,
		hasRequirements: true,
		requirements: [{ type: "OS", OS: "strength" }],
	},
	metabolicCache: {
		id: "metabolicCache",
		name: "Metabolic Cache",
		description:
			"A set of augments that enable the user to 'save up' metabolic activity, allowing them to spend that cache on a temporary increase to healing ability and physical durability.",
		price: 200,
		slot: "skeleton",
		tier: 1,
		capCost: 3,
		hasRequirements: true,
		requirements: [{ type: "OS", OS: "strength" }],
	},
	borgSkeleton: {
		id: "borgSkeleton",
		name: "Borg Skeleton",
		description:
			"One half of a set of augments functionally turning the user's body into a fully Cyborg construct.",
		price: 600,
		tier: 2,
		capCost: 8,
		slot: "skeleton",
		hasRequirements: true,
		requirements: [{ type: "OS", OS: "strength" }],
	},
};