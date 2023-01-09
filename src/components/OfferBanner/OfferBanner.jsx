import React from 'react';
import LogoOff from '../../assets/headphones_c_1.webp'

const OfferBanner = () => {
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const d = new Date();
    let from = month[d.getMonth()];  
    let to = month[d.getMonth()+1];  
    return (
        <div className='container mx-auto mt-[10rem] bg-[#f02d34] rounded-xl py-[100px] px-[50px] lg:h-[400px] md:h-[550px] sm:h-[500px] relative'>
            <div className='lg:flex justify-between text-white' >
                <div >
                    <p className='text-[16px] uppercase'>20% off</p> 
                   <div className='lg:text-[80px] md:text-[50px] max-sm:text-[45px] font-[800] lg:ml-[25px]'>
                   <h3 >FINE</h3>
                    <h3 className='lg:mt-[-45px] md:mt-[-30px] max-sm:mt-[-25px]'>SMILE</h3>
                   </div>
                    <p className='lg:ml-[25px]'>20 {from} to 7 {to}</p>
                </div>
                <div className='lg:top-[-7rem] md:top-[-3rem] max-sm:top-[60px] lg:left-[22%] md:left-[37%] max-sm:left-[40%] absolute'>
                    <img src={LogoOff} alt="" />
                </div>
                <div className='md:mt-7 max-sm:mt-7'>
                    <h3 className='text-lg'>Beats solo air</h3>
                    <h1 className='text-6xl font-extrabold my-3'>Summer Sale</h1>
                    <p className='text-sm'>company that's grown from 270 to 480 employees in the last 12 months</p>
                    <button className='py-2 text-red-700 font-bold mt-6 cursor px-5 bg-white rounded-md'>Buy Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default OfferBanner;