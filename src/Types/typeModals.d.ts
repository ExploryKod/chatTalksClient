import { Dispatch, SetStateAction, HTMLDivElement } from "react";

export interface IProfileModal {
    profile: IProfile;
    setToggle: Dispatch<SetStateAction<boolean>>;
}

export interface IConfirmModal {
    modalConfirmRef:HTMLDivElement,
    user: IUser;
    isVisible: boolean;
    hideModal: () => void;
    title: string;
    setUserList: Dispatch<SetStateAction<IUser[]>>;
    onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IUpdateModal {
    user: IUser;
    isVisible: boolean;
    hideModal: () => void;
    updateUser: (id: string) => void;
}