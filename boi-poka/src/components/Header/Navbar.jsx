import { RiMenu3Fill } from "react-icons/ri";
import React, { useState } from 'react';

const Navbar = () => {
  const [open,setOpen]=useState(false);
    const links=<>
    <li className='m-2'>Home</li>
    <li className='m-2'>Listed Books</li>
    <li className='m-2'>Pages to Read</li>
    </>
    return (
        <div className="flex justify-between items-center px-7">
           <div className="flex items-center gap-3">
           <RiMenu3Fill size={25} />
           <h1>Book Vibes</h1>
           </div>
           <ul className="md:flex hidden">
            {links}
           </ul>

           <div className="flex gap-5">
            <button>Sign In</button>
            <button>Sign Up</button>
           </div>
        </div>
    );
};

export default Navbar;