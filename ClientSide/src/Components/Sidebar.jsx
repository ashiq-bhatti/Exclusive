import React, { useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCategoryClick = (category) => {
    navigate(`/allListedProducts?category=${category}`);
    setIsSidebarOpen(false); 
  };
       
  return (
    <>
      {/* Toggle Button for Mobile */}
      <div className="flex items-center md:hidden p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-2xl focus:outline-none"
        >
          {isSidebarOpen ? <IoClose /> : <FiMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:shadow-none`}
      >
        <div className="menue border-r text-lg pl-10 md:pl-0 pr-6 h-full overflow-y-auto">
          <ul className="mt-10">
            <li className="flex items-center">
              <button
                onClick={() => handleCategoryClick("all")}
                className="w-full text-left"
              >
                All Products
              </button>
            </li>

            <li className="flex items-center">
              <button
                onClick={() => handleCategoryClick("Woman Fashion")}
                className="flex justify-between items-center w-full"
              >
                <p className="w-full text-left">Women's Fashion</p>
                <RiArrowDropRightLine className="text-3xl" />
              </button>
            </li>
            <li className="flex items-center">
              <button
                onClick={() => handleCategoryClick("Men Fashion")}
                className="flex justify-between items-center w-full"
              >
                <p className="w-full text-left">Men's Fashion</p>
                <RiArrowDropRightLine className="text-3xl" />
              </button>
            </li>

            <li className="flex items-center">
              <button
                onClick={() => handleCategoryClick("Electric")}
                className="w-full text-left"
              >
                Electronics
              </button>
            </li>
            <li className="flex items-center">
              <button
                onClick={() => handleCategoryClick("Home LifeStyle")}
                className="w-full text-left"
              >
                Home & Lifestyle
              </button>
            </li>
            <li className="flex items-center">
              <button
                onClick={() => handleCategoryClick("Medicine")}
                className="w-full text-left"
              >
                Medicine
              </button>
            </li>
            <li className="flex items-center">
              <button
                onClick={() => handleCategoryClick("Sport Outdoor")}
                className="w-full text-left"
              >
                Sport & Outdoor
              </button>
            </li>
            <li className="flex items-center">
              <button
                onClick={() => handleCategoryClick("Boy Toyes")}
                className="w-full text-left"
              >
                Boy's & Toyes
              </button>
            </li>
            <li className="flex items-center">
              <button
                onClick={() => handleCategoryClick("Groceries Pets")}
                className="w-full text-left"
              >
                Groceries & Pets
              </button>
            </li>
            <li className="flex items-center">
              <button
                onClick={() => handleCategoryClick("Health Beauty")}
                className="w-full text-left"
              >
                Health & Beauty
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
