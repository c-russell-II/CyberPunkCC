export interface CombatStats {
    'phys': number;
    'reflex': number;
    'neuro': number;
}
export interface PersonaStats {
    'path': number,
    'connections': number,
    'rep': number
}

export type AllStats = CombatStats & PersonaStats;