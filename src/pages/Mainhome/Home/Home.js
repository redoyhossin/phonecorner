import React from 'react';
import Bannar from '../bannar/Bannar';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Homecategory from './Homecategory/Homecategory';

const Home = () => {
    return (
        <div>
            <Bannar />
            <Homecategory/>
            <Section1 />
            <Section2/>
        </div>
    );
};

export default Home;