import React from 'react';

const Wife = ({name,assets}) => {
    return (
        <div>
            <h3>Wife:{name}</h3>
            <p>Asset: {assets}</p>
        </div>
    );
};

export default Wife;