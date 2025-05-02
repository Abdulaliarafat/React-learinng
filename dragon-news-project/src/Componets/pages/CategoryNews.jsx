import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id}=useParams()
    console.log(id)
    return (
        <div>
            <h1 className='font-bold text-center'>Category news</h1>
        </div>
    );
};

export default CategoryNews;