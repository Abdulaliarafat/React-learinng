import React, { Suspense } from 'react';
import Category from './Category';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={
               <div>
                 <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
                <span className="loading loading-ball loading-xl"></span>
               </div>
                }>
            <Category></Category>
            </Suspense>
        </div>
    );
};

export default LeftAside;