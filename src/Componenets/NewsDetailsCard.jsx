import React from 'react';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

const NewsDetailsCard = ({ newsDetails }) => {
  if (!newsDetails || !newsDetails.title) {
    return (
      <div className="flex justify-center items-center py-20 text-gray-500 font-semibold">
        Loading details...
      </div>
    );
  }

  const formattedDate = newsDetails.author?.published_date
    ? new Date(newsDetails.author.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : 'N/A';

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-bold text-xl text-gray-800 mb-6">Dragon News</h1>

      {/* Main Card Container */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        {/* Featured Image */}
        <div className="w-full h-[320px] sm:h-[420px] rounded-xl overflow-hidden mb-6 bg-gray-100">
          <img
            src={newsDetails.image_url}
            alt={newsDetails.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header Metadata / Author info (if available) */}
        {newsDetails.author && (
          <div className="flex items-center gap-3 mb-5">
            {newsDetails.author.img && (
              <img
                src={newsDetails.author.img}
                alt={newsDetails.author.name}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
            )}
            <div className="text-sm">
              <p className="font-semibold text-gray-800">
                {newsDetails.author.name || 'Unknown Author'}
              </p>
              <p className="text-gray-400">{formattedDate}</p>
            </div>
          </div>
        )}

        {/* Title */}
        <h2 className="font-bold text-2xl sm:text-3xl text-gray-900 leading-snug mb-4">
          {newsDetails.title}
        </h2>

        {/* Article Body */}
        <p className="text-gray-600 font-normal text-base sm:text-lg leading-relaxed mb-8 whitespace-pre-line">
          {newsDetails.details}
        </p>

        {/* Back Button */}
        <div className="pt-4 border-t border-gray-100">
          <Link
            to={
              newsDetails.category_id
                ? `/category/${newsDetails.category_id}`
                : '/'
            }
            className="inline-flex items-center gap-2 bg-[#D72050] hover:bg-[#b81840] text-white font-medium px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            <FaArrowLeft className="text-xs" />
            <span>All news in this category</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;