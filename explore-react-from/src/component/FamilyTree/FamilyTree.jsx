import React, { createContext, useState } from 'react';
import Garndpa from './Garndpa';
import './FamilyTree.css'
export const AssetContext=createContext('');
export const MoneyContext=createContext(0)
const FamilyTree = () => {
    const [money,setMoney]=useState(0)
    const assets='Land';
    const newAssets="Gold";
    return (
        <div className='family-tree'>
            <h2>Family tree</h2>
            <h4>Total family money : {money}</h4>
            <MoneyContext value={[money,setMoney]}>
            <AssetContext.Provider value={newAssets}>
            <Garndpa assets={assets}></Garndpa>
            </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;