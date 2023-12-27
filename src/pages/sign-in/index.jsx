import React, { useState } from 'react';
import Button from '../../components/button';
import './index.css';

export default function Sign() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem('users')) || [];
    console.log(7, data);
  }

  return (
    <div className='block2'>
      <div className="card2">
        <h1>Login</h1>
        <form className='form' onSubmit={handleLogin}>
          <label htmlFor="email"><p>Email</p></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password"><p>Password</p></label>
          <input
            type="password"
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" text='Login' />
          <Button background="#BF95F9" text="Guest user" />
          <p className='form-p'>Not a member yet? <span>Register</span></p>
        </form>
      </div>
    </div>
  );
}
