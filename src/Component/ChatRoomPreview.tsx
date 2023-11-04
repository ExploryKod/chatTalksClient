import {Link} from 'react-router-dom';
// import { useRoomStore } from '../StateManager/roomStore';
import {ICategory} from '../Pages/ChatPreview';
import {useLoggedStore} from "../StateManager/userStore.ts";
import {useRoomStore} from "../StateManager/roomStore.ts";
import {useEffect} from "react";

export const ChatRoomPreview = ({id, name, description}: ICategory) => {
    const imageUrl = "https://images.pexels.com/photos/3937272/pexels-photo-3937272.jpeg"
    const {token} = useLoggedStore();
    const {setRoomName, setRoomId, setRoomDescription} = useRoomStore();

    useEffect(() => {
        console.log("NAME ", name)
        setRoomName(name);
        // display console.log of prevstate
        console.log("ID SETTED ", id)
        setRoomId(id);
        setRoomDescription(description);
    }, []);



    const handleClick = async () => {
        try {
            const response = await fetch(`http://localhost:8000/chat/${id}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                credentials: 'same-origin'
            });

            if (response.ok) {
                console.log('réponse chatroom ok');
                const data = await response.json();
                console.log("chatroom DATA :", data)
            } else {
                console.log('échec de la réponse chatroom');
            }

        } catch (error) {
            console.error('log failed:', error);
        }
    };

    return (
        <div className='category-preview-container'>

            <div className={`room-card-container card-${name}`}>
                <img src={imageUrl} alt={`${name}`}/>
                <div className='body'>{description}</div>
                <div className='footer'>
                    <span className='name'>{name}</span>
                </div>
                <Link onClick={handleClick} className='card-link title' to={id.toString()}>
                    Rejoindre la salle
                </Link>
            </div>
        </div>
    )
}

export default ChatRoomPreview;