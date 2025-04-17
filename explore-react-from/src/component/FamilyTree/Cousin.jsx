import React from 'react';
import Wife from './Wife';

const Cousin = ({name ,assets}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'jamsed'&& <Wife assets={assets}></Wife>
            }
        </div>
    );
};

export default Cousin;