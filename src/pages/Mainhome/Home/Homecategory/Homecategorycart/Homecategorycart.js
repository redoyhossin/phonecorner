import React from 'react';
import { Link } from 'react-router-dom';

const Homecategorycart = ({ category }) => {
    const { _id, categoriesname, categoriesimg,categories_id } = category;
    return (
        <div className='mb-6'>
            <Link to={`/Product/${categories_id}`}>
                <div className="card w-96 bg-base-100 shadow-2xl  ">
                    <figure><img className='h-24 w-52' src={categoriesimg} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className='font-bold text-xl'> {categoriesname} </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Homecategorycart;