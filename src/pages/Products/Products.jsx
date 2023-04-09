import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../../components/Product/Product';
import Loader from '../../components/Shared/Loader/Loader';

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
         fetch("https://earbuds.onrender.com/product")
         .then(res=>res.json())
         .then(data=>setProducts(data))   
    },[])
    return (
        <div className='container text-center mx-auto'>
            <h1 style={{fontFamily:'anton'}} className='text-3xl text-[#324d67 ] mt-5 mb-12'>All Products</h1>
          {products.length===0 ? <Loader /> :  <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center'>
               {
                products.map(pd=><Product  pd={pd} key={pd._id} />)
               }
            </div>}
        </div>
    );
};

export default Products;