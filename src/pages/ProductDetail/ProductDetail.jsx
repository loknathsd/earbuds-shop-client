import React from 'react';
import PdDetail from '../../components/PdDetail/PdDetail';
import Product from '../../components/Product/Product';
import Marquee from 'react-fast-marquee';
import { useState,useEffect } from 'react';
import Loader from '../../components/Shared/Loader/Loader';

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
                <h1 style={{fontFamily:'anton'}} className='capitalize text-[#324d67] text-[28px]  mb-12'>you may also like</h1>
                {products.length===0 ? <Loader /> : <Marquee  pauseOnHover={true} gradient={false} speed={50}>
                       <div className='flex gap-x-6'>
                       {
                            products.map(pd => <Product key={pd._id} pd={pd} />)
                        }
                       </div>
                    </Marquee> }
            </div>
        </div>
    );
};

export default ProductDetail;