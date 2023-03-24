import React from 'react';
import Rating from '@mui/material/Rating'
import Logo from '../../assets/headphones_a_1.webp'
import { useStateContext } from '../../context/StateContext';

//fake data for frontend. it will be changed when data will have come from database
const pd = {
    name: 'boAt Rockerz 451',
    description: 'Set your mind ablaze with boAt Rockerz 450 — our slick headphones that offer immersive sound quality and add luxury to your sound. Propelled by crystal clear 40mm dynamic drivers, slip into an alternate HD immersive audio reality. The soft cornered matte black finish allows for a comfortable fit, propagated by plush foam in adaptive and adjustable design. Choose your mode, go wireless with Bluetooth V4.2 or connect an aux wire that doesn’t cause any drain on the 300mAh rechargeable lithium battery.',
    price: 45 ,
    img:Logo
}
const PdDetail = () => {

    const {qty,incQty,decQty,addCart } = useStateContext();
    return (
        <div className='container mx-auto lg:flex gap-10  mt-8'>
            <div className='img-area lg:w-[400px] lg:h-[420px] lg:m-0 md:m-5 max-sm:h-[350px] max-sm:w-[350px] max-sm:mx-auto bg-[#ebebeb] rounded-lg hover:bg-[#f02d34] p-5 cursor-pointer'>
                <img src={pd.img} alt="" />
            </div>
            <div id='info-area' className='lg:w-[60%] text-[#324d67] lg:m-0 md:m-5 max-sm:m-5'>
                <h1 className=' text-4xl font-bold'>{pd.name}</h1>
                <p className='my-2'> <Rating defaultValue={3} readOnly /> </p>
                <div>
                    <h5 className="text-base font-bold my-1">Details :</h5>
                    <p>{pd.description}</p>
                </div>
                <h1 className='text-3xl text-[#f02d34] font-[700] my-3'>${pd.price}</h1>
                <div id='quantity' className='flex gap-6 '>   
                    <h2 className='text-2xl font-bold'>Quantity :</h2>
                    <div className='inline-flex rounded-md shadow-sm'>
                        <button onClick={decQty} className='px-5 py-2 text-xl font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-l-lg '>-</button>
                        <button className='px-5 py-2 text-xl font-medium text-gray-900 bg-white border-t border-b border-gray-200'>{qty}</button>
                        <button onClick={incQty} className="px-5 py-2 text-xl font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-r-md">+</button>
                    </div>
                </div>
                <div id="addBuy" className='mt-6 flex gap-6 text-lg'> 
                    <button onClick={()=>addCart(pd,qty)} className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-5 border border-red-500 hover:border-transparent rounded'>Add to cart</button>
                    <button  className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded'>Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default PdDetail;