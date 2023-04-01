import React, { useState } from 'react';
import {
  MdOutlineDashboard,
  MdAccountCircle,
  MdLogout,
  MdLibraryAdd,
  MdOutlineProductionQuantityLimits,
} from 'react-icons/md';
import {
  BsFillCartCheckFill,
} from 'react-icons/bs';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Menus = [
  { title: 'Dashboard', path: '', icon: <MdOutlineDashboard /> },
  { title: 'Add Product', path: 'add', icon: <MdLibraryAdd /> },
  { title: 'Orders', path: 'orders', icon: <BsFillCartCheckFill /> },
  { title: 'Products', path: 'products', icon: <MdOutlineProductionQuantityLimits /> },
  { title: 'Users', path: 'users', icon: <FiUsers /> },
  { title: 'Profile', path: 'profile', icon: <MdAccountCircle /> },
  { title: 'Logout', path: '/', icon: <MdLogout /> },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-end justify-start ">
      <div
        className={` ${open ? 'w-48 px-2' : 'w-8'
          } lg:w-72 bg-teal-800 h-screen relative duration-500`}
      >
        <div onClick={toggleSidebar} className={`lg:hidden flex text-lg text-white ${open ? 'justify-end' : ' ml-2'} mt-5`}>
          {!open && <span><FaArrowAltCircleRight /> </span>}
          {open && <span><FaArrowAltCircleLeft /> </span>}
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <div key={index}>
              <Link to={Menu.path}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-teal-400 text-white text-sm items-center gap-x-4 
               `}
              >
                <span>{Menu.icon}</span>
                <span className="flex-1">{Menu.title}</span>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; 