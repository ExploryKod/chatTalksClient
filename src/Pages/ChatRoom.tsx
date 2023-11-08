import React, {useEffect, useState, useRef } from 'react';
import {GiTalk} from 'react-icons/gi';
import {BiSolidUserVoice} from 'react-icons/bi';
import {useParams, useLocation} from 'react-router-dom';
import {useLoggedStore} from "../StateManager/userStore.ts";
import 'overlayscrollbars/styles/overlayscrollbars.css';
// import {IRoom} from "../Types/typeRooms";
// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";


type SenderMessage = {
    sendername: string;
    sendermessage: string;
}

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

const ChatRoom = () => {

    const {username} = useLoggedStore();
    const {roomNumber} = useParams();
    const [messages, setMessages] = useState<SenderMessage[]>([{sendername: "", sendermessage: ""}]);
    const [messageInput, setMessageInput] = useState<Message>({action: "send-message", message: "", target: {id: "", name: roomNumber}});
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const messageContainerRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // Access the values like this
    // const id: string | null = queryParams.get('id');
    const name: string | null = queryParams.get('name');
    const description: string | null = queryParams.get('description');

    useEffect(() => {
        const messageContainer = messageContainerRef.current;

        if (!messageContainer) {
            return;
        }

        // Function to scroll to the bottom
        const scrollToBottom = () => {
            messageContainer.scroll({ top: messageContainer.scrollHeight, behavior: 'smooth' });
        };

        // Set up the MutationObserver
        const observer = new MutationObserver(scrollToBottom);

        // Configure and start observing
        observer.observe(messageContainer, { childList: true });

        // Cleanup: Disconnect the observer when the component is unmounted
        return () => {
            observer.disconnect();
        };
    }, []);

    // const [rooms, setRooms] = useState<Room[]>([]);
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
                id: "",
                name: roomNumber
            }
        });
    };

    const handleJoinRoom = () => {
        if (!socket) {
            return;
        }
        socket.send(JSON.stringify({action: 'join-hub', message: roomNumber} as RoomMessage));

        // setRooms((prevRooms) => [...prevRooms, {name: roomNumber, messages: []}]);
    }

    useEffect(() => {
        const newSocket = new WebSocket(`ws://localhost:8000/ws?name=${username ? username : "unknown"}`);

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
            data.forEach((element: string) => {
                console.log('WebSocket element:', element)
                let msg = JSON.parse(element);
                console.log('WebSocket msg:', msg.message)

                    setMessages((prevMessages) => [...prevMessages,
                        {
                            sendername: msg?.sender?.name,
                            sendermessage: msg?.message
                        }
                    ]);

            })
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


    console.log('messages', messages)

    return (
        <>
            <div className="flex-center-childs-column margin-y-40">
                <h1 className="category-title"> Chat room {name} </h1>
                <p className="category-text text-darkpink"> {description}</p>
            </div>

                <div className={`logs-container margin-y-40
                        ${messages && messages.some(message => message.sendername === username) && messages.length > 2 ? "chat-active" : "" }
                      `} ref={messageContainerRef}
                    >
                    {/*<OverlayScrollbarsComponent*/}
                    {/*    options={{*/}
                    {/*        scrollbars: { autoHide: 'leave', autoHideDelay: 300, theme: 'os-theme-dark' },*/}
                    {/*        overflow: { x: 'hidden' },*/}
                    {/*    } as any}*/}
                    {/*    ref={messageContainerRef}*/}
                    {/*    defer*/}
                    {/*>*/}
                {messages.map((message, index) => (
                    (message.sendermessage != "" && message.sendername != undefined && message.sendername != "") && (
                        <div className={`${index % 2 !== 0 ? 'bgd-odd' : ''} input-log`} key={index}>
                            <div className="message-log"><BiSolidUserVoice className="voice-icon"/>&nbsp;{
                                message.sendername + " : " + message?.sendermessage
                            }
                            </div>
                        </div>)
                ))}
                    {/*</OverlayScrollbarsComponent>*/}
                </div>


            <form className="message-form margin-top-20" onSubmit={sendMessage}>
                <div className="message-form__submit">
                    <GiTalk className="talk-icon"/>
                    <input type="submit" className="message-send" value="Parler"/>
                </div>

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