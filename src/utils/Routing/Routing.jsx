import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';
import Products from '../../pages/Products/Products';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path='dashboard' element={''} />
        </Routes>
    );
};

export default Routing;