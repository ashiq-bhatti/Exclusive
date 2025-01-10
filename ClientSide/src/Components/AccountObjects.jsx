import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import { IoStarOutline } from "react-icons/io5";

import toast from "react-hot-toast";

const AccountObjects = () => {
  const navigate = useNavigate();
  const { setToken, token } = useContext(StoreContext);

  const LogOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
    toast.success("LogOut successful");
  };

  return (
    <>
      {token ? (
        <div className="parent-box absolute right-16 top-28  w-64 bg-gray-950  opacity-80 rounded-md pl-6 py-4 text-lg z-50 ">
          <ul>
            <Link to={"/account-page"}>
              <li className="flex items-center gap-2 text-white py-3">
                <FiUser className="text-2xl" />
                <p>Manage My Account</p>
              </li>
            </Link>
            <Link to={"/my-order-page"}>
              <li className="flex gap-2 items-center text-white py-3">
                <PiShoppingBagOpenLight className="text-2xl" />
                <p className="text-white">Orders</p>
              </li>
            </Link>
            <Link to={""}>
              <li className="flex gap-2 items-center text-white py-3">
                <ImCancelCircle className="text-2xl" />
                <p className="text-white">Cancellatoins</p>
              </li>
            </Link>
            <Link to={""}>
              <li className="flex gap-2 items-center text-white py-3">
                <IoStarOutline className="text-2xl" />
                <p className="text-white">My Reviews</p>
              </li>
            </Link>
            <li
              className="flex gap-2 items-center text-white py-3 cursor-pointer"
              onClick={LogOut}
            >
              <TbLogout className="text-2xl" />
              <p className="text-white">Log Out</p>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default AccountObjects;
