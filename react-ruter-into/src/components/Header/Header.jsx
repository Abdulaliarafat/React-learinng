import React from 'react';
import { NavLink } from 'react-router';
import './header.css'
const Header = () => {
    return (
        <div>
            <h1>this is header</h1>
            <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Mobiles'>Mobiles</NavLink>
            <NavLink to='/Laptops'>Laptops</NavLink>
            <NavLink to='/Users'>Users</NavLink>
            <NavLink to='/Users2'>Users2</NavLink>
            </nav>
        </div>
    );
};

export default Header;