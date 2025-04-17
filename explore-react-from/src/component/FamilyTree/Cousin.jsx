import React from 'react';
import Wife from './Wife';
import Friends from './Friends';

const Cousin = ({name ,assets}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'jamsed'&& <Wife assets={assets}></Wife>
            }
            {
                name === 'josiem' && <Friends></Friends>
            }
        </div>
    );
};

export default Cousin;