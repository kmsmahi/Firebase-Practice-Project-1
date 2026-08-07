import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Componenets/Header';
import Marque from '../Componenets/Marque';

const HomeLayOuts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto mt-5'>
                    <Marque></Marque>
                </section>
            </header>
            <main>
                <section className='left-nav'></section>
                <section className='main'><Outlet></Outlet></section>
                <section className='right-nav'></section>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayOuts;