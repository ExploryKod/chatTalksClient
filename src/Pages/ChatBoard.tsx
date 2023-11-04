import { Routes, Route } from 'react-router-dom';
import ChatPreview  from './ChatPreview';
import ChatRoom from './ChatRoom';

const ChatBoard: React.FC<{}> = () => {

  return (
      <Routes>
          <Route index element={<ChatPreview />} />      
          <Route path=':roomNumber' element={<ChatRoom/>} />
      </Routes>
  );
};

export default ChatBoard;


