import React from 'react';
import { FaBookmark } from "react-icons/fa";


const Blog = ({blog,handleBookMark,handleMarkAsRead}) => {
//    const {blog}=props;
  //  console.log(blog)
    return (
        <div className='m-2'>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="photo of subject" />
  </figure>
  <div className="card-body ">
    <div className="author flex justify-around items-center">
        <h3>{blog.author}</h3>
        <img className='w-15' src={blog.author_img} alt="" />
        <button onClick={()=>handleBookMark(blog)}><FaBookmark color='red' size={25}/></button>
    </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="flex">
    {
        blog.hashtags.map(hash=><p className='font-semibold text-md' key={hash}>{hash}</p>)
    }
    </div>
    {/* <p>{blog.hashtags[0]}</p>
    <p>{blog.hashtags[1]}</p>
    <p>{blog.hashtags[2]}</p> */}
    <div className="card-actions justify-end">
        {/* <button className="btn btn-primary">Book mark</button> */}
      <button onClick={()=>handleMarkAsRead(blog.reading_time,blog.id)} className="btn btn-primary"> Mark as read </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;