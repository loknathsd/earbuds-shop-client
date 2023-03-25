import React from 'react';
import { useEffect } from 'react';
import { BsBagCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';
import { runFireWork } from '../../utils/Routing/Firework/Firework';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireWork();
    },[])
    return (
       <div className='container'>
         <div className='text-center mt-32 bg-gray-300 lg:w-[70%] md:w-[70%] mx-auto lg:p-20 md:py-10 max-sm:py-10 rounded-xl'>
            <p className='mx-[45%] text-6xl text-green-600 '> <BsBagCheckFill /></p>
            <h1 className='text-5xl text-[#324d67] font-bold my-5'>Thank You For Your Purchase</h1>
            <p className='lead my-5 text-lg font-semibold'>Check your email inbox for the receipt.</p>
            <p className='my-5'>If you have any questions, please email <span className='text-red-500 font-bold'>example@example.com</span> </p>
            <Link to="/"><button className='px-20 py-3 bg-red-600 rounded-xl text-white font-bold text-xl'>Continue Shopping</button></Link>
        </div>
       </div>
    );
};

export default Success;