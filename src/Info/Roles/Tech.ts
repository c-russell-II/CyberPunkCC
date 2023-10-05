import { ExampleAbility, ExampleCharacter } from "./RoleTypes";

const frank = {
    name: "Franklin M'bolu",
    description: "A corporate tech through and through, M'bolu is responsible for Orbital Air's continuing dominance of the space travel industry. He's a brilliant engineer, and is, if you believe the rumors, in charge of the company's push to build a mass driver within Morro Rock. Maybe more important, there's whispers on the street that he deals tech on the black market as his preferred side hustle."
}

const blacklist = {
    name: "Blacklist",
    description: "A renegade chemical and cyber-engineer who got on the wrong side of biotechnica, he's known mostly as a Night City tech dealer, selling cybernetics to boostergangs and deniable virus weaponry to corpo agents."
}

const eran = {
    name: "Eran Malour", 
    description: "A veteran of 8 years in the Marines, Eran decided he'd use his veteran's benefits to start selling custom weaponry to his friends in Night City. Now, after quiet success in the black markets of NC, he's founded Malourian Arms - it's anyone's guess how far 'saka and militech will let that go, though."
}

const scrounger = {
    name: "Scrounger",
    description: "Only a poor artist blames his tools. You might be poor, but you're a hell of an artist - no matter where you are or what you need, you've a knack for finding just enough materials to finish your next trick or tool.",
    effect: "Scrounger is used to find materials and tools to build or repair things.",
    associatedStats: ['path', 'connections', 'neuro']
}

const cryoMed = {
    name: "CryoMed",
    description: "You're certified so thoroughly in medical technology that you might well get an offer from Trauma Team any day now. You know how to use the tools, and how to use them to save lives.",
    effect: "Familiarity and comfort with Cryoware, and the ability to make active medical checks even in the field.",
    associatedStats: ['path', 'neuro', 'reflex']
}

const cyberTinker = {
    name: "Cyber Tinker",
    description: "Most runners just use programs they get off the net, and dig into that code only when forced. You're different - you know how to get in there and make the changes you need to make, and you know how to make them stick. If you don't, well, the list of people you'd trust to write soft for you is short - because they're all people you've vetted personally.",
    effect: "Cyber Tinker is used to modify, augment, or outright build from scratch viruses, utilities, and other programs.",
    associatedStats: ['path', 'neuro', 'connections']
}

export const exampleTechCharacters: ExampleCharacter[] = [frank, blacklist, eran];
export const exampleTechAbilities: ExampleAbility[] = [scrounger, cryoMed, cyberTinker];