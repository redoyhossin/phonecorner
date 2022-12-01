import React from 'react';

const Singlecart = ({ product,setProductmodal }) => {
    // console.log(product)
    const { _id, product_id, location, name, published_date, Owneremail, original_price, picture, resale_price, year_so_fuse, time } = product;
    return (
        <div className='mb-4'>
            <div className="card w-96  ">
                <figure><img className='w-80 h-64' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name} </h2>
                    <p> location {location} </p>
                    <p>Years of use {year_so_fuse} </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline"> Original price {original_price} Taka</div>
                        <div className="badge badge-outline">Resale price {resale_price} Taka </div>
                    </div>
                  

                    <label onClick={() => setProductmodal(product)} htmlFor="my_modal" className="btn btn-primary">Book now</label>
                    
                    {/* <label disabled={product_id.length===0}  onClick={()=>setProductmodal(product)} htmlFor="my_modal" className="btn btn-primary">Book now</label> */}

                </div>
            </div>
        </div>
    );
};

export default Singlecart;