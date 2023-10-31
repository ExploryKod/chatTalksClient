import { create } from 'zustand';

interface LoggedState {
    token: string;
    username: string;
    setToken: (logged: string) => void;
    setUsername: (username: string) => void;
    removeToken: () => void;
}

export const useLoggedStore = create<LoggedState>((set) => ({
    token: localStorage.getItem('token') || '',
    username: '',
    setToken: (token: string) => {
        localStorage.setItem('token', token);
        set({ token: token });
    },
    removeToken: () => {
        localStorage.removeItem('token');
        set({ token: '' }); // Set the token to an empty string in the state
    },
    setUsername: (username: string) => set({ username: username }),
}));





