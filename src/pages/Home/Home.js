import React from 'react';
import Banner from '../../components/Banner/Banner';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <OfferBanner />   
        </div>
    );
};

export default Home;