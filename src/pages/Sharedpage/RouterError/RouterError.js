import React from 'react';
import handleerror from '../../../Assets/errorhandle.jpg'
import { useRouteError } from 'react-router-dom';

const RouterError = () => {
    const error = useRouteError();
    return (
        <div className=''>
            <i className='text-center'>{error.statusText || error.message}</i>
            <div className='flex justify-center'>
            <img src={handleerror} alt="" />
            </div>
            <div>
                <button className='flex justify-center btn btn-outline'>Sign out</button>
            </div>
        </div>
    );
};

export default RouterError;