import React from 'react';
import PdDetail from '../../components/PdDetail/PdDetail';
import Product from '../../components/Product/Product';
import Marquee from 'react-fast-marquee';
import { useState,useEffect } from 'react';

const ProductDetail = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/product")
        .then(res=>res.json())
        .then(data=>setProducts(data))   
   },[])
    return (
        <div className=''>
            <PdDetail />
            <div className=' container  mx-auto text-center mt-24 mb-12'>
                <h1 className='capitalize text-[#324d67] text-[28px] font-bold mb-12'>you may also like</h1>
                 <Marquee  pauseOnHover={true} gradient={false} speed={50}>
                       <div className='flex gap-x-6'>
                       {
                            products.map(pd => <Product key={pd._id} pd={pd} />)
                        }
                       </div>
                    </Marquee> 
            </div>
        </div>
    );
};

export default ProductDetail;