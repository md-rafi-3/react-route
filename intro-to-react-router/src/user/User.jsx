import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../components/userDetails2/UserDetails2';

const User = ({user}) => {
    const [visitHome,setVisitHome]=useState(false)
    const {id,name,email,phone}=user;
    const [showInfo,setShowInfo]=useState(false)
    const location=useLocation()
    console.log(location)
    const userPromise=fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json())
    
    if(visitHome){
        return <Navigate to='/'></Navigate>
    }

   const usersStyle={
    border:'2px solid yellow',
    borderRadius:'20px',
    padding:'10px',
    margin:'10px'
   }
    return (
        <div style={usersStyle}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show details</Link>
             <button onClick={()=>setShowInfo(!showInfo)}>{showInfo?"Hide":"Detail"}info</button>
             {
                showInfo&&<Suspense fallback={<span>Loading</span>}>
                   <UserDetails2 userPromise={userPromise}></UserDetails2>
                </Suspense>
                
             }
             <button onClick={()=>setVisitHome(true)}>Visit Home</button>
        </div>
    );
    
};

export default User;