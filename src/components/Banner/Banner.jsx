import React from 'react';
import BannerLogo from '../../assets/Banner.webp'

const Banner = () => {
    return (
        <div className='bg-[#dcdcdc] container mx-auto py-[100px] px-[40px] rounded-2xl h-[500px] relative'>
            <div>
                <p className='text-xl'>Beats solo</p>
                <h3 className='lg:text-[4rem] md:text-[3rem] max-sm:text-[2rem]  font-bold lg:mt-[-15px] '>Wireless</h3>
                <h1 className='lg:ml-[-20px] md:ml-[-15px] lg:text-[10em] md:text-[6em] max-sm:text-[3em] uppercase text-[#ffffff] font-bold lg:mt-[-55px] md:mt-[-40px] '>HEADPHONE</h1>
                <img className='lg:h-[450px] lg:w-[450px] md:h-[350px] md:w-[350px] max-sm:h-[300px] max-sm:w-[250px] top-0 lg:right-[20%] md:right-[10%] max-sm:right-[0%] absolute'  src={BannerLogo} alt="" />
            </div>  
            <div className='flex'>
                <button className='bg-[#f02d34] px-[16px] py-[10px] rounded-md text-white max-sm:mt-10'>Shop Now</button>
                <div className='absolute lg:right-[10%] lg:bottom-[5%] md:bottom-[10%] md:right-[8%] max-sm:bottom-[8%] max-sm:right-[10%] w-[300px] text-[#324d67] text-end'>
                    <h3 style={{fontFamily:'Anton'}} className='font-bold'>Description</h3>
                    <p style={{fontFamily:'Teko'}} className='text-[#5f5f5f] font-[100]'>The game begins here. With Immortal 1000D gaming headphones, don't just play the game - feel it, live it, and own it. Level up your audio game with 7.1 Channel</p>
                </div>
            </div> 
        </div>
    );
};

export default Banner;