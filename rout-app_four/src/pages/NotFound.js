import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='center'>
        <h1>Page is not found. Please, go to <Link to={'/'}>Home</Link></h1>
    </div>
  )
}

export default NotFound;