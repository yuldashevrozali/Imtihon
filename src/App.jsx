import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Card from './pages/Card';

function App() {
  const [on, setOn] = useState(false);
  // const location = useLocation();
  console.log(13, location);

  function handleCheckbox(e) {
    setOn(e.target.checked);
  }

  return (
    <BrowserRouter>
      <>

        <Login still={on ? { background: '#414558', color: 'white' } : { background: '#021431' }} />
        <header style={on ? { background: '#181920', color: 'white' } : { background: '#F0F6FF' }}>
          <div style={on ? { background: '#FF7AC6', color: 'white' } : { background: '#057AFF' }} className="logo">
            <Link to="/"><p>C</p></Link>
          </div>
          <button
            class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
            Button
          </button>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/card">Cart</Link></li>
            </ul>
          </nav>
          <div className="theme">
            <div className="checkbox">
              <div style={on ? { marginLeft: '26px', color: 'white' } : { marginLeft: '0px' }} className="checked">
                <input onChange={handleCheckbox} type="checkbox" id="theme" />
              </div>
            </div>
            {on ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="19" width="21" viewBox="0 0 576 512"><path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="19" width="21" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
            )}
          </div>
        </header>

        <Routes>
          <Route path='/' element={
            <Home still3={on ? { background: '#414558', color: 'white' } : { background: '#021431' }}
              still2={on ? { background: '#272935', color: 'white' } : { background: 'white' }}
              still={on ? (true) : (false)} />
          } />

          <Route path='/about' element={
            <About still={on ? { background: '#272935', color: 'white' } : { background: 'white', color: '#394E6A' }}
              still2={on ? { background: '#FF7AC6', color: '#301C27' } : { background: '#057AFF', color: '#DBE1FF' }} />
          } />
          <Route path='/products' element={
            <Products still={on ? (true) : (false)} />
          } />
          <Route path='/card' element={<Card />} />
          {/* <Route path='/register' element={<Register />} /> */}
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

