import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryNews = () => {
  const [newsCategory, setNewsCategory] = useState([]);
  const { id } = useParams();
  const data = useLoaderData() || [];

  useEffect(() => {
    if (!data || data.length === 0) return;

    // Convert URL param to Number/String safely
    const currentId = String(id);

    if (currentId === '0') {
      // 0 = All News
      setNewsCategory(data);
    } else if (currentId === '1') {
      // 1 = Today's Pick / Breaking News
      const filterNews = data.filter((news) => news.others?.is_today_pick === true);
      setNewsCategory(filterNews);
    } else {
      // Normalize both IDs to Number so "02", "2", and 2 all match correctly
      const filterNews = data.filter(
        (news) => Number(news.category_id) === Number(currentId)
      );
      setNewsCategory(filterNews);
    }
  }, [data, id]);

  return (
    <div>
      <h1 className='text-lg sm:text-xl font-semibold mb-4'>
        Total : <span className='text-xl sm:text-2xl font-bold text-red-700'>{newsCategory.length}</span> News Found
      </h1>
      <div className='grid grid-cols-1 gap-6'>
        {newsCategory.map((news) => (
          <NewsCard key={news._id || news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;