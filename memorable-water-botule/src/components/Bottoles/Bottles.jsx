import React, { use } from 'react';

const Bottles = ({bottlesPromise}) => {
    const bottle = use(bottlesPromise);
    console.log(bottle)
    return (
        <div>
            
        </div>
    );
};

export default Bottles;