import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";


const SocalLogIn = () => {
    return (
        <div className=''>
            <h1 className='font-bold text-center mb-5'>Login with</h1>
            <div className='space-y-4 text-center'>
                <button className='btn btn-outline btn-secondary w-full'><FcGoogle size={25}/>
                Login with Google</button>
                <button className='btn  btn-outline  btn-primary w-full'><FaGithub size={25} />
                Login with Github</button>
            </div>
        </div>
    );
};

export default SocalLogIn;