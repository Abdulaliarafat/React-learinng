import React, { useState } from 'react';
import Link from './link';
import { Menu, X } from 'lucide-react';

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
    const [open,setOpen]=useState(false)
 const links= navigationData.map(route=><Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between items-center mx-10 mt-4'>

            <div className='flex space-x-4 ' onClick={()=>setOpen(!open)}>

           {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
           
           <ul className={`md:hidden absolute duration-700 bg-amber-500 ${open ? 'top-9' : '-top-40'}`}>
           {
            links
           }
           </ul>
            <h3 className='text-xl font-bold'>My Navber</h3>  
            </div>
            <ul className='hidden md:flex'>
            {
                links
            }
            </ul>

             {/* <ul className='flex'>
            //     <li className='mr-10'><a href="/">Home</a></li>
            //     <li className='mr-10'><a href="/about">About</a></li>
            //     <li className='mr-10'><a href="/blog">blog</a></li>
            // </ul> */}
         <button>Sing In</button>
        </nav>
    );
};

export default Navber;