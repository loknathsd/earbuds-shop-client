import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;