import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;