import React from 'react';
import logo from "../images/logo.png";

const Hero = () => {
  return (
    <div className='bg-white h-screen flex flex-col justify-center items-center'>
      <img src={logo} className='rounded mb-10 shadow' alt="" />
      <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>
        Flower Garden
      </h1>
      
    </div>
  );
};

export default Hero;
