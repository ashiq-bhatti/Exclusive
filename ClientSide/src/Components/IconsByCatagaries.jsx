import React from "react";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbDeviceWatchStats } from "react-icons/tb";
import { PiCamera } from "react-icons/pi";
import { LuHeadphones } from "react-icons/lu";
import { TbDeviceGamepad } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function IconsByCatagaries() {
  return (
    <div>
      <div className="flashSales-section-outer flex justify-center mt-20">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex items-center gap-3">
            <div className="h-9 w-5 rounded-sm bg-customRed"></div>
            <h1 className="text-customRed  font-semibold">Catageries </h1>
          </div>
          <div className="flex justify-between my-7">
            <div className="flex items-center gap-20">
              <h1 className="text-4xl font-semibold tracking-wider">
                Browse By Category
              </h1>
            </div>
            <div className="flex gap-2">
              <div className="bg-gray-100 h-11 w-11  rounded-full flex items-center justify-center">
                {" "}
                <FaArrowLeft className="" />
              </div>
              <div className="bg-gray-100 h-11 w-11 rounded-full flex items-center justify-center">
                {" "}
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="flex gap-[4%]">
            <div className="flex-col border-2 border-gray-200 rounded-md py-7 px-12 items-center hover:bg-customRed hover:text-white hover:border-customRed">
              <CiMobile4 className="text-5xl" />
              <h1>Phones</h1>
            </div>
            <div className="flex-col border-2 border-gray-200 rounded-md py-7 px-12 items-center hover:bg-customRed hover:text-white hover:border-customRed">
              <HiOutlineDesktopComputer className="text-5xl" />
              <h1>Phones</h1>
            </div>
            <div className="flex-col border-2 border-gray-200 rounded-md py-7 px-12 items-center hover:bg-customRed hover:text-white hover:border-customRed">
              <TbDeviceWatchStats className="text-5xl" />
              <h1>Phones</h1>
            </div>
            <div className="flex-col border-2 border-gray-200 rounded-md py-7 px-12 items-center hover:bg-customRed hover:text-white hover:border-customRed">
              <PiCamera className="text-5xl" />
              <h1>Phones</h1>
            </div>
            <div className="flex-col border-2 border-gray-200 rounded-md py-7 px-12 items-center hover:bg-customRed hover:text-white hover:border-customRed">
              <LuHeadphones className="text-5xl" />
              <h1>Phones</h1>
            </div>
            <div className="flex-col border-2 border-gray-200 rounded-md py-7 px-12 items-center hover:bg-customRed hover:text-white hover:border-customRed">
              <TbDeviceGamepad className="text-5xl" />
              <h1>Phones</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconsByCatagaries;
