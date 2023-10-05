import { ExampleAbility, ExampleCharacter } from "./RoleTypes";

const santiago = {
    name: "Santiago Aldecaldo",
    description: "Born to a couple US soldiers in Berlin, after travelling the world and working as a Solo in his teens and twenties, Santiago found his way to the Aldecaldos, and has been with them ever since. He's a skilled driver, a talented mechanic, and a capable fighter, but his real skill is in his ability to figure out what's best for the family, and make that happen..",
}

const john = {
    name: "John 'Silver' Wilson",
    description: "A longtime nautical man, John was a rigger for many years, until a fall broke his career- and set him on the path to becoming one of the best known waterborne nomads in history. Relying at first on fishing and occasonial smuggling gigs, he built his family up until the Thelas nation and their allies spanned every coastline around America."
}

const panam = {
    name: "Panam Palmer",
    description: "A mechanically-minded girl from the Aldecaldo clans, runins with the Raffen and Biotechnica led her to struggling her way to the top of the Aldecaldo family, and pull it sharply onto a new path. Her mechanical skills and her ability to lead have made her a legend in the Aldecaldo family, and a force to be reckoned with on the road."
}

const nomadPack = {
    name: "Nomad Pack", 
    description: "Membership in a Nomad clan has its perks - access to the family garage, connections to family technicians, and more of a home than most people get in these bloody, brutal days.",
    effect: "Gain access to family vehicles, mechanics, and other resources.",
    associatedStats: ['path', 'connections', 'rep']
}

export const exampleNomadCharacters: ExampleCharacter[] = [santiago, john, panam];
export const exampleNomadAbilities: ExampleAbility[] = [nomadPack];