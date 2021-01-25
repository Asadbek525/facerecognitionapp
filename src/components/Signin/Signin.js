import React from 'react';

const Signin = ({ signInClick }) => {
  return (
    <div className='shadow-5 narrow ba b--black-10 pa4 dib'>
      <form className='db center ph4'>
        <legend className='f1 center fw6 ph0 mh0'>Sign In</legend>
        <div className='mv3'>
          <label className='db center pa2 f3' htmlFor='email'>
            Email
          </label>
          <input
            className='db center w5 hover-bg-black hover-white outline-0 pa2'
            name='email'
            type='email'
          />
        </div>
        <div className='mv3'>
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
          className='db center pointer pa2 mv4 bg-transparent br3 ba bw1 b--black black hover-white hover-bg-black grow outline-0'
          type='submit'
          value='Sign in'
        />
      </form>
    </div>
  );
};
export default Signin;
