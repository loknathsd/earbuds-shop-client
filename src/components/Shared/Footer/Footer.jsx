import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
            <div className='container max-auto text-center mt-32 mb-12 text-[#324d67]'>
                <p style={{fontFamily:"Anton"}} className='text-md '>&copy; {year} E-shop All Rights Reserved</p>
                <div className='flex justify-center text-4xl gap-3 mt-3'><AiFillInstagram /> <BsTwitter /></div>
            </div>
    );
};

export default Footer;