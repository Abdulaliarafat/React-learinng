import React from 'react';
import Cousin from './Cousin';

const Uncel = () => {
    return (
        <div>
          <h3>Uncel</h3>
        <section className='flex'>
            <Cousin name='Rafa'></Cousin>
            <Cousin name='Rafi'></Cousin>
        </section>
        </div>
    );
};

export default Uncel;