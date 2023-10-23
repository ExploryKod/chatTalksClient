import React, { useEffect, useState } from 'react';
import { GiTalk } from 'react-icons/gi';
import {BiSolidUserVoice} from 'react-icons/bi';
import { useParams } from 'react-router-dom';

const ChatRoom: React.FC<{}> = () => {
  const { room } = useParams();
  const [messages, setMessages] = useState<string[]>([]);
  const [messageInput, setMessageInput] = useState<string>('');
  const [socket, setSocket] = useState<WebSocket | null>(null);

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();

    if (!socket || !messageInput) {
      return;
    }

    socket.send(messageInput);
    setMessageInput('');
  };

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8000/ws?name=chatchat');

    newSocket.onclose = (event) => {
      console.log('WebSocket closed:', event);
      setSocket(null);
    };

    newSocket.onmessage = (event) => {
      const receivedMessage = event.data;
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    newSocket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };

    setSocket(newSocket);

    // Clean up the WebSocket connection on component unmount
    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <>
    <h1 className="category-title"> Chat room n° {room}</h1>
      <div className="input-log">
        {messages.map((message, index) => (
          <div className="message-log" key={index}><BiSolidUserVoice className="voice-icon"/>&nbsp;{message}</div>
        ))}
      </div>
      <form className="message-form" onSubmit={sendMessage}>
        <GiTalk className="talk-icon"/>
        <input type="submit" className="message-send" value="Send" />
        <input
          type="text"
          id="msg"
          placeholder='Ecrivez votre message'
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
      </form>
    </>
  );
};

export default ChatRoom;