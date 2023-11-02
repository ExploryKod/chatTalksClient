import React, {useEffect, useState} from 'react';
import {GiTalk} from 'react-icons/gi';
import {BiSolidUserVoice} from 'react-icons/bi';
import {useParams} from 'react-router-dom';
import {useRoomStore} from "../StateManager/roomStore.ts";
import {useLoggedStore} from "../StateManager/userStore.ts";

type Message = {
    action: string;
    message: string;
    target: string;
}

type RoomMessage = {
    action: string;
    message: string;
}

type Room = {
    name: string;
    messages: string[];
}
const ChatRoom: React.FC<{}> = () => {
    const {roomName} = useRoomStore();
    const {username} = useLoggedStore();
    const {room} = useParams();
    const [messages, setMessages] = useState<string[]>([]);
    const [messageInput, setMessageInput] = useState<Message>({action: "send-message", message: "", target: roomName});
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [rooms, setRooms] = useState<Room[]>([]);
    const sendMessage = (event: React.FormEvent) => {
        event.preventDefault();

        if (!socket || !messageInput) {
            return;
        }

        socket.send(JSON.stringify(messageInput));
        setMessageInput({action: "send-message", message: "", target: roomName});
    };

    const handleJoinRoom = () => {
        if (!socket) {
            return;
        }
        socket.send(JSON.stringify({ action: 'join-room', message: roomName } as RoomMessage));

        setRooms((prevRooms) => [...prevRooms, { name: roomName, messages: [] }]);
    }

    const findRoom = (roomName:string) => {
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].name === roomName) {
                return rooms[i];
            }
        }
    }

    useEffect(() => {
        const newSocket = new WebSocket(`ws://localhost:8000/ws?name=amaury`);

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
            for (let i = 0; i < data.length; i++) {
                let msg = JSON.parse(data[i]);
                const room = findRoom(msg.target);
                if (typeof room !== "undefined") {
                    room.messages.push(msg.text);
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
        console.log('roomName FRERE', roomName)
        handleJoinRoom();
    }, [socket, roomName]);


    return (
        <>
            <h1 className="category-title"> Chat room n° {room}</h1>
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
                    onChange={(e) => setMessageInput({action: "send-message", message: e.target.value, target: roomName})}
                />
            </form>
        </>
    );
};

export default ChatRoom;