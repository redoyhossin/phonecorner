import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Privacy = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handileaccept = () => {
        toast.success('Done');
        navigate(from, { replace: true });
    }
    return (
        <div className='mt-44'>
            <h1 className='text-3xl text-center text-slate-700'>
                best service for you
            </h1>
            <p className='text-xl text-center text-slate-700'> please accept our Privacy</p>
            <div className='flex justify-center mt-3'>
                <button onClick={handileaccept} className='btn btn-primary'>accept</button>
            </div>
        </div>
    );
};

export default Privacy;