import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbars from '../pages/Navbars/Navbars';

const DashboardLayout = () => {
    return (
        <div>
            <Navbars />

            <div className="drawer drawer-mobile drawer-end">
                <input id="my_nav" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side ">
                    <label htmlFor="my_nav" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/Dashboard'>My Oders</Link></li>
                        <li><Link to='/Dashboard/Allusers'>All Users</Link></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;