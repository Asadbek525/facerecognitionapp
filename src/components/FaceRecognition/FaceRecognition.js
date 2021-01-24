import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ Link, box }) => {
  return (
    <div className='center ma'>
      <div id='div_img' className='relative mt3'>
        <img alt='' id='face_img' width='500px' height='auto' src={Link} />
        <div
          className='bounding_box absolute ma2'
          style={{
            top: box.from_top,
            right: box.from_right,
            left: box.from_left,
            bottom: box.from_bottom,
          }}
        ></div>
      </div>
    </div>
  );
};
export default FaceRecognition;
