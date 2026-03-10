import React from 'react';
import card1Image from '../../assets/vector1.png'
const Banner = () => {
    return (
       <div className='max-w-[1280px] mx-auto grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-6'>
         <div className="card  bg-gradient-to-r from-[#422AD5] to-blue-400 image-full">
            <figure>
                <img
                    src={card1Image}
                    alt="" />
            </figure>
            <div className="card-body text-center justify-center items-center">
               <h1 className='text-3xl'>In-Progress</h1>
               <span className='text-2xl'>0</span>
            </div>
        </div>
         <div className="card  bg-gradient-to-r from-green-200 to bg-green-400 image-full">
            <figure>
                <img
                    src={card1Image}
                    alt="" />
            </figure>
            <div className="card-body text-center justify-center items-center">
                <h1 className='text-3xl'>Resolved</h1>
               <span className='text-2xl'>0</span>
            </div>
        </div>
       </div>
    );
};

export default Banner;