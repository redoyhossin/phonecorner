import React from 'react';
import handleerror from '../../../Assets/errorhandle.jpg'
import { Link, useRouteError } from 'react-router-dom';

const RouterError = () => {
    const error = useRouteError();

    return (
        <div className='text-center mt-6'>
            <i className='text-center'>{error.statusText || error.message}</i>
            <div className='flex justify-center mt-4'>
                <img className='rounded-xl' src={handleerror} alt="" />
            </div>
            {/* <div className='flex justify-center mt-4'>
                <Link to='/'> <button className='flex justify-center btn btn-outline'>back</button></Link>
            </div> */}
        </div>
    );
};

export default RouterError;