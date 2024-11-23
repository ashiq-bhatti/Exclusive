import React from "react";
import GirlsSopingBag from "../images/AboutPage/GirlsSopingBag.png";
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadphones } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";
import { TbBrandGoogleHome } from "react-icons/tb";

import { CiDollar } from "react-icons/ci";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaSackDollar } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <div className="flashSales-section-outer flex justify-center  md:mb-16">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex items-center space-x-1 my-14">
            <h1 className="text-gray-500">
              {" "}
              <Link to="/">Home /</Link>
            </h1>
            <span>About</span>
          </div>
        </div>
      </div>

      <div className="outer  mb-24  ">
        <div className="inner flex-col w-[80%] m-auto  lg:ml-[110px] lg:flex lg:flex-row gap-24  ">
          <div className="content w-full mb-10 md:w-[100%] lg:w-[50%] flex flex-col justify-center   ">
            <h1 className="text-2xl font-bold md:text-3xl ">Our Story</h1>
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

      <div className="w-[84%] m-auto flex-col md:flex md:flex-row gap-7  my-28">
        <div className="first-two-card flex flex-col  gap-7  lg:flex lg:flex-row  ">
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
        </div>
        <div className="last-two-card flex flex-col gap-7  lg:flex lg:flex-row">
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
      </div>

      {/* Free And Fast Delivery section */}
      <div className="w-[90%] sm:w-[80%] lg:w-[70%] m-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 my-28">
        {/* Delivery */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-black border-8 border-gray-300 h-14 w-14 mb-4 rounded-full flex items-center justify-center">
            <TbTruckDelivery className="text-white text-3xl" />
          </div>
          <h1 className="font-semibold mb-1 text-sm sm:text-base">
            FREE AND FAST DELIVERY
          </h1>
          <p className="text-xs sm:text-sm">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Customer Service */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-black border-8 border-gray-300 h-14 w-14 mb-4 rounded-full flex items-center justify-center">
            <PiHeadphones className="text-white text-3xl" />
          </div>
          <h1 className="font-semibold mb-1 text-sm sm:text-base">
            24/7 CUSTOMER SERVICE
          </h1>
          <p className="text-xs sm:text-sm">Friendly 24/7 customer support</p>
        </div>

        {/* Money Back Guarantee */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-black border-8 border-gray-300 h-14 w-14 mb-4 rounded-full flex items-center justify-center">
            <CiDiscount1 className="text-white text-3xl" />
          </div>
          <h1 className="font-semibold mb-1 text-sm sm:text-base">
            MONEY BACK GUARANTEE
          </h1>
          <p className="text-xs sm:text-sm">We return money within 30 days</p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
