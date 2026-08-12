import React, { use, useState } from 'react';
import { NavLink } from 'react-router';
const categoryFetchData=fetch('/categories.json').then(res=>res.json());

const LeftContainer = () => {
    const CategoryNewsData=use(categoryFetchData);
    // console.log(CategoryNewsData);
    const[active,setActive]=useState(1);
    return (
        <div>
            <h1 className='font-bold text-xl'>All Category</h1>
            {
                CategoryNewsData.map((category)=>(
                    <div
                    key={category.id}
                    onClick={()=>setActive(category.id)}
                    className={`font-semibold text-[#9F9F9F] py-3 cursor-pointer ${active===category.id?'text-black font-bold': 'text-[#9F9F9F]'}`}>
                    <NavLink key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>
                    </div>
                ))
            }
        </div>
    );
};

export default LeftContainer;