import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiFunctionAddFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { FaBorderAll, FaServer } from "react-icons/fa";
import { TbMessageFilled } from "react-icons/tb";
import { FaBars } from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sideBar w-full md:w-60 bg-slate-900 text-white p-4 md:p-8">
      {/* Hamburger icon for mobile */}
      <div className="md:hidden mb-4">
        <button onClick={toggleSidebar}>
          <FaBars className="text-2xl text-white" />
        </button>
      </div>

      {/* Sidebar links */}
      <div className={`md:block ${isOpen ? "block" : "hidden"}`}>
        <div className="flex items-center space-x-3 py-3">
          <MdDashboard className="text-3xl" />
          <Link to="/admin" className="text-white">
            DashBoard
          </Link>
        </div>

        <div className="flex items-center space-x-3 py-3">
          <FaServer className="text-3xl" />
          <Link to="/admin/all-products" className="text-white">
            All Products
          </Link>
        </div>

        <div className="flex items-center space-x-3 py-3">
          <RiFunctionAddFill className="text-3xl" />
          <Link to="/admin/product-add" className="text-white">
            Add Products
          </Link>
        </div>

        <div className="flex items-center space-x-3 py-3">
          <FaBorderAll className="text-3xl" />
          <Link to="/admin/order" className="text-white">
            All Orders
          </Link>
        </div>

        <div className="flex items-center space-x-3 py-3">
          <TbMessageFilled className="text-3xl" />
          <Link to="/admin/message" className="text-white">
            User Message
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
