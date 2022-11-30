import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Homecategorycart from './Homecategorycart/Homecategorycart';

const Homecategory = () => {
    const [categoris, setcategory] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:5000/allproductcategories')
            .then(data => {
                const loadcategory = data.data;
                setcategory(loadcategory);
                // console.log(categoris)
            });
    }, [])

    return (
        <div className='mb-16 grid lg:grid-cols-3 justify-items-center'>
           
            {
                categoris.map(category => <Homecategorycart key={category._id} category={category} ></Homecategorycart>)
            }


        </div>
    );
};

export default Homecategory;