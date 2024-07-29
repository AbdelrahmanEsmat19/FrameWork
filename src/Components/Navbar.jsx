import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [navbar, setNavbar] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  });

  return (
    <div
      className={`bg-[#2c3e50] transition-all w-full duration-700 md:w-full z-50  lg:px-28 fixed lg:w-full  text-white items-center transition duration-300 ease-in-out ${
        navbar ? "p-6" : "p-3"
      } flex justify-between`}
    >
      <Link to={""}>
        <h1 className="text-[12px] pe-5 line lg:text-3xl">START FRAMEWORK </h1>
      </Link>
      <div>
        <ul className="flex lg:space-x-9 space-x-4 pe-1 font-bold">
          <li>
            <NavLink to={"/about"}>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio"}>PORTFOLIO</NavLink>
          </li>
          <li>
            <NavLink to={"contact"}>CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}