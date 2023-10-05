import { ExampleAbility, ExampleCharacter } from "./RoleTypes";

const fiona = {
    name: "Fiona Hayes",
    description: "The face of Net54, Fiona Hayes is responsible, directly or indirectly, for a large portion of the disgraced powerful in Night City's prisons. She's a damned good journalist - although, of course, that doesn't always make her popular."
}

const nostradamus = {
    name: "Nostradamus",
    description: "Though the reference might be lost on most the modern population, that's fine - Nostradamus focuses more on expanding and protecting what is rapidly becoming the largest paper book library in the world. The fact that he's doing this with nothing more than a secluded warehouse, a converted mainframe, and a network of hired netrunners is a testament to his dedication and craft."
}

const bes = {
    name: "Bes Isis",
    description: "Few know the true origins of Bes Isis - fewer still would believe she was once Nancy Hartley, keyboardist for Johnny Silverhand's Samurai. Now an investigative journalist, she takes risks others won't - and gets stories others can't as a result."
}

const dataAnalysis = {
    name: "Data Analysis",
    description: "Where others see unrelated tidbits, you see patterns - a shift in price in this market, a hiring surge in that market - and you might just uncover some Corpo foul play.",
    effect: "You can connect seemingly minor factoids into a whole far more than the sum of its parts. You can use Data Analysis to find patterns in data, and to use those patterns to predict future events - or uncover hidden events in the past.",
    associatedStats: ['path', 'neuro', 'connections']
}

const dataMining = {
    name: "Data Mining",
    description: "You know how to get information from the net, and how to get it fast. You know how to get into the net, and how to get out again without leaving a trace.",
    effect: "Data Mining is used to find information on the net, and to acquire it.",
    associatedStats: ['path', 'neuro', 'connections']
}

const sway = {
    name: "Sway",
    description: "You've focused primarily on learning how to use your words - whether in articles, videos, or just in person - to sway the public mind. You have a knack for getting people, not just to listen, but to believe you.",
    effect: "Sway enables you to attempt to shift public sentiment, inspire public hatreds or belief, and generally use your information and platform to effect changes in the public mind.",
    associatedStats: ['rep', 'path', 'connections']
}
export const exampleMediaCharacters: ExampleCharacter[] = [bes, nostradamus, fiona]
export const exampleMediaAbilities: ExampleAbility[] = [dataAnalysis, dataMining, sway]