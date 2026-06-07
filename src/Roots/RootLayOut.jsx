import React from 'react';
import Navbar from '../Componenets/Navbar';
import { Outlet } from 'react-router';

const RootLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayOut;