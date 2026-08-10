import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto py-5 px-6 bg-base-200 min-h-screen'>
            <Navbar></Navbar>
            <div className='flex justify-center items-center py-6 mt-12'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;