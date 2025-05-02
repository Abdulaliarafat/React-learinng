import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'
const Navber = () => {
    return (
        <div className='flex
        justify-between items-center'>
            <div className=""></div>
            <div className="nav flex gap-5 text-accent ">
                <NavLink className='hover:bg-sky-300 hover:text-white p-2 rounded-lg' to='/'>Home</NavLink>
                <NavLink className='hover:bg-sky-300 hover:text-white p-2 rounded-lg' to='About'>About</NavLink>
                <NavLink className='hover:bg-sky-300 hover:text-white p-2 rounded-lg' to='Career'>Career</NavLink>
            </div>
            <div className="log-in flex gap-5">
                <img className='' src={user} alt="" />
                <button className='btn border-none btn-primary px-5 hover:bg-sky-300 hover:text-white p-2 rounded-lg '>Log In</button>
            </div>
        </div>
    );
};

export default Navber;