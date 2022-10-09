import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/reducer';


export const HomePage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const navigate = useNavigate('');

    const handleAuth = () => {
        if(user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/login')
        }, 3000)
    }

  return (
    <div className='container'>
        <h1>HomePage</h1>
        <button onClick={handleAuth}>Log out</button>
    </div>
  )
}
