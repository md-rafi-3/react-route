import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    console.log(user)

    const params=useParams()
    const {website,name}=user;
    return (
        <div>
           <h3>Users No: 0{params.userId} Details heare</h3>
           <h5>Name:{name}</h5>
           <p>Website:{website}</p>
        </div>
    );
};

export default UserDetails;