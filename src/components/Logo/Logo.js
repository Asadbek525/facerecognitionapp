import React from 'react';
import Tilt from 'react-tilt';
import logo from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ml5'>
      <Tilt
        className='Tilt shadow-5 pa4 br2'
        options={{ max: 55 }}
        style={{ height: 120, width: 120 }}
      >
        <div className='Tilt-inner'>
          {' '}
          <img src={logo} alt='logo' />{' '}
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
