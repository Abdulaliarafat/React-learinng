import React, { use } from 'react';

const UserDitails2 = ({userPromise}) => {
    const {name,username}=use(userPromise)
   console.log('user details 2',name,username)
    return (
        <div>
            <p><small>User name:{username}</small></p>
            <p>{name}</p>
        </div>
    );
};

export default UserDitails2;