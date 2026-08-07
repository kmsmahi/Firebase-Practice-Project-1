import React from 'react';
import FastMarquee from 'react-fast-marquee';

// Resolve CJS / ESM module wrap issue safely
const Marquee = FastMarquee.default || FastMarquee;

const Marque = () => {
    return (
        <div className='flex gap-5 items-center bg-[#F3F3F3] px-3 py-2'>
            <p className='text-white bg-[#D72050] p-4 shrink-0'>Latest</p>
            <div className='flex-1 min-w-0'>
                <Marquee pauseOnHover={true} speed={70}>
                    <p className='font-bold shrink-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, nesciunt.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, nesciunt.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, nesciunt.</p>
                </Marquee>
            </div>
        </div>
    );
};

export default Marque;