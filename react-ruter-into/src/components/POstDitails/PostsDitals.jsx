import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostsDitals = () => {
    const postData=useLoaderData()
    console.log(postData)
    const navigate=useNavigate()
    return (
        <div>
            <h3>{postData.title}</h3>
            <p>{postData.body}</p>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostsDitals;