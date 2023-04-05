import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { BsCart } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { Badge } from '@mui/material';
import { useStateContext } from '../../../context/StateContext';
import Cart from '../../Cart/Cart';
import Logo from '../../../assets/images.png'

const Navbar = () => {
    const [navMobile, setNavMobile] = useState(false);
    const { showCart, setShowCart, totalQuantities, logout, user } = useStateContext();
    const navigate = useNavigate();
    const handleLoginButton = () => {
        navigate("/login");
    }
     const handleLogOutButton = () => {
        logout();
    }
    return (
        <div>
            <header className='relative z-20 mb-12 lg:mb-0'>
                <div className=" ">
                    <div className='flex items-center justify-between relative py-3 '>
                        <div className='flex justify-between container mx-auto pt-2 '>
                            <Link to="/">
                                <img className='w-24 -mt-3 ml-5' src={Logo} alt="E-shop" />
                            </Link>
                            <div style={{fontFamily:'Anton'}} className='hidden lg:flex gap-x-20 text-md  text-[#324d67] '>
                                <Link to='/'>Home</Link>
                                <Link to='/products'>Products</Link>
                                <Link to='/dashboard'>Dashboard</Link>
                                {!user ? <button onClick={handleLoginButton} className="-mt-1 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded">
                                    Login
                                </button>
                                    :
                                    <div className='flex gap-x-1'>
                                        <BiUserCircle className='text-3xl -mt-1 text-gray-500'/>
                                        <p className='mr-24 text-md'>{user.name || user.email}</p>
                                        <button onClick={handleLogOutButton} className="-mt-1 bg-transparent hover:bg-blue-500 text-blue-700  hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded">
                                            LogOut
                                        </button>                                       
                                    </div>
                                }
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
                                {!user ? <button onClick={handleLoginButton} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Login
                                </button>
                                    :
                                    <div className=''>
                                       <div className='flex gap-x-1 mb-4'>
                                       <BiUserCircle className='text-3xl text-gray-500'/>
                                        <p className='text-lg'>{user.name || user.email}</p>
                                       </div>
                                        <button onClick={handleLogOutButton} className=" w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                                            LogOut
                                        </button>   
                                    </div>
                                }
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