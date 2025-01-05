import React from "react";
import { Link } from "react-router-dom";
import { RiFunctionAddFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { FaBorderAll } from "react-icons/fa";

const SideBar = () => {
  return (
    <div>
      <div className=" bg-slate-900 p-8 flex-col space-y-4 h-full mr-10">
        <div className="flex items-center space-x-3 text-white">
          <MdDashboard className="text-3xl " />
          <Link to="/admin">DashBoard</Link>
        </div>
        <div className="flex items-center space-x-3 text-white">
          <RiFunctionAddFill className="text-3xl " />

          <Link to="/admin/all-products">All Products</Link>
        </div>

        <div className="flex items-center space-x-3 text-white">
          <RiFunctionAddFill className="text-3xl " />
          <Link to="/admin/product-add">Add Products</Link>
        </div>
        <div className="flex items-center space-x-3 text-white">
          <FaBorderAll className="text-3xl " />
          <Link to="/admin/order">All Orders</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
