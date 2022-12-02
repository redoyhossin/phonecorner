import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Shareloddar from '../../shareloddar/Shareloddar';
import Allproductcart from './allproductcart/Allproductcart';

const Allproduct = () => {
    let showdate = new Date();
    
    let displaytodaysdate = showdate.getDate() + '/' + (showdate.getMonth() + 1) + '/' + showdate.getFullYear();
    
    // let displaytodaysdate = showdate.getDate();


    const { data: allproducts = [], isLoading } = useQuery({
        queryKey: ['Allproduct'],
        queryFn: () => fetch('https://assignment-12-server-nine.vercel.app/allproduct')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Shareloddar />
    }
    return (
        <div>
            <h1 className='text-2xl my-6 text-center'>All product here</h1>
            <div className='mb-16 grid lg:grid-cols-3 justify-items-center'>
                {
                    allproducts.map(allproduct => <Allproductcart key={allproduct._id} displaytodaysdate={displaytodaysdate} allproduct={allproduct} />)
                }
            </div>
        </div>
    );
};

export default Allproduct;