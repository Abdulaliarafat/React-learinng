import React from 'react';
import Wife from './Wife';

const MySelf = ({assets}) => {
    return (
        <div>
            <h3>Myself</h3>
            <Wife assets={assets}></Wife>
        </div>
    );
};

export default MySelf;