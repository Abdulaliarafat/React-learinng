import React from 'react';
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router';


const Book = ({SingleBook}) => {
    // console.log(SingleBook)
    const{bookName,image,bookId,publisher,rating,category,tags,yearOfPublishing }= SingleBook;
    return (
      <Link to={`/bookDetails/${bookId}`}>
          <div className='md:ml-0 ml-6.5'>
            <div className="card bg-base-100 w-90  p-6 shadow-xl ">
  <figure className='p-4 w-2/3 mx-auto bg-slate-300 rounded-2xl '>
    <img className=' h-40 rounded-md '
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-between items-center'>
      {
        tags.map((tag,index)=><button key={index} className='bg-slate-200  font-semibold rounded-xl p-1 shadow-2xl'>{tag}</button>)
      }
    </div>
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p> Book By : {publisher}</p>
    <div className='border-b-2 border-dashed border-gray-200  my-2'></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline bg-pink-500 text-white">{category}</div>
      <div className="badge badge-outline bg-pink-500 text-white">{rating}<FaStar fill='white'/>
      </div>
    </div>
  </div>
</div>
        </div>
      </Link>
      
    );
};

export default Book;