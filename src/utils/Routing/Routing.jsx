import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Checkout from '../../pages/Checkout/Checkout';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';
import Products from '../../pages/Products/Products';
import Register from '../../pages/Register/Register';
import Success from '../../pages/Success/Success';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/success' element={<Success />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path='dashboard' element={''} />
        </Routes>
    );
};

export default Routing;