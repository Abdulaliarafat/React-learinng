import React from 'react';
import Navber from '../../components/NavBer/Navber';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
        <h1 className='text-5xl text-center'>Email password auth</h1>
        <Navber></Navber>
        <Outlet></Outlet>
        </div>
    );
};

export default Root;