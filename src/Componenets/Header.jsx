import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex flex-col gap-3 items-center mt-6'>
            <img src={logo} alt="" />
            <h1 className='text-base-400 text-xl'>Journalism with fear or favour</h1>
            <p className='text-semibold text-base-400'>{format(new Date(),"EEEE,LLLL dd,yyyy")}</p>
        </div>
    );
};

export default Header;