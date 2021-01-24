import React from 'react';

const Navigation = ({ route, signInClick, signOutClick, registerClick }) => {
  if (route === 'signin') {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p onClick={registerClick} className='dim link pointer white pa3 f4'>
          Register
        </p>
      </nav>
    );
  } else if (route === 'home') {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p onClick={signOutClick} className='dim link pointer white pa3 f4'>
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p onClick={signOutClick} className='dim link pointer white pa3 f4'>
          Sign In
        </p>
      </nav>
    );
  }
};
export default Navigation;
