import React from 'react';
import ImageOne from '../images/red.jpg';
import ImageTwo from '../images/yellow.jpg';

const Content = () => {
  return (
    <>
      <div className='menu-card'>
        <img src={ImageOne} alt='red' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Red Rose</h2>
          <p className='mb-2'>The symbol of Love</p>
          <span>$50</span>
        </div>
      </div>
      <div className='menu-card'>
        <img src={ImageTwo} alt='yellow' className='h-full rounded mb-20 shadow' />
        <div className='center-content'>
          <h2 className='text-2xl mb-2'>Yellow Rose</h2>
          <p className='mb-2'>Positive feelings of warmth</p>
          <span>$40</span>
        </div>
      </div>
    </>
  );
};

export default Content;
