import React from 'react';
import LogoOff from '../../assets/headphones_c_1.webp'

const OfferBanner = () => {
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const d = new Date();
    let from = month[d.getMonth()];  
    let to = month[d.getMonth()+1];  
    return (
        <div className='container mx-auto mt-20 bg-[#f02d34] rounded-xl py-[100px] px-[50px] h-[400px] relative'>
            <div className='flex justify-between text-white' >
                <div >
                    <p className='text-[16px] uppercase'>20% off</p> 
                   <div className='text-[80px] font-[800] ml-[25px]'>
                   <h3 >FINE</h3>
                    <h3 className='mt-[-45px]'>SMILE</h3>
                   </div>
                    <p className='ml-[25px]'>20 {from} to 7 {to}</p>
                </div>
                <div className='top-[-7rem] left-[22%] absolute'>
                    <img src={LogoOff} alt="" />
                </div>
                <div className=''>
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