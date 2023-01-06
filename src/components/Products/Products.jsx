import Logo from '../../assets/headphones_b_2.webp'
import Product from '../Product/Product';


const products = [
    {
        img:Logo,
        title:'boAt Party Pal 50',
        price: 56
    },
    {
        img:Logo,
        title:'boAt Party Pal 50',
        price: 56
    },
    {
        img:Logo,
        title:'boAt Party Pal 50',
        price: 56
    },
    {
        img:Logo,
        title:'boAt Party Pal 50',
        price: 56
    },
    {
        img:Logo,
        title:'boAt Party Pal 50',
        price: 56
    }, {
        img:Logo,
        title:'boAt Party Pal 50',
        price: 56
    }
]
const Products = () => {
    return (
        <div className='container text-center mx-auto'>
            <div>
                <h1>Best Seller Products</h1>
                <p>speaker There are many variations passages</p>
            </div>
            <div className='grid grid-cols-4 gap-4 justify-items-center'>
               {
                products.map(pd=><Product pd={pd} />)
               }
            </div>
        </div>
    );
};

export default Products;