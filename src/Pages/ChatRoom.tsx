import React, {useEffect, useState, useRef } from 'react';
import config from "../config/config.tsx";
import {GiTalk} from 'react-icons/gi';
import {BiSolidUserVoice} from 'react-icons/bi';
import {useParams, useLocation} from 'react-router-dom';
import {useLoggedStore} from "../StateManager/userStore.ts";
import type { SenderMessage, Message, RoomMessage } from '../Types/typeChat.d.ts';
import useFlashMessage from "../Hook/useFlashMessage.tsx";

const ChatRoom = () => {
    const serverWsHost: string = config.serverWsHost;

    // Hooks
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const {username} = useLoggedStore();
    const {roomNumber} = useParams();
    const { toastMessage } = useFlashMessage('');

    // UseStates
    const [messages, setMessages] = useState<SenderMessage[]>([{sendername: "", sendermessage: ""}]);
    const [messageInput, setMessageInput] = useState<Message>({action: "send-message", message: "", target: {id: "", name: roomNumber}});
    const [socket, setSocket] = useState<WebSocket | null>(null);

    // UseRef and other queries
    const messageContainerRef = useRef<HTMLDivElement>(null);
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
            toastMessage('Veuillez écrire un message');
            return;
        }
        socket.send(JSON.stringify(messageInput));
        console.log('username', username)
        const response = fetch('http://localhost:8000/send-message', {
            method: 'POST',
            mode: "cors",
            credentials: 'same-origin',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            // @ts-ignore
            body: new URLSearchParams({
                "username": username,
                "content": messageInput.message,
                "roomID": roomNumber,
            }),
        })

        console.log('response', response)

        // .then(response => response.json())
        // .then(data => {
        //     if (data.error) {
        //         console.log('data error' ,data.error);
        //     } else {
        //         console.log('data success',data.success);
        //     }
        // })
        // .catch((error) => {
        //     console.error('error',error);
        // });

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
        const newSocket = new WebSocket(`${serverWsHost}/ws?name=${username ? username : "unknown"}`);

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
                <h1 className="category-title"> {name} </h1>
                <h2 className="category-text text-darkBlue"> Bienvenue {username} </h2>
                <p className="category-text text-darkpink"> {description}</p>
            </div>
            {(username && username.length > 0) && (
                <div className={`logs-container margin-y-40
                        ${messages 
                        && messages.some(message => message.sendername === username) 
                        && messages.length > 2
                        ? "chat-active" : "" }
                      `} ref={messageContainerRef}
                >
                {messages
                    .filter((message) =>
                        message.sendermessage != ""
                        && message.sendername != undefined
                        && message.sendername != "")
                    .map((message, index) => (
                        <div className={`${index % 2 !== 0 ? 'log-odd' : 'log-even'} ${message.sendername === username ? 'log-user' : 'log-other'} logs-container__log`} key={index}>
                            <div className="log__info">
                                <span className="info__user">{message.sendername+ " : "}</span>
                                <span className="info__time">{new Date().toLocaleTimeString()}</span>
                            </div>
                            <div className="log__message"><BiSolidUserVoice className="voice-icon"/>&nbsp;
                                <span className="message__content">{message?.sendermessage}</span>
                            </div>

                        </div>
                ))}
                </div>)}
            {username && username.length > 0 ? (
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
                            id: "989996dd-f092-479e-a1b6-192c0a7d19f1",
                            name: roomNumber
                        }
                    })}
                />
            </form>) : (
                <div className="categories-container">
                    <h2 className="category-text text-lightLavender padding-30 bgd-black"> Veuillez vous déconnecter puis vous reconnecter pour chatter </h2>
                </div>
            )}
        </>
    );
};

export default ChatRoom;