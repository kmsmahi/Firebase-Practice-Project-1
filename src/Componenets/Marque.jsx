import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';

const Marque = () => {
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    fetch('/news.json')
      .then((res) => res.json())
      .then((data) => {
        // Filter by breaking flags or fallback to first 5 articles
        let filtered = data.filter(
          (item) => item.others?.is_today_pick === true || item.others?.is_trending === true
        );

        if (filtered.length === 0) {
          filtered = data.slice(0, 5);
        }

        setBreakingNews(filtered);
      })
      .catch((err) => console.error("Error loading marquee news:", err));
  }, []);

  // Guarantee Marquee resolution if default import returns object
  const MarqueeComponent = Marquee.default || Marquee;

  return (
    <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-lg my-4 overflow-hidden">
      {/* Static Badge */}
      <div className="bg-[#D72050] text-white px-4 py-2 font-medium text-sm rounded-md shrink-0 z-10 shadow-sm">
        Latest News
      </div>

      {/* Dynamic Marquee */}
      {breakingNews.length > 0 && (
        <MarqueeComponent pauseOnHover={true} speed={55} className="text-gray-800 font-medium text-sm sm:text-base">
          {breakingNews.map((news) => (
            <Link
              key={news._id || news.id}
              to={`/newsDetails/${news._id || news.id}`}
              className="hover:text-[#D72050] hover:underline transition-colors mr-12 flex items-center gap-2"
            >
              <span className="text-[#D72050] font-bold">⚡</span>
              {news.title}
            </Link>
          ))}
        </MarqueeComponent>
      )}
    </div>
  );
};

export default Marque;