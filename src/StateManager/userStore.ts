import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

interface LoggedState {
    logged: boolean;
    setLogged: (logged: boolean) => void;
}

export const useLoggedStore = create<LoggedState>((set) => ({
    logged: false,
    setLogged: (logged: boolean) => set({ logged }),
}));

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));