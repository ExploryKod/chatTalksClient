import { create } from 'zustand';

export interface LoaderState {
    loaderName: string;
    isLoader: boolean;
    setLoader: (displayLoader: boolean, loaderName: string) => void;
}

export const useLoaderStore = create<LoaderState>((set) => ({
    loaderName: '',
    isLoader: false,
    setLoader: (isLoader: boolean, loaderName) => set({ isLoader: isLoader, loaderName: loaderName })
}));


