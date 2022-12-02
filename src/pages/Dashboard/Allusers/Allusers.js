import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Shareloddar from '../../shareloddar/Shareloddar';

const Allusers = () => {


    const { data: Allusers = [], isLoading } = useQuery({
        queryKey: ['Allusers'],
        queryFn: () => fetch('http://localhost:5000/alluser')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Shareloddar />
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Emal</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            Allusers.map((users, i) =>
                                <tr key={users._id}>
                                    <th>{i + 1}</th>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>
                                        <button className="btn btn-circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allusers;