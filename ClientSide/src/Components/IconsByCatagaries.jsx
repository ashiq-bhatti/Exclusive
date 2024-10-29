import React from "react";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbDeviceWatchStats } from "react-icons/tb";
import { PiCamera } from "react-icons/pi";
import { LuHeadphones } from "react-icons/lu";
import { TbDeviceGamepad } from "react-icons/tb";

function IconsByCatagaries() {
  return (
    <div>
      <div className="flex gap-[4%]">
        <div className="flex-col border-2 border-gray-200 rounded-md py-7 px-12 items-center hover:bg-customRed hover:text-white hover:border-0">
          <CiMobile4 className="text-5xl" />
          <h1>Phones</h1>
        </div>
        <div className="flex-col border-2 border-gray-200 rounded-md py-7 px-12 items-center hover:bg-customRed hover:text-white hover:border-0">
          <HiOutlineDesktopComputer className="text-5xl" />
          <h1>Phones</h1>
        </div>
        <div className="flex-col border-2 border-gray-200 rounded-md py-7 px-12 items-center hover:bg-customRed hover:text-white hover:border-0">
          <TbDeviceWatchStats className="text-5xl" />
          <h1>Phones</h1>
        </div>
        <div className="flex-col border-2 border-gray-200 rounded-md py-7 px-12 items-center hover:bg-customRed hover:text-white hover:border-0">
          <PiCamera className="text-5xl" />
          <h1>Phones</h1>
        </div>
        <div className="flex-col border-2 border-gray-200 rounded-md py-7 px-12 items-center hover:bg-customRed hover:text-white hover:border-0">
          <LuHeadphones className="text-5xl" />
          <h1>Phones</h1>
        </div>
        <div className="flex-col border-2 border-gray-200 rounded-md py-7 px-12 items-center hover:bg-customRed hover:text-white hover:border-0">
          <TbDeviceGamepad className="text-5xl" />
          <h1>Phones</h1>
        </div>
      </div>
    </div>
  );
}

export default IconsByCatagaries;
