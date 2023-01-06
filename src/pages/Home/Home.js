import React from 'react';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Products />
            
        </div>
    );
};

export default Home;