import React from 'react';
import PdDetail from '../../components/PdDetail/PdDetail';
import Product from '../../components/Product/Product';
import { products } from '../../fakeData/data';
import Marquee from 'react-fast-marquee';

const ProductDetail = () => {
    return (
        <div className=''>
            <PdDetail />
            <div className=' container  mx-auto text-center mt-24 mb-12'>
                <h1 className='capitalize text-[#324d67] text-[28px] font-bold mb-12'>you may also like</h1>
                 <Marquee  pauseOnHover={true} gradient={false} speed={80}>
                       <div className='flex gap-6'>
                       {
                            products.map(pd => <Product key={pd.id} pd={pd} />)
                        }
                       </div>
                    </Marquee> 
            </div>
        </div>
    );
};

export default ProductDetail;