import React, { useState } from "react";
import Link from "./link/Link";
import { Menu, CircleX } from "lucide-react";

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const links = navItems.map((route) => <Link route={route} key={route.name}></Link>);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="flex justify-between mx-10  items-center mt-4 md:mt-0">
        <span className="flex gap-2" onClick={() => setOpen(!open)}>
          {open ? (
            <CircleX className="md:hidden" />
          ) : (
            <Menu className="md:hidden"></Menu>
          )}

          <ul
            className={`md:hidden absolute bg-amber-200 duration-1000  p-3 text-black ${
              open ? "top-12" : "-top-40"
            }`}
          >
            {links}
          </ul>

          <h3>My Navbar</h3>
        </span>

        <ul className="md:flex hidden ">{links}</ul>

        <button>Sign in</button>
        {/* <ul className="flex ">
          <li className="mr-10">
            <a href="/">Home</a>
          </li>
          <li className="mr-10">
            <a href="/">About</a>
          </li>
          <li className="mr-10">
            <a href="/">Blog</a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Navbar;
