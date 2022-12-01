import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shareloddar from '../../../shareloddar/Shareloddar';
import Singlecart from './singlecart/Singlecart';

const Singleproduct = ({ setProductmodal }) => {
    // const [modalopen,setModalopen]=useState(null)

    const productsdata = useLoaderData();
    console.log(productsdata)
    // const { data: allproducts = [], isLoading } = useQuery({
    //     queryKey: ['Allproduct'],
    //     queryFn: () => fetch('http://localhost:5000/allproduct/${id}')
    //         .then(res => res.json())
    // })
    // if (isLoading) {
    //     return <Shareloddar />
    // }


    return (
        <div className='mb-16 grid lg:grid-cols-3 justify-items-center'>
            {
                productsdata.map(product => <Singlecart product={product} key={product._id} setProductmodal={setProductmodal}  />)
            }
        </div>
    );
};

export default Singleproduct;