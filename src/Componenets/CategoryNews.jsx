import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
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
            <h1>category news-{newsCategory.length}</h1>
        </div>
    );
};

export default CategoryNews;