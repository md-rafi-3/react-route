import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
   const users=use(usersPromise);
   console.log('users2 suspance data load', users)
    return (
        <div>
            <h2>This is users 2</h2>
        </div>
    );
};

export default Users2;