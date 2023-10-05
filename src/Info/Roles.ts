//TODO: Role info, descriptions, bonuses and abilities... 

import { exampleCorpoAbilities, exampleCorpoCharacters } from "./Roles/Corpo";
import { exampleFixerAbilities, exampleFixers } from "./Roles/Fixer";
import { exampleMediaAbilities, exampleMediaCharacters } from "./Roles/Media";
import { exampleNomadAbilities, exampleNomadCharacters } from "./Roles/Nomad";
import { exampleRockerAbilities, exampleRockers } from "./Roles/Rocker";
import { SingleRole } from "./Roles/RoleTypes";
import { exampleSoloAbilities, exampleSolos } from "./Roles/Solo";
import { exampleTechAbilities, exampleTechCharacters } from "./Roles/Tech";

const roleInfo: {[key: string]: SingleRole} = {
    'Fixer': {
        name: "Fixer",
        description: 
            "Fixers are the well-connected fencers, smugglers, and information brokers who apply their trade on the black market. As they are so well-connected to comings and going on the streets, they can locate, acquire and know about a desired person, place or thing within their area of operation.",
        abilityImpact: {
            "path": "How much your connections will do for you, and how much they'll charge you.",
            "connections": "how your network and connections make it easier to buy things or get things done - knowing people who know people, etc",
            "rep": "How much people trust you, like you, fear you - and how useful that is in leveraging them to do what you need"
        },
        exampleCharacters: exampleFixers,
        exampleAbilities: exampleFixerAbilities,
        questions: ["What kind of jobs do you tend to get involved with?", "Do you have any lines you won't cross?", "How do you pick your clients?"]
    },
    'Solo': {
        name: "Solo",
        description: "Solder, bodyguard, infiltrator - whatever they choose to call themselves, a Solo is a specialist in field ops. They're who you call when you need someone to get out there and get something done, personally.",
        abilityImpact: {
            "path": "non-combat abilities tied to whatever it was you did before the campaign started. Might mean you're better at jury-rigging, might help with scouting and intel gathering, just depends.",
            "connections": "Minor. Might be relevant for knowing someone who can help you get tools or info, but that's really it.",
            "rep": "Minor directly - but it'll primarily be tied to your rep as whatever type of Solo you are or were - the jobs you did and didn't take, etc."
        },
        exampleCharacters: exampleSolos,
        exampleAbilities: exampleSoloAbilities,
        questions: ["What's your MO on the job?", "What tools do you always have on you?", "What's your favorite kind of job to get?"]
    },
    'Nomad': {
        name: "Nomad",
        description: "The first nomads may have been nothing more than displaced farmers and fishermen, now the Seven Nations are one of the defining forces of the modern North America. You're a nomad, with the family connections - and expectations - that that entails.",
        abilityImpact: {
            "path": "This is a measure of your rank, influence, and pull with your clan. Directly useful in the way it lets you borrow from the family garage more and more advanced or expensive vehicles.",
            "connections": "Where path is what you can get based on rank, connections are what you can leverage into borrowing something more esoteric or above your paygrade. If you've got a choom with that AV you really need, you really need to know them well.",
            "rep": "How liked or feared, trusted you are will inform what they're willing to do for you - if you need to reach above your paygrade in the clan, rep might be necessary to get that reach with someone who only knows you by reputation.",
        },
        exampleCharacters: exampleNomadCharacters,
        exampleAbilities: exampleNomadAbilities,
        questions: ["Why did you leave the clan?", "What's your iconic vehicle?", "What's your favorite thing about being part of your clan?"]
    },
    'Tech': {
        name: "Tech",
        description: "You see potential in every bit of scrap you come across - be it scrap code, old chrome, or wounded chooms. Your abilities aim to turn something damaged or discarded into something invaluable- either for you, or your customers.",
        abilityImpact: {
            "path": "How much you know about the thing you're trying to do. If you're trying to repair a car, your path in auto mechanics will be the primary factor in how well you do.",
            "connections": "Minor. Might be relevant for knowing someone who can help you get tools or info, but that's really it.",
            "rep": "Minor directly - but it'll primarily be tied to your rep as whatever type of Tech you are or were - the jobs you did and didn't take, etc."
        },
        exampleCharacters: exampleTechCharacters,
        exampleAbilities: exampleTechAbilities,
        questions: ["What's your technical specialty?", "What's your magnum opus?"]
    },
    'Rocker': {
        name: "Rocker",
        description: "The world needs its revolutionaries, the drivers of change and upheaval. Rockerboy has come to mean more than just a musician - it signifies all the change and upheaval they embodied. You're a Rocker, and you're here to change the world - or die trying.",
        abilityImpact: {
            "path": "How good you are at your chosen medium - singing, playing, acting, etc",
            "connections": "How much you know about the industry, who's who, who's hiring, who's firing, who's got a new album coming out - this will also help you get or set up gigs, and get in touch with people.",
            "rep": "How much people like you, how much they trust you, how much they want to work with you - and how much they want to work with you will be the primary factor in how much you can leverage them to get what you want."
        },
        exampleCharacters: exampleRockers,
        exampleAbilities: exampleRockerAbilities,
        questions: ['What was the first thing you did that got you noticed?', 'What kind of relationship do you maintain with fans and followers?', "What sort of change are you trying to champion?"]
    },
    'Media': {
        name: "Media",
        description: "The Medias of the world have one role, and one role only - they are the pipelines between the powerful and the powerless. They tell the stories, spin the truth, and define the world that the public eye sees. For good or ill, you're the filter between the truth and the public.",
        abilityImpact: {
            "path": "How good you are at your chosen medium - writing, video, etc",
            "connections": "Who you know that can signal boost your articles or news, who can help you get info or rumors that you might want to chase down.",
            "rep": "Who you've pissed off with one article or another, who likes the work you do, and what they're willing to do to help you get the next big scoop."
        },
        exampleCharacters: exampleMediaCharacters,
        exampleAbilities: exampleMediaAbilities,
        questions: ['What drove you to build a public platform for yourself?', "What was your breakout story about?", "What is your most important principle?"]
    },
    'Corpo': {
        name: "Corpo",
        description: "The world is run by money, and you've got more than most. You're a Corpo, and you're here to make a name for yourself - and make a lot of money doing it.",
        abilityImpact: {
            "path": "This will be how far you got in climbing the corporate ladder. The higher you got, the more you know about how things work, and the more you can leverage that knowledge.",
            "connections": "Who you know, who you can call on for a favor, who you can call on to get you out of a jam, who you can call on to get you into a jam.",
            "rep": "How much people like you, how much they trust you, how much they want to work with you - and how much that affection, fear, or trust can be leveraged."
        },
        exampleCharacters: exampleCorpoCharacters,
        exampleAbilities: exampleCorpoAbilities,
        questions: ["What corp did you work for? Or, what Industry was your employer in?", "How did you feel about the cutthroat ambition of the corporate world?", "What drove you to switch to edgerunning?"]
    }
}

export default roleInfo;