import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {
    const[useMoney,setUseMoney]=use(MoneyContext)
    return (
        <div>
            <h3>Brother</h3>
            <button onClick={()=>setUseMoney(useMoney+1000)}>ADD 1000 TK</button>
        </div>
    );
};

export default Brother;