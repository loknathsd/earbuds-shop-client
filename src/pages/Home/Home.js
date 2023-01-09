import React from 'react';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Shared/Navbar/Navbar';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import Products from '../../components/Products/Products';
import Footer from '../../components/Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Products />
            <OfferBanner />
            <Footer />
            
        </div>
    );
};

export default Home;