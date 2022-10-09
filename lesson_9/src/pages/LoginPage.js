import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginInitiate } from '../redux/reducer';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password))
    navigate('/home')
  }

  return (
    <div className='container'>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit} className='form'>
        <label for="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="Email" />
        <label for="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder="Password" />
        <button type={'submit'}>Log in</button>
      </form>
    </div>
  )
}

