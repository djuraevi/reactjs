import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from './redux/reducer';

function App() {
  const users = useSelector(state => state.users);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  const fetchUsers = () => {
    dispatch(getUsers());
  }

  if(loading) {
    return (
      <div> Is Loading ...</div>
    )
  }

  if(error) {
    return (
      <div className='error'> Is Error. Please try to <button onClick={fetchUsers}>Send error message</button></div>
    )
  }

  return (
    <div className='container'>
      {users.map((user) => {
        return (
          <div key={user.id} className='post'>
            {user.title}
          </div>
        )
      })}
    </div>
  );
}

export default App;
