import { Outlet } from 'react-router';
import Header from '../Componenets/Header';
import Marque from '../Componenets/Marque';
import Navbar from '../Componenets/Navbar';
import LeftContainer from '../Componenets/LeftContainer';
import RightContainer from '../Componenets/RightContainer';

const HomeLayOuts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto mt-5'>
                    <Marque></Marque>
                    <Navbar></Navbar>
                </section>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 mt-15 gap-4'>
                <aside className='left-aside col-span-3 sticky top-0 h-fit'>
                <LeftContainer></LeftContainer>
            </aside>
            <section className='categryNews col-span-6'>
                <Outlet></Outlet>
            </section>
            <aside className='right-aside col-span-3 sticky top-0 h-fit'>
                <RightContainer></RightContainer>
            </aside>
            </main>
            
            <footer></footer>
        </div>
    );
};

export default HomeLayOuts;