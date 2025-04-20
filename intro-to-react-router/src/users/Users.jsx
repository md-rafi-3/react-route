import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../user/User';
import './users.css'

const Users = () => {
    const users=useLoaderData();
    console.log(users)

    
    return (
        <div className='grid-layout'>
            <h2>This is users page</h2>
            <div>
                {
                  users.map(user=><User user={user} key={user.id}></User>)  
                }
            </div>
        </div>
    );
};

export default Users;