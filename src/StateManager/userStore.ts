import { create } from 'zustand';

interface LoggedState {
    token: string;
    username: string;
    setToken: (logged: string) => void;
    setUsername: (username: string) => void;
}

export const useLoggedStore = create<LoggedState>((set) => ({
    token: '',
    username: '',
    setToken: (token: string) => set({ token: token }),
    setUsername: (username: string) => set({ username: username }),
}));

