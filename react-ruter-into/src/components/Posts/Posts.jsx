import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../post/Post';

const Posts = () => {
    const posts=useLoaderData()
    // console.log(posts)
    return (
        <div>
            <h3>all posts here:{posts.length}</h3>
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;