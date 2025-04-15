import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const usersData=use(usersPromise)
    // console.log('users2 data loads',usersData)   
    return (
        <div>
            <h2>this is users 2</h2>
        </div>
    );
};

export default Users2;