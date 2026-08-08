import React from 'react';
import { FaCopy } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
const NewsCard = ({news}) => {
    const formatedDate=new Date(news.author.published_date).toLocaleDateString();
    const words=news.details.split(' ');
    const trancatedWords=words.length>100
    ? words.slice(0,100).join(' ')+'...'
    :news.details;

    return (
        <div className='grid grid-cols-1 gap-7'>
            <div className='flex justify-between bg-base-200 px-6 py-4'>
                <div className='flex gap-4 items-center'>
                    <img className='w-20 h-20' src={news.author.img} alt="" />
                <div className='flex flex-col gap-1'>
                    <h1 className='font-bold text-xl '>{news.author.name}</h1>
                    <h1 className='font-semibold text-lg text-gray-300'>{formatedDate}</h1>
                </div>
                </div>


                <div className='flex gap-3 items-center cursor-pointer'>

                    <FaCopy className='w-12 h-8' />
                    <FaShareAlt className='w-12 h-8' />

                </div>
            </div>

            <h1 className='font-bold text-2xl'>{news.title}</h1>

            <div className='flex flex-col gap-3'>
                <img src={news.image_url} alt="" />
                <p className='text-gray-400 font-semibold'>{trancatedWords}</p>
            </div>
            <hr className='text-gray-300' />

            <div className='flex justify-between items-center p-3'>
                <div className='flex gap-6 items-center'>
                <h1 className='text-xl text-orange-400 font-semibold'>{news.rating.badge}</h1>
                <h1 className='text-3xl text-green-400 font-bold'>{news.rating.number}</h1>
            </div>

            <div className='flex gap-1 items-center'>
               <IoEye className='w-12 h-8' />
               <h1 className='text-xl font-bold '>{news.total_view}</h1>
            </div>
            </div>
            
        </div>
    );
};

export default NewsCard;