import React from 'react';
import Navber from '../Componets/Navber';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
          <header className='w-11/12 mx-auto shadow-md px-2 sticky -top-3'>
          <Navber></Navber>
          </header>
          <main className='w-11/12 mx-auto py-2'>
         <Outlet></Outlet>
          </main>
        </div>
    );
};

export default AuthLayout;