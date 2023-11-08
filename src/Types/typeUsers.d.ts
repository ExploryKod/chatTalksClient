export interface IUser {
    id: number;
    username: string;
    role: string;
}

export interface IProfile extends IUser {
    description: string;
    hobbies: Ihobbies[];
}

export interface Ihobbies {
    id: number;
    name: string;
}

export type passwordInput = {
    password: string;
}


