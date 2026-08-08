import React from 'react';
import pic1 from '../assets/swimming.png';
import pic2 from '../assets/class.png';
import pic3 from '../assets/playground.png';
import pic4 from '../assets/bg.png';
const Qzone = () => {
    return (
        <div className='grid grid-cols-1 gap-3 bg-base-300 px-4 py-2'>
            <h1 className='text-2xl font-bold'>Q-Zone</h1>
            <div>
                <img src={pic1} alt="" />
            </div>
            <div>
                <img src={pic2} alt="" />
            </div>
            <div>
                <img src={pic3} alt="" />
            </div>
            <div>
                <img src={pic4} alt="" />
            </div>
        </div>
    );
};

export default Qzone;