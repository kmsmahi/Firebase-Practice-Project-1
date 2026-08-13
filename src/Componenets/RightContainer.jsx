import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa6";
import Qzone from './Qzone';

const RightContainer = () => {
  return (
    <div className='flex flex-col gap-6 w-full'>
      {/* Login Section */}
      <div className="flex flex-col gap-3">
        <h1 className='font-bold text-xl mb-1'>Login with</h1>
        <button className="btn w-full bg-white text-black border-gray-300 hover:border-gray-400 flex items-center justify-center gap-2">
          <FaGoogle className="text-blue-500 w-4 h-4" />
          Login with Google
        </button>
        <button className="btn w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2">
          <FaGithub className="w-5 h-5" />
          Login with GitHub
        </button>
      </div>

      {/* Social Links */}
      <div>
        <h1 className='font-bold text-xl mb-4'>Find Us On</h1>
        <div className='flex flex-col border border-gray-200 rounded-lg overflow-hidden cursor-pointer'>
          <div className='flex gap-4 items-center border-b border-gray-200 px-4 py-3.5 hover:bg-gray-50 transition-colors'>
            <div className="bg-blue-100 p-2 rounded-full"><FaFacebook className='w-4 h-4 text-blue-600'/></div>
            <h1 className='font-medium text-gray-700 text-sm sm:text-base'>Facebook</h1>
          </div>
          <div className='flex gap-4 items-center px-4 py-3.5 hover:bg-gray-50 transition-colors'>
            <div className="bg-blue-50 p-2 rounded-full"><FaTwitter className='w-4 h-4 text-blue-400'/></div>
            <h1 className='font-medium text-gray-700 text-sm sm:text-base'>Twitter</h1>
          </div>
        </div>
      </div>

      {/* Qzone Widget */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <Qzone></Qzone>
      </div>
    </div>
  );
};

export default RightContainer;