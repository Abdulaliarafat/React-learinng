import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-3 py-6 '> 
           <img className='w-96 text-center' src={logo} alt="" />
           <p> Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;