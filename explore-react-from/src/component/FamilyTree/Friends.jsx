import React, { useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Friends = () => {
    const [usetaka,setUseTaka]=useContext(MoneyContext)
    return (
        <div>
            <h3>Friends</h3>
            <p>Family got : {usetaka}</p>
        </div>
    );
};

export default Friends;