
export interface SenderMessage {
    sendername: string;
    sendermessage: string;
    action: string;
}

export interface ISavedMessage extends SenderMessage {
    id: string;
    userId: string;
    roomId: string;
    createdAt: string;
    username: string;
    content: string;
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