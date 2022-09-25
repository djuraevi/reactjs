import { Route, Routes } from 'react-router-dom';
import Chats from './pages/Chats';
import Message from './pages/Message';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Chats />} />
      <Route path={'/message/:id'} element={<Message/>} />
    </Routes>
  );
}

export default App;
