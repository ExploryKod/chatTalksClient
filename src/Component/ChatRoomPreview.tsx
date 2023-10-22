import { Link } from 'react-router-dom';
import { ICategory } from '../Pages/ChatPreview';
import {useLoggedStore} from "../StateManager/userStore.ts";

export const ChatRoomPreview = ({ id, title } : ICategory) => {

    const {logged} = useLoggedStore();
    const handleClick = async () => {
        try {
            const response = await fetch(`http://localhost:8000/chat/${id}`, {
                method: 'GET',
                headers: {
                    Authorization : `Bearer ${logged}`,
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
            <h2>
                <Link onClick={handleClick} className='title' to={id.toString()}>
                    {title}
                </Link>
            </h2>
        </div>
    )
}

export default ChatRoomPreview;