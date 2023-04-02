import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Badge } from '@mui/material';
import { useStateContext } from '../../../context/StateContext';
import Cart from '../../Cart/Cart';


const Navbar = () => {
    const [navMobile, setNavMobile] = useState(false);
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    return (
        <div>
            <header className='relative z-20 mb-12 lg:mb-0'>
                <div className=" ">
                    <div className='flex items-center justify-between relative py-3 '>
                        <div className='flex justify-between container mx-auto pt-2 '>
                            <Link to="/">
                                <h1 className='ml-5'>PHANOX</h1>
                            </Link>
                            <div className='hidden lg:flex gap-x-16'>
                                <Link to='/'>Home</Link>
                                <Link to='/products'>Products</Link>
                                <Link to='/dashboard'>Dashboard</Link>
                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Login
                                </button>

                            </div>
                            <p className='mr-10 text-2xl cursor-pointer'>
                                <Badge onClick={() => setShowCart(true)} badgeContent={totalQuantities} color="secondary" showZero>
                                    <BsCart />
                                </Badge>
                            </p>
                            {showCart && <Cart />}
                        </div>
                        {/* mobile responsive item */}
                        <div className={`${navMobile ? 'max-h-96' : 'max-h-0'} lg:hidden bg-gray-400 absolute top-16 w-full left-0 right-0  rounded transition-all overflow-hidden`}>
                            <div className='p-8 flex flex-col gap-y-4'>
                                <Link to='/'>Home</Link>
                                <Link to='/products'>Products</Link>
                                <Link to='/dashboard'>Dashboard</Link>
                                <Link to="/login">
                                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div onClick={() => setNavMobile(!navMobile)} className='mt-2 text-2xl lg:hidden px-3'>
                            <FaBars />
                        </div>
                    </div>
                </div>

            </header>

        </div>
    );
};

export default Navbar;