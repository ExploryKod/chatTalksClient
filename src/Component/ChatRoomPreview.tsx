import { Link } from 'react-router-dom';
import { ICategory } from '../Pages/ChatPreview';

export const ChatRoomPreview = ({ id, title } : ICategory) => {
    return(
        <div className='category-preview-container'>
            <h2>
                <Link  className='title' to={id.toString()}>
                    {title}
                </Link>
            </h2>
        
        </div>

    )
}

export default ChatRoomPreview;