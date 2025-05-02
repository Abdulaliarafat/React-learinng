import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Componets/Header';
import LateastNews from '../Componets/LateastNews';
import Navber from '../Componets/Navber';
import Home from '../Componets/pages/Home';
import LeftAside from '../Componets/HomeLayout/LeftAside';
import RightAside from '../Componets/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-2'>
                    <LateastNews></LateastNews>
                </section>
                <nav className='w-11/12 mx-auto my-2'>
                    <Navber></Navber>
                </nav>
                </header>
            <main className='w-11/12 mx-auto my-2  grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'><Outlet></Outlet></section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;