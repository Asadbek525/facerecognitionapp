import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ OnInputChange, OnClick }) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Git it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa3 br3  shadow-5'>
          <input
            className='f4 pa2 w-70 bw0 outline-0 center'
            type='text'
            onChange={OnInputChange}
          />
          <button
            className='w-30 grow f4 outline-0 bw0 white bg-light-purple'
            onClick={OnClick}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
