import React from 'react';
import Rating from '@mui/material/Rating'
import Logo from '../../assets/headphones_a_1.webp'


//fake data for frontend. it will be changed when data will have come from database
const pd = {
    name: 'boAt Rockerz 451',
    description: 'Set your mind ablaze with boAt Rockerz 450 — our slick headphones that offer immersive sound quality and add luxury to your sound. Propelled by crystal clear 40mm dynamic drivers, slip into an alternate HD immersive audio reality. The soft cornered matte black finish allows for a comfortable fit, propagated by plush foam in adaptive and adjustable design. Choose your mode, go wireless with Bluetooth V4.2 or connect an aux wire that doesn’t cause any drain on the 300mAh rechargeable lithium battery.',
    price: 45   
}
const PdDetail = () => {
    return (
        <div className='container mx-auto flex gap-10 mt-8'>
            <div className='img-area w-[400px] h-[400px] bg-[#ebebeb] rounded-lg hover:bg-[#f02d34] p-5 cursor-pointer'>
                <img src={Logo} alt="" />
            </div>
            <div id='info-area' className='w-[60%] text-[#324d67]'>
                <h1 className=' text-4xl font-bold'>{pd.name}</h1>
                <p className='my-3'> <Rating defaultValue={3} readOnly /> </p>
                <div>
                    <h5 className="text-base font-bold my-2">Details :</h5>
                    <p>{pd.description}</p>
                </div>
                <h1 className='text-3xl text-[#f02d34] font-[700] my-5'>${pd.price}</h1>
                <div id='quantity' className='flex gap-6 '>
                    <h2 className='text-2xl font-bold'>Quantity :</h2>
                    <div className='inline-flex rounded-md shadow-sm'>
                        <button className='px-5 py-2 text-xl font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-l-lg '>-</button>
                        <button className='px-5 py-2 text-xl font-medium text-gray-900 bg-white border-t border-b border-gray-200'>1</button>
                        <button className="px-5 py-2 text-xl font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-r-md">+</button>
                    </div>
                </div>
                <div id="addBuy" className='mt-6 flex gap-6 text-lg'>
                    <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-5 border border-red-500 hover:border-transparent rounded'>Add to cart</button>
                    <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded'>Buy now</button>
                </div>

            </div>
        </div>
    );
};

export default PdDetail;