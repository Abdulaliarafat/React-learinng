import React from 'react';
import Link from './link';

const navigationData = [
    {
      id: 1,
      name: "Home",
      path: "/home"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Portfolio",
      path: "/portfolio"
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact"
    }
  ];
  
const Navber = () => {
    return (
        <nav>
            <ul className='flex'>
            {
                navigationData.map(route=><Link key={route.id} route={route}></Link>)
            }
            </ul>

             {/* <ul className='flex'>
            //     <li className='mr-10'><a href="/">Home</a></li>
            //     <li className='mr-10'><a href="/about">About</a></li>
            //     <li className='mr-10'><a href="/blog">blog</a></li>
            // </ul> */}

        </nav>
    );
};

export default Navber;