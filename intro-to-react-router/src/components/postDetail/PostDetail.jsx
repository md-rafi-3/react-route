import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const post=useLoaderData()
    console.log(post)
    let navigate=useNavigate()
    
    return (
        <div>
            <h3>This is post details</h3>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={()=> navigate(-1)}>Back</button>
        </div>
    );
};

export default PostDetail;