import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductModal from './productModal/ProductModal';
import Singleproduct from './singleproduct/Singleproduct';

const Product = () => {
    // const lod = useLoaderData();
    // console.log(lod)
    const [productmodal, setProductmodal] = useState(null)



    return (
        <div>
            <Singleproduct
                setProductmodal={setProductmodal}
            />

            {
                productmodal &&
                <ProductModal
                        productmodal={productmodal}
                        setProductmodal={setProductmodal}
                >
                </ProductModal>}

        </div>
    );
};

export default Product;