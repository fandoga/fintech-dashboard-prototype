import { useGSAP } from "@gsap/react";
import { navlist } from "../constants.js";
import { animateWithGsap } from "../animations/navbarAnim.js";
import React from "react";

const Navbar = () => {
  useGSAP(() => {
    animateWithGsap();
  }, []);

  return (
    <nav id="navbar" className="fixed top-0 left-0 h-full w-19 bg-dark pt-6">
      <ul className="flex flex-col justify-center items-center gap-4 p-2">
        {navlist.map((link) => (
          <li
            className="nav-item w-[50px] h-[50px] cursor-pointer hover:shadow-s hover:scale-110 shadow-md flex justify-center items-center bg-light rounded-2xl"
            key={link.id}
          >
            {link.src}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
