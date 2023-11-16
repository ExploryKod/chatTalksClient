import {useState} from 'react';
import config from "../config/config.tsx";
import {Link} from 'react-router-dom';
import type {IRoom} from "../Types/typeRooms.d.ts";
import {useLoggedStore} from "../StateManager/userStore.ts";
import {useRoomStore} from "../StateManager/roomStore.ts";
import {useEffect} from "react";
import {Loader} from "./Loader.tsx";

export const ChatRoomCard = ({id, name, description}: IRoom) => {
    const serverHost: string = config.serverHost;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const imageUrl = "https://images.pexels.com/photos/3937272/pexels-photo-3937272.jpeg"
    const {token} = useLoggedStore();
    const {setRoomName, setRoomId, setRoomDescription} = useRoomStore();
    const [image, setImage] = useState<string>("https://source.unsplash.com/400x200/?house");

    useEffect(() => {
        setRoomName(name);
        setRoomId(id);
        setRoomDescription(description);
        setImage(`https://source.unsplash.com/400x200/?cat`);
        setIsLoading(false);
    }, []);

    const handleClick = async () => {
        try {
            const response = await fetch(`${serverHost}/chat/${id}`, {
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

    const queryChat: string = `?id=${id.toString()}&name=${name}&description=${description}`

    return (
        isLoading ? (<div className="loader-lists"><div className='loader-container'><Loader/></div></div>) :
            (<div className={`room-card-container card-${name}`}>
                <img className="room-image" src={image ? image : imageUrl} alt={`${name}`}/>
                <div className='body'>Thème du chat: <span>{description}</span></div>
                <Link onClick={handleClick} className='card-link title'
                      to={{
                          pathname: `${id.toString()}`,
                          search: queryChat
                      }}>
                    {name && name.length > 0 ? `${name.toLowerCase()}` : 'Entrez dans cette salle'}
                </Link>
            </div>)
    );

}

export default ChatRoomCard;