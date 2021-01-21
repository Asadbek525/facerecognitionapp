import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className='f4'>
        {'This web-page can help you detect faces in your pictures'}
      </p>

      <div className="flex justify-center">
        <div className='form f4 br3 shadow-5 pa3'>
          <input
            placeholder='Enter image link'
            className='pa2 outline-0 bw0 w-70'
            type='text'
          />
          <button className='pa2 w-30 pr3 pl3 bg-light-purple bw0 outline-0 grow pointer white'>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
