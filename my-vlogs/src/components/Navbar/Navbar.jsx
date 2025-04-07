import React from 'react';
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineLaptopChromebook } from "react-icons/md";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-md">
  <div className="flex-1">
    <a className="btn btn-ghost font-bold text-2xl text-green-600">Web study</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div className="flex justify-center items-center gap-10">
        <div><IoBookSharp  color='green' size={40} /></div>
        <div><MdOutlineLaptopChromebook color='green' size={40} /></div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;