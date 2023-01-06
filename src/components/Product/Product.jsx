import React from 'react';

const Product = ({pd}) => {
const {img,title,price} = pd;
   
    return (
        <div className='bg-[#ebebeb] rounded-xl w-[300px] h-[300px] text-center p-5'>
            <img className='w-48 mx-auto' src={img} alt="" />
            <h3 className='text-[##324d67] text-xl'>{title}</h3>
            <h4>$ {price}</h4> 
        </div>
    );
};

export default Product;