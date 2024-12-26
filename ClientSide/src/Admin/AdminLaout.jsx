import React from "react";
import { Link, Outlet } from "react-router-dom";
import SideBar from "./AdminDashbord/Components/SideBar";
import { LuLogOut } from "react-icons/lu";
<LuLogOut />;
function AdminLayout() {
  return (
    <>
      <div className="header bg-slate-300 border-slate-900 border-b-2 flex justify-between p-2">
        <Link to="/admin">Logo</Link>
        <div className="logout">
          <LuLogOut className="text-2xl " />
        </div>
      </div>

      <div className="sideBar-Outlet-section   flex">
        <SideBar />
        <div className="ml-10">
          <div className="mt-10"></div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
