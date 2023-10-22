import { create } from 'zustand';

interface LoggedState {
    logged: boolean;
    setLogged: (logged: boolean) => void;
}

export const useLoggedStore = create<LoggedState>((set) => ({
    logged: false,
    setLogged: (logged: boolean) => set({ logged }),
}));

