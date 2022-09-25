import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { chatsSelector } from '../redux/reducers/chatReducer/chatsSelector'

const Chats = () => {
    const chats = useSelector(chatsSelector)
    return (
        <div className='chats'>
            {chats.map((chat) => {
                return (
                    <Link key={chat.id} to={`/message/${chat.id}`}>
                        {chat.name}
                    </Link>
                )
            })}
        </div>
    );
};

export default Chats;