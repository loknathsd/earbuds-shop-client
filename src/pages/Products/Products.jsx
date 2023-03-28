import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../../components/Product/Product';

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
         fetch("http://localhost:5000/product")
         .then(res=>res.json())
         .then(data=>setProducts(data))   
    },[])
    return (
        <div className='container text-center mx-auto'>
            <h1 className='text-3xl font-bold mt-5 mb-12'>All Products</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center'>
               {
                products.map(pd=><Product  pd={pd} key={pd.id} />)
               }
            </div>
        </div>
    );
};

export default Products;