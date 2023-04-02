import Product from '../Product/Product';
import { useEffect, useState } from 'react';
import Loader from '../Shared/Loader/Loader';

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
         fetch("http://localhost:5000/product")
         .then(res=>res.json())
         .then(data=>setProducts(data.slice(0,8)))   
    },[])
    return (
        <div className='container text-center mx-auto'>
            <div className='mt-16 mb-10 text-[#324d67]'>
                <h1 className='text-5xl font-bold mb-2 '>Best Seller Products</h1>
                <p className='text-xl'>speaker There are many variations passages</p>
            </div>
          {  products.length === 0 ? <Loader  /> :
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center'>
               {
                products.map(pd=><Product  pd={pd} key={pd._id} />)
               }
            </div>}
        </div>
    );
};

export default Products;