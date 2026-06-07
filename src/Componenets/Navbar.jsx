import React from 'react';
import logo from '../assets/Img/firebase-logo.png';
import { NavLink } from 'react-router';
const Navbar = () => {
  const Active=({isActive})=>`
  px-4 py-2 transition-all duration-300 font-semibold
  ${
    isActive? "text-bold text-blue-500"
    : "font-semibold"
  }
  `
    return (
        <div className="navbar bg-base-100  mt-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/'><a>Home</a></NavLink></li>
        <li><NavLink to='about'><a>About</a></NavLink></li>
      </ul>
    </div>
    <img className='w-20' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/' className={Active}><a>Home</a></NavLink></li>
        <li><NavLink to='about'  className={Active}><a>About</a></NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='signin' className="btn btn-secondary">Sign In</a>
  </div>
</div>
    );
};

export default Navbar;