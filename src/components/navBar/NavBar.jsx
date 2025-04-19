import React, { useState } from "react";
import Link from "./LInk";
import { Menu, X } from "lucide-react";

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map((rout) => (
    <Link key={rout.id} rout={rout}></Link>
  ));
  return (
    <nav className="flex justify-between mx-10 mt-4">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden "></Menu>
        )}
        <ul
          className={`md:hidden absolute duration-1000 ${
            open ? "top-8" : "-top-40"
          } bg-amber-200 text-black`}
        >
          {links}
        </ul>

        <h3>My Navbar</h3>
      </span>
      <ul className="md:flex hidden">{links}</ul>
      {/* <ul className="flex">
        {navigationData.map((rout) => (
          <li className="mr-10">
            <a href={rout.path}>{rout.name}</a>
          </li>
        ))}
      </ul> */}
      {/* <ul className="flex">
        <li className="mr-10">
          <a href="/home">Home</a>
        </li>
        <li className="mr-10">
          <a href="/about">About</a>
        </li>
        <li className="mr-10">
          <a href="/blog">Blog</a>
        </li>
      </ul> */}
      <button>Sign In</button>
    </nav>
  );
};

export default NavBar;
