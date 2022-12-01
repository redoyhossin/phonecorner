import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { ContextAuth } from '../../../../Context/UseContext';

const ProductModal = ({ productmodal, setProductmodal }) => {
    const { _id, product_id, location, name, published_date, Owneremail, original_price, picture, resale_price, year_so_fuse, time } = productmodal;
    // console.log(productmodal)
    // date
    let showdate = new Date();
    // let displaytodaysdate = showdate.getDate() + '/' + (showdate.getMonth() + 1) + '/' + showdate.getFullYear();
    let dt = showdate.toDateString();

    // date

    const { user } = useContext(ContextAuth);



    const modalsubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const resale_price = form.resale_price.value;
        const dt = form.dt.value;
        const number = form.number.value;
        const locations = form.locations.value;
        console.log(location, dt, name, number, resale_price, email)

        const booking = {
            dt,
            published_date,
            Owneremail,
            product_id,
            oderlocation: locations,
            picture,
            year_so_fuse,
            time,
            resale_price,
            name,
            productname: name

        }
        console.log(booking)
        toast.success('booked done')
        setProductmodal(null);
      
    }

    return (
        <div>

            <input type="checkbox" id="my_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h2 className="font-bold text-lg "> {name} </h2>
                    <label htmlFor="my_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={modalsubmit}>

                        <input name='name' type="text" placeholder="" readOnly defaultValue={user?.displayName} className="input input-bordered w-full  mb-4 mt-1" />

                        <input name='email' type="email" placeholder="" readOnly defaultValue={user?.email} className="input input-bordered w-full  mb-4" />

                        <input name='resale_price' type="text" placeholder="Full Name" value={resale_price} readOnly className="input input-bordered w-full  mb-4" />

                        <input name='dt' type="text" placeholder="Full Name" value={dt} readOnly className="input input-bordered w-full  mb-4" />

                        <input name='number' type="number" required placeholder="Enter your number" className="input input-bordered w-full  mb-4" />

                        <input name='locations' type="text" required placeholder="location" className="input input-bordered w-full  mb-4" />

                        
                        <button className="btn btn-primary w-full">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ProductModal;