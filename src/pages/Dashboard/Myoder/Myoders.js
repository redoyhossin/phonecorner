import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { ContextAuth } from '../../../Context/UseContext';

const Myoders = () => {
    const { user } = useContext(ContextAuth);

    const url = `http://localhost:5000/modalbook?email=${user?.email}`

    const { data: modalbook = [] } = useQuery({
        queryKey: ['modalbook', user?.email],
        queryFn: () => fetch(url, {
            headers: {
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    })
    console.log(modalbook)
    return (
        <div>
            <h1 className='text-2xl mb-2'>My Orders</h1>

            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            modalbook.map((book,i) => 
                        <tr key={book._id}>

                                    <th>{ i+1}</th>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={book.picture} alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{book.productname}</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            )
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Myoders;