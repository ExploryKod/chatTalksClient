import { create } from 'zustand';

interface LoggedState {
    logged: string;
    setLogged: (logged: string) => void;
}

export const useLoggedStore = create<LoggedState>((set) => ({
    logged: '',
    setLogged: (logged: string) => set({ logged }),
}));

