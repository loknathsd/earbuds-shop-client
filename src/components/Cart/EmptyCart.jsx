import React from 'react';
import { useNavigate } from 'react-router-dom';
import Bag from '../../assets/shopping-bag.webp';
import { useStateContext } from '../../context/StateContext';

const EmptyCart = () => {
    const {setShowCart} = useStateContext();
    const navigate = useNavigate();
    const handleButton=()=>{
       setShowCart(false);
       navigate("/");
    }
    return (
        <div className='text-center '>
            <img className='mx-auto' src={Bag} alt="" />
            <p className='text-2xl'>Your Shopping Bag Is Empty.</p>
            <button onClick={handleButton} className='px-16 py-2 bg-red-600 text-white font-semibold rounded mt-10' > Shop Items</button>  
        </div>
    );
};

export default EmptyCart;