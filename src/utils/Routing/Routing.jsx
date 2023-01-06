import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Products from '../../pages/Products/Products';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path='dashboard' element={''} />
        </Routes>
    );
};

export default Routing;