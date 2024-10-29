import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
function SeasionHeader() {
  return (
    <>
    <div className="w-full bg-black">
      <div className="h-11 w-[84%] m-auto bg-black flex justify-between items-center">
        <div></div>
        <div className="flex justify-center  space-x-2">
          <p className="text-white">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <p className="text-white  font-semibold underline"><Link>ShopNow </Link>  </p>
        </div>
        <div className=" flex justify-center items-center cursor-pointer">
          <p className="text-white ">English</p>
          <RiArrowDropDownLine className='text-white  text-[36px]'/>
        </div>
      </div>
      </div>
    </>
  );
}

export default SeasionHeader;
