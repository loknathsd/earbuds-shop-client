import React from 'react';
import Rating from '@mui/material/Rating'
import { useStateContext } from '../../context/StateContext';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Loader from '../Shared/Loader/Loader';

const PdDetail = () => {
    const [product,setProduct] = useState({})
    const {qty,incQty,decQty,addCart,setShowCart } = useStateContext();
    const {id} = useParams();
    const handleBuy=()=>{
        setShowCart(true)
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data.result[0]))
    },[id])
    return (
        <div className='container mx-auto lg:flex gap-10  mt-8'>
            <div className='img-area lg:w-[400px] lg:h-[420px] lg:m-0 md:m-5 max-sm:h-[350px] max-sm:w-[350px] max-sm:mx-auto bg-[#ebebeb] rounded-lg hover:bg-[#f02d34] p-5 cursor-pointer'>
                <img src={product.imgUrl} alt="Product img" />
                {!product.imgUrl && <Loader />}
            </div>
            <div style={{fontFamily:'teko'}} id='info-area' className='lg:w-[60%] text-[#324d67] lg:m-0 md:m-5 max-sm:m-5'>
                <h1 className=' text-4xl font-bold capitalize'>{product.name}</h1>
                <p className='my-2'> <Rating defaultValue={3} readOnly /> </p>
                <div  className='h-[150px] overflow-hidden'>
                    <h5 className="text-lg font-bold my-1">Details :</h5>
                    <p style={{fontFamily:'rokkitt'}} className='text-md font-semibold text-gray-600'>{product.description}</p>
                </div>
                <h1 className='text-3xl text-[#f02d34] font-[700] my-3'>${product.price}</h1>
                <div id='quantity' className='flex gap-6 '>   
                    <h2 className='text-2xl mt-1 font-bold'>Quantity :</h2>
                    <div className='inline-flex rounded-md shadow-sm'>
                        <button onClick={decQty} className='px-5 py-2 text-xl font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-l-lg '>-</button>
                        <button className='px-5 py-2 text-xl font-medium text-gray-900 bg-white border-t border-b border-gray-200'>{qty}</button>
                        <button onClick={incQty} className="px-5 py-2 text-xl font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-r-md">+</button>
                    </div>
                </div>
                <div id="addBuy" className='mt-6 flex gap-6 text-lg'> 
                    <button onClick={()=>addCart(product,qty)} className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-5 border border-red-500 hover:border-transparent rounded'>Add to Cart</button>
                    <button onClick={handleBuy}  className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PdDetail;