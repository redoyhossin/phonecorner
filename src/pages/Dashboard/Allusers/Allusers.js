import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { ContextAuth } from '../../../Context/UseContext';
import Shareloddar from '../../shareloddar/Shareloddar';

const Allusers = () => {
    const { user } = useContext(ContextAuth);

    const { data: Allusers = [], isLoading,refetch } = useQuery({
        queryKey: ['Allusers'],
        queryFn: () => fetch('https://assignment-12-server-nine.vercel.app/alluser')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Shareloddar />
    }

    const handleAdmin = id => {
        fetch(`https://assignment-12-server-nine.vercel.app/alluser/admin/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Admin done')
                refetch()
            })
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

                                        {users?.role !== 'admin' && <button onClick={() => handleAdmin(users?._id)} className="btn btn-xs">Admin</button> }

{/* 
                                        {user?.role !== 'admin'

                                            <>

                                                <li><Link to='/Dashboard'>Dashboard</Link></li>
                                                <li>
                                                    <button onClick={logouthandle} className='btn btn-accent text-primary rounded-full'>Sign out</button>
                                                </li>
                                            </>
                                            :
                                            <>
                                                <li><Link className='btn btn-accent text-primary rounded-full ' to='/Signin'>Sign in</Link></li>
                                            </>
                                        } */}


                                    </td>

                                    <td>
                                        <button  className="btn btn-circle">
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