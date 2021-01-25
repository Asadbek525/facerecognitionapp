import React from 'react';

const ImageLinkForm = ({ OnInputChange, OnClick }) => {
  return (
    <div className='pa4-l'>
      <div className='mw7 bg-black-50 center pa4 br2-ns ba b--black-10'>
        <div className='cf bn ma0 pa0'>
          <div className='cf'>
            <label className='clip' htmlFor='email-address'>
              Email Address
            </label>
            <input
              onChange={OnInputChange}
              className='f6 f5-l outline-0 input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns'
              placeholder='Enter your image url'
              type='text'
              id='url'
            />
            <button
              onClick={OnClick}
              className='f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns'>
              Detect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
