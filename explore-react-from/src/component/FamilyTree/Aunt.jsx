import React from 'react';
import Cousin from './Cousin';

const Aunt = ({assets}) => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>
                <Cousin assets={assets} name='jamsed'></Cousin>
                <Cousin name='josiem'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;