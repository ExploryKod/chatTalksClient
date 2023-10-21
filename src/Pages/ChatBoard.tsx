import { Routes, Route } from 'react-router-dom';
import ChatPreview  from './ChatPreview';
import ChatRoom from './ChatRoom';

const ChatBoard: React.FC<{}> = () => {

  return (
      <Routes>
          <Route index element={<ChatPreview/>} />      
          <Route path=':room' element={<ChatRoom/>} />
      </Routes>
  );
};

export default ChatBoard;


