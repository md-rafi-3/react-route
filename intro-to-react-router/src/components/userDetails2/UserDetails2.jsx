import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
 const {name,username}=use(userPromise);
    return (
        <div>
            <p><small>User NAme: {username}</small></p>
            <p>{name}</p>
        </div>
    );
};

export default UserDetails2;