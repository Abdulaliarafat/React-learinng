import React, { Suspense } from 'react';
import Book from '../../components/SingleBook/Book';

const Books = ({Data}) => {
    return (
        <div className=' mb-10'>
            <h1 className='font-bold text-3xl text-center mb-3'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Suspense fallback={<p>Loading.......</p>}>
                {
                  Data.map(SingleBook=><Book SingleBook={SingleBook} key={SingleBook.bookId}></Book>)
                }
            </Suspense>
            </div>
        </div>
    );
};

export default Books;
