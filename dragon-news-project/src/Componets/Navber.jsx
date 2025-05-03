import React, { use } from 'react';
import { Link, NavLink} from 'react-router';
import usericon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navber = () => {
    const {user,logOut}=use(AuthContext);
    const handleLogout=()=>{
        logOut().then(()=>{
            alert('Log out successfull')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className='flex
        justify-between items-center p-2'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-5 text-accent mt-3 ">
                <NavLink className='hover:bg-sky-300 hover:text-white p-2 rounded-lg' to='/'>Home</NavLink>
                <NavLink className='hover:bg-sky-300 hover:text-white p-2 rounded-lg' to='About'>About</NavLink>
                <NavLink className='hover:bg-sky-300 hover:text-white p-2 rounded-lg' to='Career'>Career</NavLink>
            </div>
            <div className="log-in flex gap-5 mt-3">
                <img className='' src={usericon} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn border-none btn-primary px-5 hover:bg-sky-300 hover:text-white p-2 rounded-lg '>LogOut</button>:<Link to='/auth/login' className='btn border-none btn-primary px-5 hover:bg-sky-300 hover:text-white p-2 rounded-lg '>Log In</Link>
                }
            </div>
        </div>
    );
};

export default Navber;