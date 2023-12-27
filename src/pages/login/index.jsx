import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SignIn from '../sign-in';
import './index.css'
import Register from '../register';

export default function Login(props) {
  const [display, setDisplay] = useState(false);
  const { still } = props;

  function handleClick() {
    setDisplay(true);
  }

  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <div style={still} className="register">
      <div className="sign">
        <nav>
          <ul>
            <li className='li' style={display ? { display: 'none' } : { display: 'block' }} onClick={handleClick}>
              <Link to='/login'>Sign in</Link>
            </li>
            <li style={display ? { display: 'none' } : { display: 'block' }}>
              <Link to='/register'>Create Account</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}
