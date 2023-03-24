import React, { useRef } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../../context/StateContext';
import './Cart.css'
import EmptyCart from './EmptyCart';

const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, setShowCart, totalQuantities, cartItems } = useStateContext();
    console.log(cartItems, 'items')
    return (
        <div className='cart-wrapper' >
            <div className='cart-container '>
                <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span>Your Cart</span>
                    <span className='text-red-600'> ({totalQuantities} items)</span>
                </button>
                {cartItems.length < 1 && <EmptyCart />}

                {/* cart products */}
                {cartItems.length >= 1 && cartItems.map((item) => <div className='mt-10 ' >
                    <div className='flex ml-5'>
                        <img className='w-40 bg-[#ebebeb] p-5 rounded-xl' src={item.img} alt="imageTitle" />
                        <div className='mt-3'>
                            <div className='flex gap-8 mx-5 text-[#324d67] text-2xl font-semibold'>
                                <h3>{item.name}</h3>
                                <h3>$ {item.price}</h3>
                            </div>
                            <div className='flex gap-12'>
                                <div className='inline-flex rounded-md shadow-sm mt-10 mx-5 mb-10'>
                                    <button onClick={''} className='px-5 py-2 text-xl font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-l-lg '>-</button>
                                    <button className='px-5 py-2 text-xl font-medium text-gray-900 bg-white border-t border-b border-gray-200'>{item.quantity}</button>
                                    <button onClick={''} className="px-5 py-2 text-xl font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-r-md">+</button>
                                </div>
                                <button className='text-3xl text-red-600  '> <TiDeleteOutline /> </button>
                            </div>
                        </div>
                    </div>

                </div>)}
                <div className='mt-48 mx-5 text-center' >
                    <div className='flex gap-72 text-3xl '>
                        <p className=''> Subtotal :</p>
                        <p>$ 500</p>
                    </div>
                    <button className='bg-red-600 px-32 py-3 mt-12 rounded-lg'>Pay with Stripe</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;