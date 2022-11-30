import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Categorynavcart from './Categorynavcart/Categorynavcart';

const Categorynav = () => {
    const [navcategory, setNavcategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allproductcategories')
            .then(data => {
                const loadcategory = data.data;
                setNavcategory(loadcategory);
                // console.log(categoris)
            });
    }, [])
    return (
        <div>
            <h1 className='text-center font-semibold text-xl mb-6'>All product here</h1>
            <div className='mb-16 grid lg:grid-cols-3 justify-items-center'>
                {
                    navcategory.map(nvcategoris => <Categorynavcart key={nvcategoris._id} nvcategoris={nvcategoris} />)
                }
            </div>
        </div>
    );
};

export default Categorynav;