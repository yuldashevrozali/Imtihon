import React, { useState } from 'react';
import Button from '../../components/button';
import { Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  function handleregister(event) {
    event.preventDefault();

    if (!email || !password) {
      alert(`Bo'sh maydonlarni to'ldiring`);
      return;
    }

    let data = JSON.parse(localStorage.getItem('users')) || [];
    let UserData = {
      email: email,
      password: password,
      username: username
    };


    data.push(UserData);

    localStorage.setItem('users', JSON.stringify(data));
    console.log(29,data);

    fetch('https://strapi-store-server.onrender.com/api/auth/local/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(UserData)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
      })
      .catch(err => {
        console.log(err);
      });

    setEmail('');
    setPassword('');
    setUsername('');
  }

  return (
    <div className='block2'>
      <div className="card2">
        <h1>Register</h1>
        <form className='form' onSubmit={handleregister}>

          <label htmlFor="username">
            <p>Username</p>
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
            onChange={(e) => setPassword(e.target.value)}></input>
          <Button type="submit" text='Register' />
          <p className='form-p'>Already a member? <span><Link to='/login'> Login</Link></span></p>
        </form>
      </div>
    </div>
  );
}