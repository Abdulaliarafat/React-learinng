import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SIdeBar from '../SideBar/SIdeBar';
import './Root.css'
const Root = () => {
    return (
        <div className='center'>
            <Header></Header>
            <div className='root-main'>
                <SIdeBar></SIdeBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;