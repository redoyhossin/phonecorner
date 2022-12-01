import React from 'react';
import { Link } from 'react-router-dom';

const Categorynavcart = ({ nvcategoris }) => {
    const { categoriesname,_id,categories_id } = nvcategoris;
    return (
        <div className='mb-4 '>
            <Link to={`/Product/${categories_id}`}>
                <button className='bg-slate-400 text-white px-8 rounded-lg py-2'>{categoriesname}</button>
            </Link>
        </div>
    );
};

export default Categorynavcart;