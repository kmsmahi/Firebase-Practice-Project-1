import { Outlet } from 'react-router';
import Header from '../Componenets/Header';
import Marque from '../Componenets/Marque';
import Navbar from '../Componenets/Navbar';
import LeftContainer from '../Componenets/LeftContainer';
import RightContainer from '../Componenets/RightContainer';

const HomeLayOuts = () => {
  return (
    <div className="font-poppins min-h-screen bg-white">
      <header>
        <Header></Header>
        <section className='w-11/12 max-w-7xl mx-auto mt-5'>
          <Marque></Marque>
          <Navbar></Navbar>
        </section>
      </header>

      {/* Grid shifts from 1 col on mobile to 12 cols on large screens */}
      <main className='w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 mt-8 lg:mt-12 gap-6 lg:gap-8 mb-16'>
        
        {/* Left Sidebar */}
        <aside className='left-aside lg:col-span-3 lg:sticky lg:top-4 h-fit order-1'>
          <LeftContainer></LeftContainer>
        </aside>

        {/* Main Content Feed */}
        <section className='categoryNews lg:col-span-6 order-2'>
          <Outlet></Outlet>
        </section>

        {/* Right Sidebar */}
        <aside className='right-aside lg:col-span-3 lg:sticky lg:top-4 h-fit order-3'>
          <RightContainer></RightContainer>
        </aside>

      </main>

      <footer></footer>
    </div>
  );
};

export default HomeLayOuts;