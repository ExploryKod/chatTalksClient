export interface IUser {
    id: number;
    username: string;
    admin: string;
    email: string | null;
}

export type UserEmailType = {
    email: string | null;
    receiver: string;
}

export type passwordInput = {
    password: string;
}


