import React, { use, useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi"; // Added for mobile menu
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, Logout } = use(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoutBtnHandler = () => {
    Logout();
  };

  return (
    <div className="relative mt-4 mb-6">
      <div className="navbar bg-base-100 px-0 sm:px-4">
        <div className="navbar-start">
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="btn btn-ghost lg:hidden mr-2"
          >
            {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
          <h1 className="font-bold text-lg hidden sm:block">{user && user.email}</h1>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 font-semibold text-[#706F6F]">
            <NavLink to='/home' className={({isActive}) => isActive ? "text-black" : "hover:text-black transition-colors"}>Home</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? "text-black" : "hover:text-black transition-colors"}>About</NavLink>
            <NavLink to='/career' className={({isActive}) => isActive ? "text-black" : "hover:text-black transition-colors"}>Career</NavLink>
          </ul>
        </div>

        <div className="navbar-end gap-3 flex items-center">
          <FaRegCircleUser className='w-8 h-8 sm:w-10 sm:h-10 text-gray-600'/>
          {user ? (
            <button onClick={logoutBtnHandler} className="btn border-none text-white bg-[#403F3F] hover:bg-black rounded-none px-6">
              Logout
            </button> 
          ) : (
            <Link to='/auth/login' className="btn border-none text-white bg-[#403F3F] hover:bg-black rounded-none px-6">
              Login
            </Link> 
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg z-50 p-4 flex flex-col gap-4 lg:hidden border-t">
          <h1 className="font-bold text-sm text-gray-500 mb-2 truncate">{user && user.email}</h1>
          <NavLink to='/home' onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-700">Home</NavLink>
          <NavLink to='/about' onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-700">About</NavLink>
          <NavLink to='/career' onClick={() => setIsMobileMenuOpen(false)} className="font-semibold text-gray-700">Career</NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;