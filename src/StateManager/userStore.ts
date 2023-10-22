import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

interface LoggedState {
    logged: string;
    setLogged: (logged: string) => void;
}

export const useLoggedStore = create<LoggedState>((set) => ({
    logged: '',
    setLogged: (logged: string) => set({ logged }),
}));

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));