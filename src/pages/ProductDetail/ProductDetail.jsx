import React from 'react';
import PdDetail from '../../components/PdDetail/PdDetail';
import Product from '../../components/Product/Product';
import Navbar from '../../components/Shared/Navbar/Navbar';
import { products } from '../../fakeData/data';
import Footer from '../../components/Shared/Footer/Footer.jsx';

const ProductDetail = () => {
    return (
        <div className=''>
            <Navbar />
            <PdDetail />
            <div className=' container mx-auto text-center mt-24'>
                <h1 className='capitalize text-[#324d67] text-[28px] font-bold mb-12'>you may also like</h1>
                <div className='overflow-x-hidden  '>
                    <div className='flex  gap-5 animate-marquee whitespace-nowrap'>
                        {
                            products.map(pd => <Product pd={pd} />)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;