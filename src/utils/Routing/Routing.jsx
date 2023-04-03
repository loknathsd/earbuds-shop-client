import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddProduct from '../../components/Dashboard/AddProduct/AddProduct';
import Orders from '../../components/Dashboard/Orders/Orders';
import ProductsAll from '../../components/Dashboard/ProductsAll/ProductsAll';
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from '../../components/Shared/Navbar/Navbar';
import Users from '../../components/Users/Users';
import Checkout from '../../pages/Checkout/Checkout';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Profile from '../../pages/Dashboard/Profile';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';
import Products from '../../pages/Products/Products';
import Register from '../../pages/Register/Register';
import Success from '../../pages/Success/Success';
import ProtectedRoute from './ProtectedRoute';

const Routing = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/product-detail/:id" element={<ProductDetail/>} />
                    
                </Route>
                {/* <Route path="/product-detail/:id" element={<ProtectedRoute><ProductDetail/> </ProtectedRoute>} /> */}
               <Route path='/checkout' element={<Checkout />} />
                <Route path='/success' element={<Success />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />} >
                    <Route path="/dashboard" element={<Navigate replace to="profile" ></Navigate>} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="add" element={<AddProduct />} />
                    <Route path="edit/:id" element={<AddProduct />} />
                    <Route path="products" element={<ProductsAll />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="users" element={<Users />} />
                    <Route path="" element={<Home />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default Routing;