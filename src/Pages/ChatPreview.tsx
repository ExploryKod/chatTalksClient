import ChatRoomPreview from '../Component/ChatRoomPreview';

export interface ICategory {
    id: number,
    title: string,
}

const rooms:ICategory[] = [{
    id: 1,  
    title: 'Chat room 1',
},
{id: 2,
title: 'Chat room 2'}];

const ChatPreview: React.FC<{}> = () => {

  return (
      <>
        <div className="categories-container">
            {rooms.map( ( item, index ) => (
                <ChatRoomPreview key={index} title={item.title} id={item.id} /> ))}
        </div>
      </>
  );
};

export default ChatPreview;