import React from 'react';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Products />
            <OfferBanner />
            
        </div>
    );
};

export default Home;