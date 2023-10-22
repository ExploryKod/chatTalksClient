import ChatRoomPreview from '../Component/ChatRoomPreview';
import {ChangeEvent, FormEvent, useState} from "react";

export interface ICategory {
    id: number,
    title: string,
}

const rooms: ICategory[] = [{
    id: 1,
    title: 'Chat room 1',
},
    {
        id: 2,
        title: 'Chat room 2'
    }];

const ChatPreview: React.FC<{}> = () => {

    const [roomName, setRoomName] = useState('');

    const createRoom = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/chat/create', {
                method: 'POST',
                body: new URLSearchParams({
                    'roomName': roomName,
                })
            });

            if (response.ok) {
                console.log('room created');
                const data = await response.json();
                console.log(data)
            } else {
                console.log('échec de la réponse create room');
            }

        } catch (error) {
            console.error('log failed:', error);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRoomName(e.target.value)
    }

    return (
        <>
            <div className="categories-container">
                <form method={'post'} onSubmit={createRoom}>
                    <input name={'roomName'} type={'text'} placeholder={'Create a room'} onChange={handleChange}/>
                    <button type={'submit'}>Create Room</button>
                </form>
                {rooms.map((item, index) => (
                    <ChatRoomPreview key={index} title={item.title} id={item.id}/>))}
            </div>
        </>
    );
};

export default ChatPreview;