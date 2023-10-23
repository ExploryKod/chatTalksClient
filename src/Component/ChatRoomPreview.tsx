import { Link } from 'react-router-dom';
// import { useRoomStore } from '../StateManager/roomStore';
import { ICategory } from '../Pages/ChatPreview';
import {useLoggedStore} from "../StateManager/userStore.ts";

export const ChatRoomPreview = ({ id, title } : ICategory) => {
    const imageUrl = "https://images.pexels.com/photos/3937272/pexels-photo-3937272.jpeg"
    const {token} = useLoggedStore();
    const handleClick = async () => {
        try {
            const response = await fetch(`http://localhost:8000/chat/${id}`, {
                method: 'GET',
                headers: {
                    Authorization : `Bearer ${token}`,
                },
                credentials: 'same-origin'
            });
            console.log(response)

            if (response.ok) {
                console.log('réponse chatroom ok');
                const data = await response.json();
                console.log(data)
            } else {
                console.log('échec de la réponse chatroom');
            }

        } catch(error) {
            console.error('log failed:', error);
        }
    };

    return(
        <div className='category-preview-container'>

<div className={`room-card-container card-${title}`}>
            <img src={imageUrl} alt={`${title}`} />
            <div className='footer'>
                <span className='name'>{title}</span>
            </div>
            <Link onClick={handleClick} className='card-link title' to={id.toString()}>
                    Rejoindre la salle
                </Link>
            </div>
        </div>
    )
}

export default ChatRoomPreview;