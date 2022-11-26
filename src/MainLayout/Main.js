import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Navbars from '../pages/Navbars/Navbars';

const Main = () => {
    return (
        <div>
            <Navbars/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;