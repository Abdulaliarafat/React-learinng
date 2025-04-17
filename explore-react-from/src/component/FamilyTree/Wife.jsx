import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Wife = ({name,assets}) => {
    const applyAssets=useContext(AssetContext)
    console.log('new Assets',applyAssets)
    return (
        <div>
            <h3>Wife:{name}</h3>
            <p>Asset: {assets}</p>
            <p>New assets:{applyAssets}</p>
        </div>
    );
};

export default Wife;