
export interface ExampleCharacter {
	name: string;
	description: string;
}

export interface ExampleAbility {
	name: string;
	description: string;
	effect: string;
	associatedStats: string[];
}

export interface SingleRole {
	name: string;
	description: string;
	abilityImpact: { [key: string]: string };
	exampleCharacters: ExampleCharacter[];
	exampleAbilities: ExampleAbility[];
	questions: string[];
}
