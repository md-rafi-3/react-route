import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id,title}=post;
     let navigate=useNavigate()
    const handlenavigate=()=>{
       navigate(`/posts/${id}`)
    }
    return (
        <div style={{border:"2px solid red"}}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>
            <button>Show details</button></Link>

            <button onClick={handlenavigate}>Post details :{id}</button>
        </div>
    );
};

export default Post;