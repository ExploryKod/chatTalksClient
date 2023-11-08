import { create } from 'zustand';

export interface RoomState {
    roomId: number;
    roomName: string;
    roomDescription: string;
    setRoomName: (roomName: string) => void;
    setRoomDescription: (description: string) => void;
    setRoomId: (id: number) => void;
}

export const useRoomStore = create<RoomState>((set) => ({
    roomId: 0,
    roomName: '',
    roomDescription: '',
    setRoomName: (name: string) => set({ roomName: name }),
    setRoomDescription: (description: string) => set({ roomDescription: description }),
    setRoomId: (id: number) => set({ roomId: id }),
}));
