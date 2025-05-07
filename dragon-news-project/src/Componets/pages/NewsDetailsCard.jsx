import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news)

    return (
        <div className='space-y-4'>
            <h1 className='font-bold text-2xl'>News details</h1>
          <img className='w-full h-[350px] rounded-md object-cover' src={news.image_url} alt="" />
          <h1 className='font-semibold text-xl'>{news.title}</h1>
          <p className='text-accent font-normal'>{news.details}</p>
          <Link className='btn bg-secondary text-white' to={`/category/${news.category_id}`}><FaArrowLeft></FaArrowLeft> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;