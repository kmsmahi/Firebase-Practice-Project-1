import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';
const CategoryNews = () => {
    const[newsCategory,setNewsCategory]=useState([]);
    const{id}=useParams();
    const data=useLoaderData();
    useEffect(()=>{
        if(id=='0'){
            setNewsCategory(data);
            return;
        }
        else if(id=='1'){
          const filterNews=data.filter((news)=>news.others.is_today_pick==true);
          setNewsCategory(filterNews); 
        }
        else{
            const filterNews=data.filter((news)=>id==news.category_id)
            setNewsCategory(filterNews); 
        }
    },
    [data,id]);
    return (
        <div>
            <h1 className='text-xl font-semibold'>Total : <span className='text-2xl font-bold text-red-700'>{newsCategory.length}</span> News Found</h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    newsCategory.map((news)=><NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;