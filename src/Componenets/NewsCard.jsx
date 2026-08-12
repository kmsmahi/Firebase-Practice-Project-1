import React from 'react';
import { FaCopy, FaShareAlt } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const formatedDate = new Date(news.author.published_date).toLocaleDateString();
  const words = news.details.split(' ');
  const trancatedWords = words.length > 50
    ? words.slice(0, 50).join(' ') + '...'
    : news.details;

  return (
    <div className='flex flex-col gap-4 border border-gray-100 rounded-xl mb-8 shadow-sm overflow-hidden bg-white'>
      {/* Header Info */}
      <div className='flex justify-between items-center bg-gray-50 px-4 sm:px-6 py-3 sm:py-4'>
        <div className='flex gap-3 sm:gap-4 items-center'>
          <img className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover' src={news.author.img} alt={news.author.name} />
          <div className='flex flex-col'>
            <h1 className='font-bold text-sm sm:text-base text-gray-800'>{news.author.name}</h1>
            <h1 className='font-medium text-xs sm:text-sm text-gray-500'>{formatedDate}</h1>
          </div>
        </div>

        <div className='flex gap-3 sm:gap-4 items-center text-gray-500'>
          <FaCopy className='w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-gray-800' />
          <FaShareAlt className='w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:text-gray-800' />
        </div>
      </div>

      <div className="px-4 sm:px-6 flex flex-col gap-4">
        <h1 className='font-bold text-lg sm:text-xl text-gray-900 leading-snug'>{news.title}</h1>

        {/* Thumbnail Image */}
        <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden">
          <img src={news.image_url} alt="Thumbnail" className="w-full h-full object-cover" />
        </div>

        <p className='text-gray-500 text-sm sm:text-base leading-relaxed'>
          {trancatedWords}{' '}
          <Link to={`/newsDetails/${news._id || news.id}`} className='font-semibold cursor-pointer text-[#FF8C47] hover:underline ml-1'>
            Read More
          </Link>
        </p>
      </div>

      <hr className='border-gray-100 mx-4 sm:mx-6 my-1' />

      {/* Footer Meta */}
      <div className='flex justify-between items-center px-4 sm:px-6 py-3 pb-5'>
        <div className='flex gap-2 sm:gap-3 items-center'>
          <div className="rating rating-sm">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked readOnly />
          </div>
          <h1 className='text-sm sm:text-base font-semibold text-gray-600'>{news.rating.number}</h1>
        </div>

        <div className='flex gap-2 items-center text-gray-500'>
          <IoEye className='w-5 h-5' />
          <h1 className='text-sm sm:text-base font-medium'>{news.total_view}</h1>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;