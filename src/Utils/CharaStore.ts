import { create } from "zustand";
import { Cyberware } from "../Info/Cyberware";
import { AnyFirearm } from "../Info/Gear";

type SingleRoleQuestion = [string, string]
export interface CharaStore {
	name: string;
	setName: (name: string) => void;
	background: {[key: string]: string};
	setBackground: (background: {[key: string]: string}) => void;
	roleQuestions: SingleRoleQuestion[];
	setRoleQuestions: (arg0: SingleRoleQuestion[]) => void;
	cyberwareCapacity: number;
	installedCyberware: { [key: string]: Cyberware };
	installCyberware: (cyberware: Cyberware) => void;
	removeCyberware: (id: string) => void;
	money: number;
	increaseMoney: (amount: number) => void;
	decreaseMoney: (amount: number) => void;
	gear: { [key: string]: AnyFirearm };
	addGear: (name: string, type: AnyFirearm) => void;
}

export const useCharaStore = create<CharaStore>()((set) => ({
	name: "",
	setName: (name: string) => set({ name }),
	background: {},
	setBackground: (background: { [key: string]: string }) => set({ background }),
	roleQuestions: [],
	setRoleQuestions: () => set({}),
	cyberwareCapacity: 100,
	installedCyberware: {},
	installCyberware: (cyberware: Cyberware) =>
		set((state: CharaStore) => {
			const newWare = generateNewCyberwareID(
				state.installedCyberware,
				cyberware
			);
			return {
				installedCyberware: {
					...state.installedCyberware,
					[newWare.id]: newWare,
				},
				cyberwareCapacity: state.cyberwareCapacity - newWare.capCost,
			};
		}),
	removeCyberware: (id: string) =>
		set((state: CharaStore) => {
			const newWare = { ...state.installedCyberware };
			const wareCost = newWare[id].capCost;
			delete newWare[id];
			return {
				installedCyberware: newWare,
				cyberwareCapacity: state.cyberwareCapacity + wareCost,
			};
		}),
	money: 2000,
	increaseMoney: (amount: number) =>
		set((state: CharaStore) => {
			return { money: state.money + amount };
		}),
	decreaseMoney: (amount: number) =>
		set((state: CharaStore) => {
			return { money: state.money - amount };
		}),
	gear: {},
	addGear: (name: string, type: AnyFirearm) =>
		set((state: CharaStore) => ({ gear: { ...state.gear, [name]: type } })),
}));
const generateNewCyberwareID = (
	current: { [key: string]: Cyberware },
	newWare: Cyberware
) => {
	let id = newWare.name;
	if (id in current) {
		let i = 1;
		while (id + i in current) {
			i++;
		}
		id = id + i;
	}
	return { ...newWare, id };
};
