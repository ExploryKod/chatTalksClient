import React, {useEffect, useState, useRef } from 'react';
import config from "../config/config.tsx";
import {GiTalk} from 'react-icons/gi';
import {BiSolidUserVoice} from 'react-icons/bi';
import {useParams, useLocation} from 'react-router-dom';
import {useLoggedStore} from "../StateManager/userStore.ts";
import type {Message, RoomMessage, ISavedMessage } from '../Types/typeChat.d.ts';
import useFlashMessage from "../Hook/useFlashMessage.tsx";
import useGetMessagesByRoom from "../Hook/useGetMessagesByRoom.tsx";
import {OldMessages} from "../Component/OldMessages.tsx";
import {useMessagesStore} from "../StateManager/roomStore.ts";


const ChatRoom = () => {
    const serverWsHost: string = config.serverWsHost;
    const serverHost: string = config.serverHost;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const {username} = useLoggedStore();
    const {roomNumber} = useParams();
    const { toastMessage } = useFlashMessage('');

    const [messages, setMessages] = useState<ISavedMessage[]>([]);
    const [messageInput, setMessageInput] = useState<Message>({
        action: "send-message",
        message: "",
        target: {id: "", name: roomNumber}
    });
    const [socket, setSocket] = useState<WebSocket | null>(null);
    // const [connectedUsers, setConnectedUsers] = useState<string[]>([]);
    const {getMessagesByRoom, setSavedMessages, savedMessages} = useGetMessagesByRoom();
    const [openHistory, setOpenHistory] = useState<boolean>(false)
    const {setRoomId, setSendername, setSendermessage, setAction} = useMessagesStore()

    // UseRef and other queries
    const messageContainerRef = useRef<HTMLDivElement>(null);
    const name: string | null = queryParams.get('name');
    const description: string | null = queryParams.get('description');

    useEffect(() => {

        const messageContainer = messageContainerRef.current;

        if (!messageContainer) {
            return;
        }

        const scrollToBottom = () => {
            messageContainer.scroll({top: messageContainer.scrollHeight, behavior: 'smooth'});
        };

        const observer = new MutationObserver(scrollToBottom);

        observer.observe(messageContainer, {childList: true});

        return () => {
            observer.disconnect();
        };
    }, []);

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

        const response: Promise<Response> = fetch(`${serverHost}/send-message`, {
            method: 'POST',
            mode: "cors",
            credentials: 'same-origin',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },

            body: new URLSearchParams({
                "username": username,
                "content": messageInput.message,
                "roomID": roomNumber,
            } as any),
        })

        if (!response) {
            console.error("Erreur lors de l'envoie de message au backend:", response)
        }

        setMessageInput({
            action: "send-message", message: "", target: {
                id: "",
                name: roomNumber
            }
        });
    };

    useEffect(() => {
        if (localStorage.getItem('messages') && localStorage.getItem('messages') !== null) {
            let localMessages = JSON.parse(localStorage.getItem('messages')!);
            setMessages(localMessages.filter((message: ISavedMessage) => message.room_id === roomNumber));
        }
    }, []);

    const handleJoinRoom = () => {
        if (!socket) {
            return;
        }
        socket.send(JSON.stringify({action: 'join-hub', message: roomNumber} as RoomMessage));

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
            // console.log('WebSocket data:', data)
            data.forEach((element: string) => {
                console.log('WebSocket element:', element)
                let msg = JSON.parse(element);
                console.log('WebSocket msg:', msg.message)
                console.log('WebSocket action:', msg.action)

                if (msg.action &&
                    msg?.action !== "send-message" &&
                    msg?.sender?.name != "" &&
                    msg?.sender?.name != undefined) {

                    onMessageAction(msg?.action, msg?.sender?.name);
                }

                if (msg.action && msg?.action === "hub-joined") {
                    onMessageAction(msg?.action, msg?.sender?.name);
                }

                setMessages((prevMessages) => [...prevMessages,
                    {
                        sendername: msg?.sender?.name,
                        sendermessage: msg?.message,
                        action: msg?.action,
                        id: null,
                        content: msg?.message,
                        username: msg?.sender?.name,
                        room_id: roomNumber ? roomNumber : null,
                        user_id: null,
                        created_at: null,
                    }
                ]);

            })
        };

        newSocket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        return () => {
            if (newSocket) newSocket.close();
        };
    }, []);

    useEffect(() => {
        console.log('NUMBER ROOM', typeof roomNumber)
        let storedMessage = messages.filter((message) => message.room_id === roomNumber && message.action === "send-message" && message.sendername != undefined);
        if (storedMessage.length > 0) {
            localStorage.setItem('messages', JSON.stringify(storedMessage));
        }
    }, [messages])

    useEffect(() => {
        if (!socket) {
            return;
        }
        handleJoinRoom();
    }, [socket, roomNumber]);


    useEffect(() => {

        if (!roomNumber) {
            return;
        }
        const fetchMessages = async () => {
            try {
                const data = await getMessagesByRoom(roomNumber);
                setSavedMessages(data);
                // TODO : finir la BDD pour pouvoir utiliser les messages enregistrés
                console.log("get messages by room =====> ", data);
                // console.log("saved messages =====> ", savedMessages);
                if (data.messages && data.messages.length > 0) {
                    setMessages([...data.messages]);
                    setMessages((prevMessages) => {
                        console.log('prevMessages', prevMessages)
                        return [...prevMessages]
                    });
                } else {
                    setMessages((prevMessages) => [...prevMessages]);
                }
            } catch (error) {
                console.error('Erreur:', error);
            }
        };

        fetchMessages().then(r => {
            return r
        });
    }, []);

    const onMessageAction = (action: string, personName: string) => {
        console.log('action ', action)
        console.log('personName ', personName)

        if(action) {
            if(action === "hub-joined") {
                toastMessage(`Bienvenue dans la salle`);
                // setConnectedUsers((prevConnectedUsers) => [...prevConnectedUsers, personName]);
            }
        }

        if (personName && action) {
            if (personName != "" && (action === "user-join")) {
                toastMessage(`${personName} vient de rejoindre la salle`);
                // setConnectedUsers((prevConnectedUsers) => [...prevConnectedUsers, personName]);
            }
            if (personName != "" && action === "user-left") {
                toastMessage(`${personName} vient de quitter la salle`);
                // setConnectedUsers((prevConnectedUsers) => prevConnectedUsers.filter((user) => user !== personName));
            }
        }
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessageInput({
            action: "send-message",
            message: e.target.value,
            target: {
                id: "989996dd-f092-479e-a1b6-192c0a7d19f1",
                name: roomNumber
            }
        })

        setRoomId(roomNumber ? roomNumber : "")
        setSendername(username)
        setSendermessage(e.target.value)
        setAction('message-saved')
    }

    return (
        <main className="main-container">
            <div className={"flex-childs-column --flex-centered"}>
                <div className="margin-y-30">
                    <h1 className="category-title --left under-line"> {name} </h1>
                    {/*<h2 className="category-text --left text-darkBlue"> Bienvenue {username} </h2>*/}
                    <p className="category-text --left text-darkpink"> {description}</p>
                </div>
                {(username && username.length > 0) && (
                    <div className={`logs-container margin-y-40
                        ${messages
                    && messages.some(message => message.action === "send-message")
                    && messages.length > 2
                        ? "chat-active" : ""}
                      `} ref={messageContainerRef}
                    >
                        <button type={"button"} className={`btn-mini max-width-150
                    ${(savedMessages.messages && savedMessages.messages.length > 0) ? 
                            "c-pointer p-events-auto opacity-100" : "width-0 c-pointer-none p-events-none opacity-0"}`}
                                onClick={() => setOpenHistory(true)}>Historique
                        </button>
                        {messages
                            .filter((message) =>
                                message.content != ""
                                && message.username != undefined
                                && message.username != "")
                            .map((message, index) => (
                                <div key={index} className={`logs-container__log 
                        ${message.action != "send-message" ? "user-action" : "user-talk"} ${message.username === username ? 'log-user' : 'log-other'}`}>
                                    <div className="log__message"><BiSolidUserVoice className="voice-icon"/>&nbsp;
                                        <span className="message__content">{message?.content}</span>
                                    </div>
                                    <div className={`log__name ${message.username !== username && '--other'}`}>
                                        <p>{message.username}</p>
                                    </div>
                                </div>
                            ))}
                    </div>)}
            </div>
            {username && username.length > 0 ? (
                <form className="message-form margin-top-20" onSubmit={sendMessage}>

                    <input
                        type="text"
                        id="msg"
                        placeholder='Ecrivez votre message'
                        value={messageInput.message}
                        onChange={handleMessageChange}
                    />
                    <div className="message-form__submit">
                        <GiTalk className="talk-icon"/>
                        <input type="submit" className="message-send" value="Parler"/>
                    </div>
                </form>) : (
                <div className="categories-container">
                    <h2 className="category-text text-lightLavender padding-30 bgd-black"> Veuillez vous déconnecter
                        puis vous reconnecter pour chatter </h2>
                </div>
            )}
            {openHistory &&
                <OldMessages messages={messages} savedMessages={savedMessages} setOpenHistory={setOpenHistory}/>}
        </main>
    );
};

export default ChatRoom;