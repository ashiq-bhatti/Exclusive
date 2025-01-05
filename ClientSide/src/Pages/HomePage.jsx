import React, { useRef } from "react";
import Sidebar from "../Components/Sidebar";
import SliderCarousel from "../Components/SliderCarousel";
import ViewAllProductsButton from "../Components/ViewAllProductsButton";
import IconsByCatagaries from "../Components/IconsByCatagaries";
import { FaArrowUp } from "react-icons/fa";
import FlashSales from "../Components/FlashSales";
import ThisMonth from "../Components/ThisMonth";
import EnhanseMusic from "../Components/EnhanseMusic";
import OurProducts from "../Components/OurProducts";
import NewArrivel from "../Components/NewArrivel";
import FreeAndFastDelivery from "../Components/FreeAndFastDelivery";

function HomePage() {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div ref={scrollRef} className="menuSlider-section-outer flex">
        <div className="menuSlider-section-inner w-[84%] m-auto  flex">
          <Sidebar />
          <div className="slider  w-[70%]  mt-10 ml-10">
            <SliderCarousel />
          </div>
        </div>
      </div>

      <FlashSales />
      <ViewAllProductsButton className="mt-7" />
      <IconsByCatagaries />
      <div className="border-t-2 bg-gray-200 my-14  w-[84%] m-auto"></div>
      <ThisMonth />
      <EnhanseMusic />
      <OurProducts />
      <ViewAllProductsButton />
      <NewArrivel />
      <FreeAndFastDelivery />
      <div className=" w-[90%] m-auto mb-10 flex justify-end">
        <div
          onClick={handleScroll}
          className=" cursor-pointer bg-gray-100 h-11 w-11 rounded-full flex items-center justify-center"
        >
          <FaArrowUp className="h-10" />
        </div>
      </div>
    </>
  );
}

export default HomePage;
