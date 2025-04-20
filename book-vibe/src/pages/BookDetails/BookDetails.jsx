import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Utilities/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import { ToastContainer, toast } from 'react-toastify';


const BookDetails = () => {
    const {id}=useParams();
    const bookid=parseInt(id);
    const data=useLoaderData();
    const oneBook=data.find(book=>book.bookId === bookid)
    console.log(oneBook)
    const handleMarkAsRead=(id)=>{
      // MySwal.fire({
      //   title: "Good job!",
      //   text: "You clicked the button!",
      //   icon: "success"
      // })
      toast("Wow so easy!");
       addToStoreDB(id)
    }
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 mb-5'>
            <div className='p-15 bg-slate-300 rounded-2xl flex flex-col'>
                <img className='h-[500px] w-[400] rounded-lg flex-1 object-cover' src={oneBook.image} alt="image" />
            </div>
            <div className='p-4 space-y-3 '>
              <h3 className='font-bold text-3xl mb-2 text-red-400'>{oneBook.bookName}</h3>
              <p className='text-blue-500'>Book by:{oneBook.author}</p>
              <br />
              <div className='border-b-2 border-t-2 border-gray-200 pt-2 pb-2'><button className=' p-2 bg-slate-200 rounded-xl font-semibold'>{oneBook.category}</button></div>
              <p className='p-2'>Review :<span className='font-light text-sm'>{oneBook.review}</span></p>
              <div className='flex justify-baseline space-x-2 border-b-2 border-t-2 border-gray-200 p-3'>
                {
                    oneBook.tags.map((tag,index)=>
                        <p key={index}>{tag}</p>
                    )
                }
              </div>
              <div className='space-y-2'>
                <p className='font-semibold text-green-500'>Page no :   {oneBook.totalPages}</p>
                <p className='font-semibold text-green-500'>publisher :   {oneBook.publisher}</p>
                <p className='font-semibold text-green-500'>Year of publishing : {oneBook.yearOfPublishing}</p>
                <p className='font-semibold text-green-500'>Rating :   {oneBook.rating}</p>
              </div>
              <div className='space-x-5 mt-8 '>
                <button onClick={()=>handleMarkAsRead(id)} className='px-3 py-2 bg-blue-400 rounded-xl font-medium text-white'>Mark as Read</button>
                <button  className='px-3 py-2 bg-blue-400 rounded-xl font-medium text-white'>Add to Wishlist</button>
              </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;