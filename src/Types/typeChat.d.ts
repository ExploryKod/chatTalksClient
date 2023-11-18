
export interface SenderMessage {
    sendername: string | null;
    sendermessage: string | null;
    action: string | null;
}

export interface ISavedMessage extends SenderMessage {
    id: string | null;
    user_id: string | null;
    room_id: string | null;
    created_at: string | null;
    username: string | null;
    content: string | null;
}

export type Target = {
    id: string;
    name: string|undefined;
}

export type Message = {
    action: string;
    message: string;
    target: Target;
}

export type RoomMessage = {
    action: string;
    message: string;
}

export type IMessage = {
    action: string;
    message: string;
    target: Target;
}