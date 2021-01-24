import React from 'react';

const Register = ({ signInClick, signOutClick }) => {
  return (
    <div className='shadow-5 ba b--black-10 pa3 dib'>
      <form className='db center ph5'>
        <legend className='f2 center fw6 pt3 mh0'>Register</legend>
        <div className='mv2'>
          <label className='db center pa2 f3' htmlFor='name'>
            Name
          </label>
          <input
            className='db center w5 hover-bg-black hover-white outline-0 pa2'
            name='name'
            type='text'
          />
        </div>
        <div className='mv2'>
          <label className='db center pa2 f3' htmlFor='email'>
            Email
          </label>
          <input
            className='db center w5 hover-bg-black hover-white outline-0 pa2'
            name='email'
            type='email'
          />
        </div>
        <div className='mv2'>
          <label className='db center pa2 f3' htmlFor='password'>
            Password
          </label>
          <input
            className='db center w5 pa2 hover-bg-black hover-white outline-0'
            name='password'
            type='password'
          />
        </div>
        <input
          onClick={signInClick}
          className='db center pointer pa2 mt2 bg-transparent br3 ba bw1 b--black black hover-white hover-bg-black grow outline-0'
          type='submit'
          value='Sign Up'
        />
      </form>
    </div>
  );
};
export default Register;
