import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerInitiate } from '../redux/reducer';

export const RegisterPage = () => {
  
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName))
    navigate('/home')
  }

  return (
    <div className='container'>
      <h2>Rigister</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label for="name">Name</label>
        <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} name="name" placeholder="Name" />
        <label for="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} name='email' type="email" placeholder="Email" />
        <label for="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} name='password' type="password" placeholder="Password" />
        <label for="passwordConfirm">Password Confirm</label>
        <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} name='passwordConfirm' type="password" placeholder="Password" />
        <button type={'submit'}>Sing up</button>
      </form>
    </div>
  )
}
