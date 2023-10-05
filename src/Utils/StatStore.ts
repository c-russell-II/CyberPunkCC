import { create } from 'zustand';

export interface StatStore {
    stats: {[key: string]: number},
    increase: (stat: string) => void,
    decrease: (stat: string) => void
}

const useStatStore = create<StatStore>((set) => ({
    stats: {phys: 1, neuro: 1, reflex: 1, path: 1, connections: 1, rep: 1},
    increase: (stat: string) => set((state) => ({stats: {...state.stats, [stat]: state.stats[stat] + 1}})),
    decrease: (stat: string) => set((state) => ({stats: {...state.stats, [stat]: state.stats[stat] - 1}}))
}));

export default useStatStore;