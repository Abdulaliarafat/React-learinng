import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {title,id}=post
    const navigate=useNavigate()
    const handleNavigate=()=>{
          navigate(`/Posts/${id}`)
    }
    return (
        <div style={{border:"2px solid red",textAlign:'center',padding:'10px'}}>
            <h3>{title}</h3>
            <Link to={`/Posts/${id}`}>
            <button>See Post</button></Link>
            <button onClick={handleNavigate}>Details of :{id}</button>
        </div>
    );
};

export default Post;