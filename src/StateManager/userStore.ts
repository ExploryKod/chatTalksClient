import { create } from 'zustand';

interface LoggedState {
    token: string;
    user: string;
    setLogged: (logged: string) => void;
}

export const useLoggedStore = create<LoggedState>((set) => ({
    token: '',
    user: '',
    setLogged: (token: string) => set({ token: token }),
    setUser: (user: string) => set({ user }),
}));

