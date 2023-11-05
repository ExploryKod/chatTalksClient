import { Dispatch, SetStateAction, HTMLDivElement } from "react";

export interface IProfileModal {
    profile: IProfile;
    setToggle: Dispatch<SetStateAction<boolean>>;
}

export interface IConfirmModal {
    // modalConfirmRef:HTMLDivElement,
    userList: IUser[];
    selectedUser: IUser;
    title: string;
    setOpenConfirmModal: Dispatch<SetStateAction<boolean>>;
    // isLoading: boolean;
    // setIsLoading: Dispatch<SetStateAction<boolean>>;
    setUserList: Dispatch<SetStateAction<IUser[]>>;
    // onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
    // onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IUpdateModal {
    user: IUser;
    isVisible: boolean;
    hideModal: () => void;
    updateUser: (id: string) => void;
}