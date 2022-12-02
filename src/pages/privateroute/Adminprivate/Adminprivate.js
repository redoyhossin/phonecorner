import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Adminhooks from '../../../addminehooks/Adminhooks';
import { ContextAuth } from '../../../Context/UseContext';

const Adminprivate = ({ children }) => {
    const { user, loddar } = useContext(ContextAuth);
    const [isAdmin,adminlodar]=Adminhooks(user?.email)
    const location = useLocation();

    if (loddar || adminlodar) {
        return <div className='flex justify-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    };

    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/Signin' state={{ from: location }} replace>

    </Navigate>
};

export default Adminprivate;