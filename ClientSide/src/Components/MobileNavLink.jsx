import React from "react";
import { NavLink } from "react-router-dom";

function MobileNavLink() {
  return (
    <>
      <div className="navLinks block md:hidden  bg-slate-950 text-white   ">
        <ul className="flex-col  text-lg items-center text-center space-y-8 py-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/register">Sign Up</NavLink>
            
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNavLink;
