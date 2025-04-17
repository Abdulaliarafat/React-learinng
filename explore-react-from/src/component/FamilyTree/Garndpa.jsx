import React from 'react';
import Dad from './Dad';
import Uncel from './Uncel';
import Aunt from './Aunt';

const Garndpa = ({assets}) => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Dad assets={assets}></Dad>
                <Uncel></Uncel>
                <Aunt assets={assets}></Aunt>
            </section>
        </div>
    );
};

export default Garndpa;