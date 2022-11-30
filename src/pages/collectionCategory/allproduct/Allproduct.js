import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Allproductcart from './allproductcart/Allproductcart';

const Allproduct = () => {


    const { data: allproducts = [] } = useQuery({
        queryKey: ['Allproduct'],
        queryFn: () => fetch('http://localhost:5000/allproduct')
            .then(res => res.json())
    })
    return (
        <div>
            <h1 className='text-2xl my-6 text-center'>All product here</h1>
            <div className='mb-16 grid lg:grid-cols-3 justify-items-center'>
                {
                    allproducts.map(allproduct =><Allproductcart key={allproduct._id} allproduct={allproduct} />)
                }
            </div>
        </div>
    );
};

export default Allproduct;