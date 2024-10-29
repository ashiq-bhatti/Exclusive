import React from "react";
import { NavLink, Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { PiHeartThin } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";

function NavBar() {
  return (
    <>
      <div className="outerNav h-20 w-full border-b border-gray-300">
        <div className="innerNav w-[84%]  h-full m-auto flex justify-between items-center">
          <div className="logo ">
            <Link to="/" className="font-bold text-2xl">
              Exclusive
            </Link>
          </div>

          <div className="navLinks">
            <ul className="flex justify-between text-lg items-center space-x-10">
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

          <div className="searchCart flex justify-around items-center space-x-5">
            <div className="searchBox  bg-gray-100 flex px-2 rounded-md items-center space-x-6  ">
                <form className="flex items-center ">
                  <input className="bg-gray-100 border-0" type="text" placeholder="What are you looking for? " />
                  <button type="submit">
                    {" "}
                    <CiSearch className="text-2xl ml-4 " />
                  </button>
                </form>
            </div>
            <div>
              {" "}
            <Link to='/wishlist'><PiHeartThin className="text-3xl cursor-pointer" /></Link>  
            </div>
            <div>
              {" "}
              <IoCartOutline className="text-3xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
