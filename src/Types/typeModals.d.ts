import { Dispatch, SetStateAction, HTMLDivElement } from "react";

export interface IProfileModal {
    profile: IProfile;
    setToggle: Dispatch<SetStateAction<boolean>>;
}

export interface IConfirmModal {
    userList: IUser[];
    selectedUser: IUser;
    title: string;
    setOpenConfirmModal: Dispatch<SetStateAction<boolean>>;
    // isLoading: boolean;
    // setIsLoading: Dispatch<SetStateAction<boolean>>;
    setUserList: Dispatch<SetStateAction<IUser[]>>;
}

export interface IConfirmRoomModal {
    roomList: IRoom[];
    selectedRoom: IRoom;
    title: string;
    setOpenConfirmRoomModal: Dispatch<SetStateAction<boolean>>;
    setRoomList: Dispatch<SetStateAction<IRoom[]>>;
    // isLoading: boolean;
    // setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IUpdateModal {
    user: IUser;
    isVisible: boolean;
    hideModal: () => void;
    updateUser: (id: string) => void;
}