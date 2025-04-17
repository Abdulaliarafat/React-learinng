import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';

const Dad = ({assets}) => {
    return (
        <div>
            <h3>Dad
                <section className='flex'>
                    <MySelf assets={assets}></MySelf>
                    <Brother></Brother>
                    <Sister></Sister>
                </section>
            </h3>
        </div>
    );
};

export default Dad;