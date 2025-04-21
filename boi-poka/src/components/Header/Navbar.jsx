import { RiMenu3Fill } from "react-icons/ri";
import React, { useState } from 'react';
import './navbar.css'
import { Link } from "react-router";

const Navbar = () => {
  const [open,setOpen]=useState(false);
    const links=<>
    <Link to="/"><li className='m-2 btn-ghost btn text-lg font-semibold'>Home</li></Link>
    <Link to="/readList"><li className='m-2 btn-ghost btn text-lg font-semibold'>Listed Books</li></Link>
    <li className='m-2 btn-ghost btn text-lg font-semibold'>Pages to Read</li>
    </>
    return (
        <div className="flex justify-between items-center px-7 py-3">
           <div className="flex items-center gap-3">
           <span className="md:hidden" onClick={()=>setOpen(!open)}><RiMenu3Fill size={25} /></span>
           <ul  className={`md:hidden absolute  duration-1000  menu bg-base-200 rounded-box ${
              open ? "top-14" : "-top-50"
            }`}>
              {links}

           </ul>
           <h1 className="text-2xl font-bold">Book Vibes</h1>
           </div>
           <ul className="md:flex hidden  md:gap-5 md:menu-horizontal menu ">
            {links}
           </ul>

           <div className="flex gap-5">
            <button className="btn  bg-[#23be0a] text-white">Sign In</button>
            <button className="btn bg-[#59c6d2] text-white">Sign Up</button>
           </div>
        </div>
    );
};

export default Navbar;