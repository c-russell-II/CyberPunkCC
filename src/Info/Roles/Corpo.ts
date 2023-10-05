import { ExampleAbility, ExampleCharacter } from "./RoleTypes";

const saburo = {
    name: "Saburo Arasaka",
    description: "The Emperor himself - founder of Arasaka Corporation. Getting his start in the Imperial Japanese navy, he took control of Arasaka after death of his father, and built it into one of the largest, most powerful corporations in the world. He claims to be a true Samurai Shogun - and he has the viciousness, ambition, and hunger for power and control to match."
}

const antonio = {
    name: "Antonio Luccessi",
    description: "Born in Italy, he worked for NATO, Beretta, and Colt - before branching out to find Armatech-Luccessi. A brilliant engineer, his leadership and genius would see the company first grow to compete for globe-spanning contracts, before consolidating into Militech international armaments - arguably the largest arms manufacturer in the world, and without a doubt the most influential corporation in the NUSA."
}

const billy = {
    name: "William Joseph 'Billy Joe' Brentwood",
    description: "Seemingly an affable loudmouth, endlessly full of fish stories and tall tales from his youth, it's good to remember that no one rises to command even a branch office of a megacorp like Petrochem with southern charm and affability. He's a ruthless businessman, an ambitious Exec, and as long as his public image stays clean, will do absolutely anything to continue his climb up the Petrochem corporate ladder."
}

const corpoAccess = {
    name: "Corpo Access",
    description: "You've got access to the corporate world - whether through your own connections, or through the connections you made on your climb up the corporate ladder, you can get in touch with the movers and shakers of the corporate world.",
    effect: "Corpo Access lets you get in touch with the corporate world, and use that to get what you need.",
    associatedStats: ['rep', 'path', 'connections']
}

const corpoSupport = {
    name: "Corpo Support",
    description: "You still have strings to pull and favors to call in from your old corporate work. Those favors tend to be from capable, well-equipped people, and when the situation calls for a hammer, well, you know where to find a few.",
    effect: "Corpo Support lets you call in favors to call in specialists from your old job, whether that's runners, assassins, or just a few corporate security specialists.",
    associatedStats: ['rep', 'path', 'connections']
}

const leveragedPosition = {
    name: "Leveraged Position",
    description: "You learned quite a bit about how things move and shift once things get to the scale of corps and governments. The right fulcrum, leverage correctly placed - that's more powerful than any gun, any chrome, no matter how expensive or cleverly used.",
    effect: "You've got the spectre of a corporation behind you - and that gives you leverage. Whether it's intimidation or favor-trading, your old position gives you a startling amount of power.",
    associatedStats: ['rep', 'path', 'connections']
}


export const exampleCorpoCharacters: ExampleCharacter[] = [saburo, antonio, billy];
export const exampleCorpoAbilities: ExampleAbility[] = [leveragedPosition, corpoAccess, corpoSupport];