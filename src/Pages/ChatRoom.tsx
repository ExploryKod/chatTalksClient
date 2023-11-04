import React, {useEffect, useState} from 'react';
import {GiTalk} from 'react-icons/gi';
import {BiSolidUserVoice} from 'react-icons/bi';
import {useParams} from 'react-router-dom';
import {useLoggedStore} from "../StateManager/userStore.ts";

type Target = {
    id: string;
    name: string|undefined;
}
type Message = {
    action: string;
    message: string;
    target: Target;
}

type RoomMessage = {
    action: string;
    message: string;
}

type Room = {
    name: string|undefined;
    messages: string[];
}
const ChatRoom: React.FC<{}> = () => {
    // const {roomName} = useRoomStore();
    // console.log('roomName', roomName)
    const {username} = useLoggedStore();
    const {roomNumber} = useParams();
    const [messages, setMessages] = useState<string[]>([]);
    const [messageInput, setMessageInput] = useState<Message>({action: "send-message", message: "", target: {id: "", name: roomNumber}});
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [rooms, setRooms] = useState<Room[]>([]);
    const sendMessage = (event: React.FormEvent) => {
        event.preventDefault();

        if (!socket || !messageInput) {
            return;
        }

        if (messageInput.message === '') {
            return;
        }
        console.log('messageInput', messageInput)
        socket.send(JSON.stringify(messageInput));
        setMessageInput({
            action: "send-message", message: "", target: {
                id: "d0d73e6a-dfba-4f9d-bbd9-9491bfc4021e",
                name: roomNumber
            }
        });
    };

    const handleJoinRoom = () => {
        if (!socket) {
            return;
        }
        socket.send(JSON.stringify({action: 'join-hub', message: roomNumber} as RoomMessage));

        setRooms((prevRooms) => [...prevRooms, {name: roomNumber, messages: []}]);
    }

    const findRoom = (roomName: string) => {
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].name === roomName) {
                return rooms[i];
            }
        }
    }

    useEffect(() => {
        const newSocket = new WebSocket(`ws://localhost:8000/ws?name=${username}`);

        newSocket.onopen = () => {
            console.log('WebSocket connected');
            setSocket(newSocket)
        }

        newSocket.onclose = (event) => {
            console.log('WebSocket closed:', event);
            setSocket(null);
        };

        newSocket.onmessage = (event) => {
            let data = event.data;
            data = data.split(/\r?\n/);
            console.log('WebSocket data:', data)
            for (let i = 0; i < data.length; i++) {
                let msg = JSON.parse(data[i]);
                console.log('WebSocket msg:', msg)
                const room = findRoom(msg.target);
                console.log('WebSocket room:', room)
                if (typeof room !== "undefined") {
                    room.messages.push(msg.message);
                    console.log('WebSocket room-message:', room.messages)
                }
            }
            setMessages((prevMessages) => [...prevMessages, data]);
        };

        newSocket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // Clean up the WebSocket connection on component unmount
        return () => {
            if (newSocket) newSocket.close();
        };
    }, []);

    useEffect(() => {
        if (!socket) {
            return;
        }
        handleJoinRoom();
    }, [socket, roomNumber]);


    return (
        <>
            <h1 className="category-title"> Chat room n° {roomNumber}</h1>
            <div className="input-log">
                {messages.map((message, index) => (
                    <div className="message-log" key={index}><BiSolidUserVoice className="voice-icon"/>&nbsp;{message}
                    </div>
                ))}
            </div>
            <form className="message-form" onSubmit={sendMessage}>
                <GiTalk className="talk-icon"/>
                <input type="submit" className="message-send" value="Send"/>
                <input
                    type="text"
                    id="msg"
                    placeholder='Ecrivez votre message'
                    value={messageInput.message}
                    onChange={(e) => setMessageInput({
                        action: "send-message",
                        message: e.target.value,
                        target: {
                            id: "1685691b-e1b5-492a-9394-d1e73818e580",
                            name: roomNumber}
                    })}
                />
            </form>
        </>
    );
};

export default ChatRoom;