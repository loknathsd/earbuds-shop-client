import React, { useRef } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../../context/StateContext';
import './Cart.css'
import EmptyCart from './EmptyCart';

const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, setShowCart, totalQuantities, cartItems, removeProduct, toggleCartItemQuantity } = useStateContext();
    return (
        <div className='cart-wrapper' >
            <div className='cart-container '>
                <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span>Your Cart</span>
                    <span className='text-red-600'> ( {totalQuantities} items)</span>
                </button>
                {cartItems.length < 1 && <EmptyCart />}

                {/* cart products */}
                {cartItems.length >= 1 && cartItems.map((item) => <div key={item} className='mt-10 ' >
                    <div className='flex ml-5'>
                        <img className='w-40 h-40 max-md:w-24 max-md:h-24 bg-[#ebebeb] p-5 rounded-xl' src={item.img} alt="imageTitle" />
                        <div className='lg:mt-3'>
                            <div className='flex gap-8 max-md:gap-4 mx-5 text-[#324d67] lg:text-2xl font-semibold'>
                                <h3>{item.name}</h3>
                                <h3>$ {item.price}</h3>
                            </div>
                            <div className='flex lg:gap-20 max-md:gap-4'>
                                <div className='inline-flex rounded-md shadow-sm mt-10 max-md:mt-7  mx-5 max-md:ml-3 mb-10'>
                                    <button onClick={() => toggleCartItemQuantity(item.id, 'dec')} className='px-4 py-1 text-xl font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-l-lg '>-</button>
                                    <button className='px-4 py-1 text-xl font-medium text-gray-900 bg-white border-t border-b border-gray-200'>{item.quantity}</button>
                                    <button onClick={() => toggleCartItemQuantity(item.id, 'inc')} className="px-4 py-1 text-xl font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-r-md">+</button>
                                </div>
                                <button onClick={() => removeProduct(item)} className='text-3xl text-red-600  '> <TiDeleteOutline /> </button>
                            </div>
                        </div>
                    </div>

                </div>)}
                {cartItems.length >= 1 && <div className='mt-48 mx-5 text-center' >
                    <div className='flex lg:gap-72 md:gap-36 max-sm:gap-20 text-3xl '>
                        <p className=''> Subtotal :</p>
                        <p>$ {totalPrice}</p>
                    </div>
                    <button className='bg-red-600 px-32 py-3 mt-12 rounded-lg text-white font-semibold'>Checkout</button>
                </div>}
            </div>
        </div>
    );
};

export default Cart;