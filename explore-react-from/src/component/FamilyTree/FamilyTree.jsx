import React from 'react';
import Garndpa from './Garndpa';
import './FamilyTree.css'
const FamilyTree = () => {
    const assets='Land';
    return (
        <div className='family-tree'>
            <h2>Family tree</h2>
            <Garndpa assets={assets}></Garndpa>
        </div>
    );
};

export default FamilyTree;