import { ExampleAbility, ExampleCharacter } from "./RoleTypes";

const silverhand = {
    name: "Robert John 'Johnny Silverhand' Linder",
    description: "The visionary behind Samurai, Silverhand is an egotist, a rabid anti-corpo advocate, and arguably the most famous Night City legend. Participating in one Arasaka tower raid by running a gig-turned-riot that neutered 'saka security, and another that resulted in the infamous 'Night City Holocaust' with the nuking of 'saka tower, Johnny's exploits and fame are the envy of every two-bit kid with a guitar and more ambition than sense."
}

const churchill = {
    name: "Sir Winston Leonard Spencer Churchill",
    description: "Not every rocker is a gun-toting, guitar-wielding street kid. Politicos fall into just the same role. Churchill's leadership of Britain through world war 2 has him considered one of the 20th century's most significant figures, and his fight against fascism still have him lauded by some as the greatest prime minister in British history."
}

const chavez = {
    name: "Cesar Chavez",
    description: "Performers, aristocrats, musicians - and the common man. Chavez was a farm worker, and a labor leader, who fought for the rights of the working class in the United States. His work with the United Farm Workers union led to the first successful farm worker union in the United States, and his work with the National Farm Workers Association led to the first successful farm worker strike in US history."
}

const gig = {
    name: "Gig",
    description: "Be it a poetry slam, a march down main street, or a good-old-fashioned concert, you know how to get a crowd going, and how to keep them going.",
    effect: "You can use Gig to build up a crowd of followers and fans - or even just passers-by. And, if you do it right, you can use that crowd to get what you want.",
    associatedStats: ['path', 'rep', 'connections']
}

const publicSpeaker = {
    name: "Public Speaker",
    description: "Whether you do it through a friend's net livestream, a bunch of loudspeakers, or a megaphone, you know how to get your message out there, and how to make sure people hear it.",
    effect: "Public Speaker lets you get the ear of the public, and through that, the ear of many powerful or influential others - or, maybe, just incite people to action across the city.",
    associatedStats: ['path', 'rep', 'neuro']
}

const personalCharisma = {
    name: "Personal Charisma",
    description: "Whether you're a subject of adoration or hatred to the public, your charm and allure in person is very, very difficult to deny.",
    effect: "You have unique advantages to in-person social interactions, and can use your charms and wiles to get what you need.",
    associatedStats: ['rep', 'path', 'phys']
}



export const exampleRockers: ExampleCharacter[] = [silverhand, churchill, chavez];
export const exampleRockerAbilities: ExampleAbility[] = [gig, publicSpeaker, personalCharisma];