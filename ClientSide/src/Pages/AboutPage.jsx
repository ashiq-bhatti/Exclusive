import React from "react";
import GirlsSopingBag from "../images/AboutPage/GirlsSopingBag.png";
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadphones } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";
import { TbBrandGoogleHome } from "react-icons/tb";

import { CiDollar } from "react-icons/ci";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";

function AboutPage() {
  return (
    <>
      <div className="flashSales-section-outer flex justify-center mb-24">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex items-center space-x-1 my-14">
            <h1 className="text-gray-500">Home /</h1>
            <span>About</span>
          </div>
        </div>
      </div>

      <div className="outer  mb-24  ">
        <div className="inner  ml-[110px] flex gap-24  ">
          <div className="content w-[50%] flex flex-col justify-center py-32  ">
            <h1 className="text-3xl font-bold">Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
              <br /> <br />
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="right ">
            <img src={GirlsSopingBag} alt="" className="rounded-l-md " />
          </div>
        </div>
      </div>

      {/* Saler active our site section */}

      <div className="w-[84%] m-auto flex   justify-between my-28">
        <div className=" flex flex-col p-8  items-center justify-center border border-1 rounded hover:text-white hover:bg-customRed ">
          <div className="bg-black border-8 p-2  border-gray-300 h-[70px] w-[70px] mb-4  rounded-full flex items-center justify-center hover:bg-white hover:border-opacity-10">
            <TbBrandGoogleHome className="text-white hover:text-black text-5xl" />
          </div>
          <h1 className="font-bold text-3xl mb-1">10.5K</h1>
          <p className="text-lg">Sallers active our site</p>
        </div>
        <div className=" flex flex-col p-8  items-center justify-center border border-1 rounded hover:text-white hover:bg-customRed ">
          <div className="bg-black border-8 p-2 border-gray-300 h-[70px] w-[70px] mb-4  rounded-full flex items-center justify-center hover:bg-white hover:border-opacity-10">
            <CiDollar className="text-white hover:text-black text-5xl" />
          </div>
          <h1 className="font-bold text-3xl mb-1">33K</h1>
          <p className="text-lg">Mopnthly Produduct Sale</p>
        </div>
        <div className=" flex flex-col p-8 items-center justify-center border border-1 rounded hover:text-white hover:bg-customRed ">
          <div className="bg-black border-8 p-2 border-gray-300 h-[70px] w-[70px] mb-4  rounded-full flex items-center justify-center hover:bg-white hover:border-opacity-10">
            <RiShoppingBag4Line className="text-white hover:text-black text-5xl" />
          </div>
          <h1 className="font-bold text-3xl mb-1">45.5K</h1>
          <p className="text-lg">Customer active in our site</p>
        </div>
        <div className=" flex flex-col p-8  items-center justify-center border border-1 rounded hover:text-white hover:bg-customRed ">
          <div className="bg-black border-8 p-2 border-gray-300 h-[70px] w-[70px] mb-4  rounded-full flex items-center justify-center hover:bg-white hover:border-opacity-10">
            <FaSackDollar className="text-white hover:text-black text-5xl" />
          </div>
          <h1 className="font-bold text-3xl mb-1">25K</h1>
          <p className="text-lg">Anual gross sale in our site</p>
        </div>
      </div>

      {/* Free And Fast Delivery section */}
      <div className="w-[70%] m-auto flex justify-between my-28">
        <div className=" flex flex-col items-center justify-center ">
          <div className="bg-black border-8  border-gray-300 h-14 w-14 mb-4  rounded-full flex  items-center justify-center">
            {" "}
            <TbTruckDelivery className="text-white text-3xl" />
          </div>
          <h1 className="font-semibold mb-1">FREE AND FAST DELIVERY</h1>
          <p className="text-xs">Free delivery for all orders over $140</p>
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <div className="bg-black border-8  border-gray-300 h-14 w-14 mb-4  rounded-full flex  items-center justify-center">
            {" "}
            <PiHeadphones className="text-white text-3xl" />
          </div>
          <h1 className="font-semibold mb-1">24/7 CUSTOMER SERVICE</h1>
          <p className="text-xs">Friendly 24/7 customer support</p>
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <div className="bg-black border-8  border-gray-300 h-14 w-14 mb-4  rounded-full flex  items-center justify-center">
            {" "}
            <CiDiscount1 className="text-white text-3xl" />
          </div>
          <h1 className="font-semibold mb-1">MONEY BACK GUARANTEE</h1>
          <p className="text-xs">We reurn money within 30 days</p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
