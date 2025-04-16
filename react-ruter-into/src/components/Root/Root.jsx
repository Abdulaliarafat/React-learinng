import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SIdeBar from '../SideBar/SIdeBar';
import './Root.css'
const Root = () => {
    const navigation=useNavigation()
    const isbnavigating=Boolean(navigation.location )
    return (
        <div className='center'>
            <Header></Header>
            <div className='root-main'>
                <SIdeBar></SIdeBar>
                {isbnavigating && <span>Loading..................</span>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;