import Product from '../Product/Product';
import  { products } from '../../fakeData/data'
//fake data for products

const Products = () => {
    return (
        <div className='container text-center mx-auto'>
            <div className='mt-16 mb-10 text-[#324d67]'>
                <h1 className='text-5xl font-bold mb-2 '>Best Seller Products</h1>
                <p className='text-xl'>speaker There are many variations passages</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center'>
               {
                products.map(pd=><Product  pd={pd} key={pd.id} />)
               }
            </div>
        </div>
    );
};

export default Products;