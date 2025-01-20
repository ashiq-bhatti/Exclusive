import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SideBar from "./AdminDashbord/Components/SideBar";
import { LuLogOut } from "react-icons/lu";
import toast from "react-hot-toast";
import { StoreContext } from "../Context/StoreContext";

<LuLogOut />;
function AdminLayout() {
    const { setToken } = useContext(StoreContext); 
  
  const navigate = useNavigate(); 
  const handleLogOut =()=>{
    localStorage.removeItem('token');
    setToken('')
    toast.success('Logged Out Successfully');
    navigate('/login');
    
  }
  return (
    <>
      <div className="header bg-slate-300 border-slate-900 border-b-2 flex justify-between py-3 px-8">
        <Link to="/admin" className="text-xl font-semibold">Exclusive</Link>
        <div className="logout">
          <button onClick={handleLogOut}>
          <LuLogOut className="text-2xl " />
          </button>
        </div>
      </div>

      <div className="sideBar-Outlet-section   flex">
        <SideBar />
          <div className="my-10 ml-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
