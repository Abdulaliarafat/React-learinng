import React from 'react';
import Navber from '../../components/NavBer/Navber';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
        <Navber></Navber>
        <Outlet></Outlet>
        </div>
    );
};

export default Root;