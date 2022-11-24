import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbars from '../pages/Navbars/Navbars';

const Main = () => {
    return (
        <div>
            <Navbars/>
            <Outlet/>
        </div>
    );
};

export default Main;