import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookMark,setBookMark]=useState([])
  const [markAsRead,setMarkAsRead]=useState(0)

       const handleBookMark=(blog)=>{
        setBookMark([...bookMark,blog])
       }
       const handleMarkAsRead=(time,id)=>{
            setMarkAsRead(markAsRead+time)
            handleRemoveFromBookMark(id)
       }
       const handleRemoveFromBookMark=(id)=>{
         const remainingBookMark=bookMark.filter(mark=>mark.id !== id);
         setBookMark(remainingBookMark)
       }

  return (
    < >
    <Navbar></Navbar>
  
    <div className="main-container flex text-center gap-5 m-4">
      <div className="left-container w-7/10 shadow-xl">
      <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      </div>
      <div className="right-container w-3/10 shadow-xl m-4">
       <div className='border-b-2 border-dashed border-gray-300 mb-4'>
       <h1 className='font-bold text-xl'> Reading time : {markAsRead}</h1>
       <h1 className='font-bold text-xl mb-1.5'> Bookmarked count : {bookMark.length}</h1>
       </div>

      <div>
      {
        bookMark.map(marked=><p className='bg-pink-500 p-4 m-4 rounded-lg shadow-pink-200 shadow-lg font-bold text-lg text-white'>{marked.title}</p>)
       }
      </div>
     </div>
    </div>
    </>
  )
}

export default App
