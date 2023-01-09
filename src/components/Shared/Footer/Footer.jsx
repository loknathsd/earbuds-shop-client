import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
            <div className='container max-auto text-center my-16 text-[#324d67]'>
                <p className='text-lg font-semibold'>&copy; {year} Phanox All Rights Reserved</p>
                <div className='flex justify-center text-4xl gap-3 mt-3'><AiFillInstagram /> <BsTwitter /></div>
            </div>
    );
};

export default Footer;