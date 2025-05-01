import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './Navber.css'
import { AuthContext } from '../context/AuthContext';
// import { AuthContext } from '../context/AuthContext';

const Navber = () => {
    const {user,signOutUser}=use(AuthContext);
      console.log(user);
    // const user=use(AuthContext)
    // console.log(user)
    const handleSignOut=()=>{
        signOutUser().then(()=>{
            console.log('sign out successfull')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const links = <>
        <li><NavLink className='font-semibold' to='/'>Home</NavLink></li>
        <li><NavLink className='font-semibold' to='/login'>Login</NavLink></li>
        <li><NavLink className='font-semibold' to='/signup'>Signup</NavLink></li>
        <li><NavLink className='font-semibold' to='/dashboard'>Dashboard</NavLink></li>
        { user && <> 
            <li><NavLink className='font-semibold' to='/order'>Order</NavLink></li>
            <li><NavLink className='font-semibold' to='/profile'>Profile</NavLink></li>
        </>}
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-20 text-center p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Email Auth</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
           {user ? <>
                     <p>{user.email}</p>
                    <a onClick={handleSignOut} className="btn">Sign out</a>
                   </>
                : <Link to='/login'>Login</Link>}
            </div>
        </div>
    );
};

export default Navber;