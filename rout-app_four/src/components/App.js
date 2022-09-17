import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile';
import Chats from '../pages/Chats';
import NotFound from '../pages/NotFound';


function App() {
  return (
    <>
      <header className='header'>
        <Link to={'/chats'}>Chats</Link>
        <Link to={'/profile'}>Profile</Link>
      </header>
      <main>
        <Routes>
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/chats'} element={<Chats />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
