import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext)
    return (
        <div className='bg-sky-100 max-w-sm mx-auto text-center mt-10 p-5 rounded-2xl'>
         <p>{user.email}</p>
        </div>
    );
};

export default Profile;