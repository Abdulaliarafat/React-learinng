import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utilities/addToDB';
import Book from '../../components/SingleBook/Book';

const ReadLists = () => {
  const[readList,setReadList]=useState([])
  const [sort,setSort]=useState('')
  const data=useLoaderData()
  
  useEffect(()=>{
    const storedBookData=getStoreBook();
    const convertedID=storedBookData.map(id=>parseInt(id))
    const myReadList=data.filter(book=>convertedID.includes(book.bookId))
    setReadList(myReadList)
    // console.log(myReadList)
  },[])
  const handleShort=(type)=>{
       setSort(type)
       if(type === 'Pages'){
         const sortedPages=[...readList].sort((a,b)=>a.yearOfPublishing-b.yearOfPublishing    )
         setReadList(sortedPages)
       }
       
       if(type === 'Rating'){
         const sortedRating=[...readList].sort((a,b)=>a.rating-b.rating)
         setReadList(sortedRating)
       }
       
  }
    return (
        <div className=' mt-6 mb-5'>
          <details className="dropdown flex flex-col justify-center items-center ">
  <summary className="btn m-1 text-white font-bold bg-green-600">Sort By : {sort ? sort : ''} </summary>
  <ul className="menu dropdown-content  rounded-box z-1 p-2 shadow-sm bg-slate-300 gap-1">
    <li className='bg-pink-400 text-white font-semibold rounded-lg hover:bg-green-500'><a  onClick={()=>handleShort('Pages')}>Pages</a></li>
    <li className='bg-pink-400 text-white font-semibold rounded-lg hover:bg-green-500'><a onClick={()=>handleShort('Rating')}>Rating</a></li>
  </ul>
</details>
  <div className='mt-20'>
  <Tabs>
    <TabList>
      <Tab >Read book List</Tab>
      <Tab >My Wish book lists</Tab>
    </TabList>

    <TabPanel>
      <h2>Read book List {readList.length}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        readList.map(boi=><Book key={boi.bookId} SingleBook={boi} ></Book>)
      }
      </div>
      
    </TabPanel>
    <TabPanel>
      <h2>My Wish book lists</h2>
    </TabPanel>
  </Tabs>
  </div>
        </div>
    );
};

export default ReadLists;