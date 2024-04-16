export interface IRoom {
    id: number;
    name: string;
    description: string;
}

export interface IWordLength {
    num: number,
    max: number,
    text: string,
    endMessage: string
}

export interface LastMessage {
    id: number;
    user_id: number;
    room_id: number;
    action: string;
    content: string;
    created_at: string;
    username: string;
}

export interface Room {
    id: number;
    name: string;
    description: string;
}

export interface User {
    id: number;
    username: string;
    password: string;
    admin: number;
    email: string;
}

export interface IUserDiscussion {
    id: number;
    join_date: string;
    last_message: LastMessage;
    room: Room;
    user: User;
}