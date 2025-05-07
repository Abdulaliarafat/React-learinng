import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Componets/Header';
import LateastNews from '../Componets/LateastNews';
import Navber from '../Componets/Navber';
import LeftAside from '../Componets/HomeLayout/LeftAside';
import RightAside from '../Componets/HomeLayout/RightAside';
import Loading from '../Componets/pages/Loading';

const HomeLayout = () => {
    const {state}=useNavigation()
    // console.log(state)
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
            <main className='w-11/12 mx-auto my-15  grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-5 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>{state=='loading'? <Loading></Loading>:<Outlet></Outlet>}</section>
                <aside className='col-span-3  sticky top-5 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;