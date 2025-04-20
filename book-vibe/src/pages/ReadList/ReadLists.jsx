import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utilities/addToDB';
import Book from '../../components/SingleBook/Book';

const ReadLists = () => {
  const[readList,setReadList]=useState([])
  const data=useLoaderData()
  console.log(data)
  useEffect(()=>{
    const storedBookData=getStoreBook();
    const convertedID=storedBookData.map(id=>parseInt(id))
    const myReadList=data.filter(book=>convertedID.includes(book.bookId))
    setReadList(myReadList)
  },[])
    return (
        <div className=' mt-6 mb-5'>
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
    );
};

export default ReadLists;