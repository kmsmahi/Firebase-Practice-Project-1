import React, { use, useState } from 'react';
import { NavLink } from 'react-router';

const categoryFetchData = fetch('/categories.json').then(res => res.json());

const LeftContainer = () => {
  const CategoryNewsData = use(categoryFetchData);
  const [active, setActive] = useState(1);

  return (
    <div>
      <h1 className='font-bold text-xl mb-4'>All Category</h1>

      {/* Horizontal scroll on mobile screens; Vertical stack on desktop */}
      <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
        {CategoryNewsData.map((category) => (
          <div
            key={category.id}
            onClick={() => setActive(category.id)}
            className={`whitespace-nowrap lg:whitespace-normal px-4 py-2.5 rounded-lg lg:rounded-none cursor-pointer transition-colors ${
              active === category.id 
                ? 'bg-gray-200 lg:bg-transparent text-black font-bold' 
                : 'bg-gray-50 lg:bg-transparent text-[#9F9F9F] hover:bg-gray-100 lg:hover:bg-transparent'
            }`}
          >
            <NavLink key={category.id} to={`/category/${category.id}`} className="block w-full">
              {category.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftContainer;