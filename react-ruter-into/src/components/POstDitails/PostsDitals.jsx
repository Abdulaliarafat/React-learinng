import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PostsDitals = () => {
    const postData=useLoaderData()
    // console.log(postData)
    const navigate=useNavigate()
    // const {PostId}=useParams()
    // console.log(PostId)
    const params=useParams()
    console.log(params.PostId)
    return (
        <div>
            <h3>{postData.title}</h3>
            <p>{postData.body}</p>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostsDitals;