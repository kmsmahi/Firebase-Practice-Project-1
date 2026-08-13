import { Outlet, useLoaderData } from 'react-router';
import Header from '../Componenets/Header';
import Marque from '../Componenets/Marque';
import Navbar from '../Componenets/Navbar';
import LeftContainer from '../Componenets/LeftContainer';
import RightContainer from '../Componenets/RightContainer';

const HomeLayOuts = () => {
  // Get main news array loaded by route loader
  const allNews = useLoaderData() || [];

  return (
    <div className="font-poppins min-h-screen bg-white">
      <header>
        <Header />
        <section className="w-11/12 max-w-7xl mx-auto mt-5">
          {/* Pass news array as props */}
          <Marque newsData={allNews} />
          <Navbar />
        </section>
      </header>

      <main className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 mt-8 lg:mt-12 gap-6 lg:gap-8 mb-16">
        <aside className="left-aside lg:col-span-3 lg:sticky lg:top-4 h-fit order-1">
          <LeftContainer />
        </aside>

        <section className="categoryNews lg:col-span-6 order-2">
          <Outlet />
        </section>

        <aside className="right-aside lg:col-span-3 lg:sticky lg:top-4 h-fit order-3">
          <RightContainer />
        </aside>
      </main>

      <footer></footer>
    </div>
  );
};

export default HomeLayOuts;