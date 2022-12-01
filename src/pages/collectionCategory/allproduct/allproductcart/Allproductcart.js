import React from 'react';

const Allproductcart = ({ allproduct,displaytodaysdate }) => {
    // console.log(allproduct)
    const { product_id, location, name, published_date, picture, resale_price, original_price, year_so_fuse, Owneremail, time } = allproduct;


   


    return (
        <div className='mb-4'>

            <div className="card w-96  ">
                <figure><img className='w-80 h-64' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}

                    </h2>
                    <p> location {location} </p>
                    <p>years of use {year_so_fuse} </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline"> Original price {original_price}</div>
                        <div className="badge badge-outline">Resale price {resale_price.original_price} </div>
                        {/* <input className='font-semibold' type="text" readOnly value={displaytodaysdate} name="" id="" /> */}
                        <p> post date {displaytodaysdate} </p>
                        <p> {published_date} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allproductcart;