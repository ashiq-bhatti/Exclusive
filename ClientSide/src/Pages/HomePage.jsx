import React from "react";

import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import SliderCarousel from "../Components/SliderCarousel";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ViewAllProductsButton from "../Components/ViewAllProductsButton";
import ProductCard from "../Components/ProductCard";
import speacker from "../images/FlashSale/speacker.png";
import CountDownTimer from "../Components/CountDown_Timer/CountDownTimer";
import IconsByCatagaries from "../Components/IconsByCatagaries";
import { FaArrowUp } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadphones } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";

function HomePage() {
  return (
    <>
      

      {/* sidebar and slider section */}

      <div className="menuSlider-section-outer flex">
        <div className="menuSlider-section-inner w-[84%] m-auto  flex">
          <div className="menue  border-r text-lg pr-6 ">
            <ul className="mt-10">
              <li>
                <Link to="#" className="flex items-center">
                  <p>Woman's Feshion</p>{" "}
                  <RiArrowDropRightLine className="text-3xl ml-14" />
                </Link>
              </li>
              <li className="flex items-center ">
                <Link to="#" className="flex items-center">
                  {" "}
                  <p> Men's Feshion</p>{" "}
                  <RiArrowDropRightLine className="text-3xl ml-20" />
                </Link>
              </li>
              <li className="pt-2">
                <Link to="#"> Electronics </Link>
              </li>
              <li className="pt-2">
                <Link to="#"> Home & Lifestyle </Link>
              </li>
              <li className="pt-2">
                <Link to="#"> Medicine </Link>
              </li>
              <li className="pt-2">
                <Link to="#"> Sport & Outdoor </Link>
              </li>
              <li className="pt-2">
                <Link to="#"> Boy's & Toyes </Link>
              </li>
              <li className="pt-2">
                <Link to="#"> Groceries & Pets </Link>
              </li>
              <li className="pt-2">
                <Link to="#"> Health & Beauty</Link>
              </li>
            </ul>
          </div>
          <div className="slider  w-[70%]  mt-10 ml-10">
            <SliderCarousel />
          </div>
        </div>
      </div>

      {/* Today ,Flash sales section  start */}
      <div className="flashSales-section-outer flex justify-center mt-20">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex items-center gap-3">
            <div className="h-9 w-5 rounded-sm bg-customRed"></div>
            <h1 className="text-customRed  font-semibold">Today's </h1>
          </div>
          <div className="flex justify-between my-7">
            <div className="flex items-center gap-20">
              <h1 className="text-4xl font-semibold tracking-wider">
                Flash Sales
              </h1>
              <div className="-mt-6">
                <span className="font-medium flex gap-3">
                  {" "}
                  <p>Days</p> <p>Hours </p> Minutes <p>Seconds</p>{" "}
                </span>
                <CountDownTimer duration={2 * 24 * 60 * 60 * 1000} />
              </div>
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
        </div>
      </div>

      {/* cards */}
      <div className="flex gap-8 mt-4 ml-24">
        <ProductCard
          discount="-40%"
          imgsrc="./src/images/FlashSale/game.png"
          description="HAVIT HV-G92 Gamepad"
          discountPrice="$120"
          orgPrice="$120"
          rating="(88)"
        />
        <ProductCard
          discount="-40%"
          imgsrc="./src/images/FlashSale/game.png"
          description="HAVIT HV-G92 Gamepad"
          discountPrice="$120"
          orgPrice="$120"
          rating="(88)"
        />
        <ProductCard
          discount="-40%"
          imgsrc="./src/images/FlashSale/game.png"
          description="HAVIT HV-G92 Gamepad"
          discountPrice="$120"
          orgPrice="$120"
          rating="(88)"
        />
        <ProductCard
          discount="-35%"
          imgsrc="./src/images/FlashSale/keybord.png"
          description="AK-900 Wired Keyboard"
          discountPrice="$960"
          orgPrice="$1160"
          rating="(85)"
        />
        <ProductCard
          discount="-30%"
          description="IPS LCD Gaming Monitor"
          discountPrice="$370"
          orgPrice="$400"
          rating="(99)"
        />
      </div>
      <ViewAllProductsButton className="mt-7" />

      {/* Today,Flash sales section  end */}

      {/* Divider Line */}
      <div className="border-t-2 bg-gray-200 my-10  w-[84%] m-auto"></div>

      {/* Brows By Catagery */}
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

          {/* catagery icons */}
          <div>
            <IconsByCatagaries />
          </div>
        </div>
      </div>

      <div className="border-t-2 bg-gray-200 my-10  w-[84%] m-auto"></div>

      {/* This Month */}
      <div className="flashSales-section-outer flex justify-center mt-20">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex items-center gap-3">
            <div className="h-9 w-5 rounded-sm bg-customRed"></div>
            <h1 className="text-customRed  font-semibold">This Month </h1>
          </div>
          <div className="flex justify-between my-7">
            <div className="flex items-center gap-20">
              <h1 className="text-4xl font-semibold tracking-wider">
                Best Selling Prducts
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

          {/* Cards */}
          <div>
            <div className="flex gap-8 mt-4">
              <ProductCard
                imgsrc="./src/images/FlashSale/game.png"
                description="HAVIT HV-G92 Gamepad"
                discountPrice="$120"
                orgPrice="$120"
                rating="(88)"
              />
              <ProductCard
                imgsrc="./src/images/FlashSale/keybord.png"
                description="AK-900 Wired Keyboard"
                discountPrice="$960"
                orgPrice="$1160"
                rating="(85)"
              />
              <ProductCard
                description="IPS LCD Gaming Monitor"
                discountPrice="$370"
                orgPrice="$400"
                rating="(99)"
              />
              <ProductCard
                description="IPS LCD Gaming Monitor"
                discountPrice="$370"
                orgPrice="$400"
                rating="(99)"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanse Music */}
      <div className="flex gap-14 border-t-2 bg-black my-10 p-14 w-[84%] m-auto">
        <div className="left">
          <p className="text-customGreen font-semibold mb-8">Categories</p>
          <h1 className="text-5xl font-semibold text-white">
            Enhance Your <br /> Music Experience
          </h1>
          <div className="timer"></div>
          <div className="flex gap-2 my-8">
            <div className="bg-gray-100 h-14 w-14  rounded-full flex items-center justify-center">
              {" "}
              <p className="text-sm">Hours</p>
            </div>
            <div className="bg-gray-100 h-14 w-14 rounded-full flex items-center justify-center">
              {" "}
              <p className="text-sm">Days</p>
            </div>
            <div className="bg-gray-100 h-14 w-14 rounded-full flex items-center justify-center">
              {" "}
              <p className="text-sm">Minutes</p>
            </div>
            <div className="bg-gray-100 h-14 w-141 rounded-full flex items-center justify-center">
              {" "}
              <p className="text-sm p-1">Seconds</p>
            </div>
          </div>
          <button className="b bg-customGreen text-white px-9 py-3 rounded-sm">
            Bye Now!
          </button>
        </div>
        <div className="right ">
          <img src={speacker} alt="" />
        </div>
      </div>

      {/* Our Products */}
      <div className="flashSales-section-outer flex justify-center mt-20">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex gap-3 items-center">
            <div className="h-9 w-5 rounded-sm bg-customRed"></div>
            <h1 className="text-customRed  font-semibold">Our Products </h1>
          </div>
          <div className="flex justify-between my-7">
            <div className="flex items-center gap-20">
              <h1 className="text-4xl font-semibold tracking-wider">
                Explore Our Prducts
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

          {/* Cards */}
          <div>
            <div className="flex gap-8 mt-4">
              <ProductCard
                imgsrc="./src/images/FlashSale/game.png"
                description="HAVIT HV-G92 Gamepad"
                discountPrice="$120"
                rating="(88)"
              />
              <ProductCard
                imgsrc="./src/images/FlashSale/keybord.png"
                description="AK-900 Wired Keyboard"
                discountPrice="$960"
                rating="(85)"
              />
              <ProductCard
                description="IPS LCD Gaming Monitor"
                discountPrice="$370"
                rating="(99)"
              />
              <ProductCard
                description="IPS LCD Gaming Monitor"
                discountPrice="$370"
                rating="(99)"
              />
            </div>
          </div>
        </div>
      </div>

      <ViewAllProductsButton />

      {/* Featured New Arrivel */}
      <div className="flashSales-section-outer flex justify-center mt-20">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex gap-3 items-center">
            <div className="h-9 w-5 rounded-sm bg-customRed"></div>
            <h1 className="text-customRed  font-semibold">Featured </h1>
          </div>
          <div className="flex justify-between my-7">
            <div className="flex items-center gap-20">
              <h1 className="text-4xl font-semibold tracking-wider">
                New Arrivel
              </h1>
            </div>
          </div>

          {/* Cards */}
          <div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
      </div>

      {/* Free And Fast Delivery section */}
      <div className="w-[70%] m-auto flex space-x-40 my-28">
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

      <div className=" w-[90%] m-auto mb-10 flex justify-end">
        <div className="bg-gray-100 h-11 w-11 rounded-full flex items-center justify-center">
          <FaArrowUp className="h-10" />
        </div>
      </div>

     
    </>
  );
}

export default HomePage;
