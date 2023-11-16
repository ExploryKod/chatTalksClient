
export type SenderMessage = {
    sendername: string;
    sendermessage: string;
    action: string;
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