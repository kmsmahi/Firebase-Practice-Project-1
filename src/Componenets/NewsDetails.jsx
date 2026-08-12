import React from 'react';
import Header from './Header';
import RightContainer from './RightContainer';
import NewsDetailsCard from './NewsDetailsCard';
import {  useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
const NewsDetails = () => {
    const data=useLoaderData();
        const { id }=useParams();
        const [newsDetails,setNewsDetails]=useState({});
        // console.log(data,id,newsDetails);
        useEffect(()=>{
            const Details=data.find((singleNews)=>singleNews.id==id);
            setNewsDetails(Details);
        },[data, id]);
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 mt-20'>
            <div className='col-span-9'>
                <NewsDetailsCard newsDetails={newsDetails}></NewsDetailsCard>
            </div>
            <div className='col-span-3'>
                <RightContainer></RightContainer>
            </div>
            

            </main>
        </div>
    );
};

export default NewsDetails;