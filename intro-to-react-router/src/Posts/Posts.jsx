import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const Posts=useLoaderData();

    return (
        <div>
            <h2>Thease is my posts: {Posts.length}</h2>
            <div>
                {
                    Posts.map(post=><Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;