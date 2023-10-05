import { ExampleAbility, ExampleCharacter } from "./RoleTypes";

const rogue = {
	name: "Rogue Amendiares",
	description:
		"Once a well-known solo, a severe car crash left Rogue with a shattered spine and a broken career. Now she runs the Afterlife, the most famous club in NC, and the connections she has make her a very successful fixer. She's a bit of a legend in the biz, and has a reputation for being able to get anything, anywhere, for the right price.",
};
const dakota = {
	name: "Dakota Smith",
	description:
		"Known in the badlands as the 'Mad Coyote,' Dakota is a member of the Aldecaldos nomad family. While a skilled mechanic and driver in her own right, her broad network of connections and her reputation as a skilled fixer make her a valuable asset to the family.",
};
const hands = {
	name: "Wade 'Mr. Hands' Bleecker",
	description:
		"Mr. Hands was a high-ranking petrochem exec, until a sudden shake-up in upper management saw him escape an attempt on his life, and disappear to Night City to start again. He's the archetypal political fixer - charming and charismatic, with a broad network of connections he uses to get things done without ever leaving the shadows.",
};

const streetDeal = {
    name: "Street Deal",
    description:
        "Street Deal is the ability to find and acquire things on the black market. It's knowing who to talk to, where to go, and how to get what you need on the grimy back streets of your home turf.",
    effect: "Streetdeal is used to acquire items and services on the black market.",
    associatedStats: ["network", 'rep', 'path'],
};

const smoothOperator = {
    name: "Smooth Operator",
    description: "You know how to talk to people, and how to get them to do what you want. You're a smooth talker, and you're quite skilled at putting that talent to impressive effect.",
    effect: "Smooth Operator is used to convince people to do what you want, or to get information out of them, no matter the time, place, or context.",
    associatedStats: ['rep', 'path']
}

const netBroker = {
    name: "Net Broker",
    description: "You know how to find things on the net, and how to get them. You know where to look, and how to get what you need - and if you don't, you know who to ask.",
    effect: "Net Broker is used to find information on the net, and to acquire it.",
    associatedStats: ['path', 'connections', 'neuro']
}


export const exampleFixerAbilities: ExampleAbility[] = [streetDeal, smoothOperator, netBroker];

export const exampleFixers: ExampleCharacter[] = [rogue, dakota, hands];

