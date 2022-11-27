import React from 'react';
import handleerror from '../../../Assets/errorhandle.jpg'
import { useRouteError } from 'react-router-dom';
import UseContext from '../../../Context/UseContext';
import app from '../../../Firebase/Firebase.config';
import { toast } from 'react-toastify';

const RouterError = () => {
    const { logout } = UseContext(app)
    const error = useRouteError();

    const handlelogout = () => {
        logout()
            .then(() => {
                toast.success('Signout successull')
            }).catch(err => console.log(err));
    }
    return (
        <div className=''>
            <i className='text-center'>{error.statusText || error.message}</i>
            <div className='flex justify-center'>
                <img src={handleerror} alt="" />
            </div>
            <div>
                <button onClick={handlelogout} className='flex justify-center btn btn-outline'>Sign out</button>
            </div>
        </div>
    );
};

export default RouterError;