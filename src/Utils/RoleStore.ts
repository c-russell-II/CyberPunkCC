import { create } from "zustand";

export interface RoleStore {
	role: string;
	setRole: (role: string) => void;
}

export const useRoleStore = create<RoleStore>((set) => ({
	role: "",
	setRole: (role: string) => set({ role }),
}));
