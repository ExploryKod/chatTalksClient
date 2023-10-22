import { Link } from 'react-router-dom';
// import { useRoomStore } from '../StateManager/roomStore';
import { ICategory } from '../Pages/ChatPreview';

export const ChatRoomPreview: React.FC<ICategory> = ({title, id}) => {

    //  const [{id, title}]= useRoomStore();

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