import React from 'react';

const Categorynavcart = ({ nvcategoris }) => {
    const {categoriesname} = nvcategoris;
    return (
        <div className='mb-4 '>
            <button className='bg-slate-400 text-white px-8 rounded-lg py-2'>{categoriesname}</button>
        </div>
    );
};

export default Categorynavcart;