import React, { use } from 'react';
import { NavLink } from 'react-router';
 
const categoryPromise=fetch('/categories.json').then(res=>res.json())

const Category = () => {
const categories=use(categoryPromise)
// .log(categories)
    return (
        <div>
            <h1 className='font-bold text-center'>All Caterogy</h1> 
            <div className='grid grid-cols-1 mt-5 gap-4'>
                {
                    categories.map(categoty=><NavLink className={'btn border-none bg-base-100 hover:bg-sky-300 hover:text-white font-semibold text-accent'} 
                        to={`category/${categoty.id}`} 
                         key={categoty.id}>{categoty.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Category;