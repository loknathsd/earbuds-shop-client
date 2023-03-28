import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({pd}) => {
const {name,imgUrl,price,_id} = pd;
    return (
     <Link to={`/product-detail/${_id}`}>
        <div className='product-card bg-[#ebebeb] rounded-xl w-[300px] h-[300px] text-center p-3'>
            <img className='w-48 mx-auto h-48' src={imgUrl} alt="" />
            <h3 className='text-[#324d67] text-xl mt-3 mb-2 font-bold capitalize'>{name}</h3>
            <h4 className='text-xl font-bold'>${price}</h4> 
        </div>
        </Link>
    );
};

export default Product;