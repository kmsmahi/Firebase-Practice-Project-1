import React, { useEffect, useState } from 'react';
import Header from './Header';
import RightContainer from './RightContainer';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [newsDetails, setNewsDetails] = useState({});

  useEffect(() => {
    // Check both id and _id depending on API payload
    const Details = data.find((singleNews) => (singleNews.id || singleNews._id) === id);
    setNewsDetails(Details || {});
  }, [data, id]);

  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
      </header>
      
      {/* 
        Responsive Grid: 
        1 column on mobile (grid-cols-1).
        12 columns on desktop (lg:grid-cols-12).
      */}
      <main className='w-full max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 lg:mt-16 mb-20'>
        
        {/* Main Content Area */}
        <div className='lg:col-span-9'>
          <NewsDetailsCard newsDetails={newsDetails}></NewsDetailsCard>
        </div>

        {/* Right Sidebar Area */}
        <div className='lg:col-span-3'>
          <RightContainer></RightContainer>
        </div>

      </main>
    </div>
  );
};

export default NewsDetails;