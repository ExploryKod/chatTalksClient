import { create } from 'zustand';

interface LoggedState {
    token: string;
    user: string;
    setToken: (logged: string) => void;
}

export const useLoggedStore = create<LoggedState>((set) => ({
    token: '',
    user: '',
    setToken: (token: string) => set({ token: token }),
    setUser: (user: string) => set({ user }),
}));

