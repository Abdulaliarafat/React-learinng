import React from 'react';
import book from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='flex justify-around items-center p-15 bg-slate-300 mb-5 mt-5 rounded-lg'>
            <div>
                <h1 className='font-bold text-4xl'>Books to freshen up <br /> your bookshelf</h1>
                <button className=' mt-8 bg-green-500 text-md text-white  rounded-md font-bold px-2 py-2'>View The List</button>
            </div>
            <div>
                <img className='w-65 h-65 rounded-2xl' src={book} alt="" />
            </div>
        </div>
    );
};

export default Banner;