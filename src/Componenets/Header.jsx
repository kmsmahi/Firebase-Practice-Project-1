import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className='flex flex-col gap-2 sm:gap-3 items-center mt-6 px-4 text-center'>
      <img src={logo} alt="Dragon News Logo" className="w-64 sm:w-80 md:w-auto h-auto object-contain" />
      <h1 className='text-gray-500 text-sm sm:text-lg'>Journalism Without Fear or Favour</h1>
      <p className='font-semibold text-gray-700 text-sm sm:text-base'>
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;