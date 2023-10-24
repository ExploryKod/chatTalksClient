import { create } from 'zustand';

interface RoomState {
    id: number;
    roomName: string;
    roomDescription: string;
    setRoomName: (name: string) => void;
    setRoomDescription: (description: string) => void;
}

export const useRoomStore = create<RoomState>((set) => ({
    id: 0,
    roomName: '',
    roomDescription: '',
    setRoomName: (name: string) => set({ roomName: name }),
    setRoomDescription: (description: string) => set({ roomDescription: description }),
}));
