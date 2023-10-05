import { ExampleAbility, ExampleCharacter } from "./RoleTypes";

const david = {
    name: "David Martinez",
    description: "An absolute legend of Night City, David stole a prototype Sandevistan model, and rode that wave of luck to the peak of Night City's street life, until a run-in with Adam Smasher gave him the end every Night City legend gets - a shallow grave, and the toasts of every edgerunner in the city."
}

const blackhand = {
    name: "Morgan Blackhand",
    description: "A combat veteran who felt the call of the streets, Morgan Blackhand is the archetypal Solo - a legend in the biz, and a name that strikes fear into the hearts of anyone who knows it. He's the best there is, and he knows it."
}

const spider = {
    name: "Spider Murphy",
    description: "A netrunner with a resume a mile long, Murphy is on the short list for 'greatest netrunner ever.' Participating in the nuking of Arasaka tower in Night City, she plies her netrunning skills from the field as much as a chair, relying more on smarts and tech savvy than gunpowder and chrome."
}

const dangerSense = {
    name: "Danger Sense",
    description: "You have a sixth sense for danger, and you know how to get out of the way when things go south.",
    effect: "Danger Sense will help you spot hidden dangers, track ambush spots and cover positions, and warn you when something just doesn't smell right.",
    associatedStats: ['reflex', 'path', 'neuro']
}

const walkingArsenal = {
    name: "Walking Arsenal",
    description: "No matter what weapon you need to get the job done, you either have it on you, in your car, or know exactly how to get it, and quickly.",
    effect: "Walking Arsenals have access to more weapons to purchase, and can roll to see if they 'just happened' to bring some specific weapon with them this time.",
    associatedStats: ['path', 'connections', 'phys']
}

const chromeMacGyver = {
    name: "Chrome MacGyver",
    description: "You once saw someone repair a broken cyberarm with a roll of duct tape and a screwdriver. You know how to make the most of what you have, and how to make it work when it shouldn't.",
    effect: "Chrome MacGyver is used to repair cyberware, and to improvise jury-rigged solutions to problems.",
    associatedStats: ['neuro', 'path', 'reflex']
}

export const exampleSolos: ExampleCharacter[] = [david, blackhand, spider]

export const exampleSoloAbilities: ExampleAbility[] = [dangerSense, walkingArsenal, chromeMacGyver]