import React, { useContext, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { PiHeartThin } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { FiAlignJustify } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import AccountObjects from "./AccountObjects";
import MobileNavLink from "./MobileNavLink";
import { StoreContext } from "../Context/StoreContext";

function NavBar({ searchProduct, setSearchProduct }) {
  const { token } = useContext(StoreContext);
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [showAccountObjects, setshowAccountObjects] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchProduct(value);
  };

  const handleSearchSubmit = () => {
    if (searchProduct.trim()) {
      navigate(`/allListedProducts?search=${searchProduct}`);
    }
  };
  return (
    <>
      <div className="outerNav h-20 w-full border-b border-gray-300">
        <div className="innerNav w-[90%] max-w-7xl h-full m-auto flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="font-bold text-2xl">
              Exclusive
            </Link>
          </div>

          {/* Nav Links */}
          <div className="navLinks hidden md:flex">
            <ul className="flex text-lg items-center space-x-10">
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
              <li>
                <NavLink to="/allListedProducts">All Products</NavLink>
              </li>
            </ul>
          </div>
          {/* Search, Wishlist, and Cart */}
          <div className="searchCart flex items-center space-x-5">
            {/* Search Box */}
            <div className="searchBox hidden lg:flex bg-gray-100 px-2 rounded-md items-center space-x-3">
              <input
                className="bg-gray-100 border-0 outline-none"
                type="text"
                placeholder="What are you looking for?"
                onChange={handleSearch}
                value={searchProduct}
              />
              <button type="button" onClick={handleSearchSubmit}>
                <CiSearch className="text-2xl ml-2" />
              </button>
            </div>

            {/* Icons */}
            <CiSearch className="text-2xl lg:hidden" />
            <Link to="/wishlist">
              <PiHeartThin className="text-3xl cursor-pointer" />
            </Link>
            <div onClick={() => navigate("/cart-page")}>
              <div className="w-4 h-4 cursor-pointer bg-customRed rounded-full text-center absolute ml-4 mb- z-10 text-white"></div>
              <IoCartOutline className="text-3xl cursor-pointer" />
            </div>
            {token ? (
              <VscAccount
                onClick={() => setshowAccountObjects(!showAccountObjects)}
                className="text-3xl cursor-pointer"
              />
            ) : null}
          </div>
          {/* Hamburger Menu */}
          <FiAlignJustify
            onClick={() => setShowNavLinks(!showNavLinks)}
            className="text-3xl cursor-pointer md:hidden"
          />
        </div>
        {showAccountObjects ? <AccountObjects /> : null}
      </div>
      {showNavLinks ? <MobileNavLink /> : null}
    </>
  );
}

export default NavBar;
