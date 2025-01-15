import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { BrowseByCategory } from "../StaticApi";

function IconsByCatagaries() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/allListedProducts?category=${category}`);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="flashSales-section-outer flex justify-center mt-20">
        <div className="flashSales-section-inner w-[90%] m-auto">
          <div className="flex items-center gap-3">
            <div className="h-9 w-5 rounded-sm bg-customRed"></div>
            <h1 className="text-customRed font-semibold">Categories</h1>
          </div>
          <div className="flex justify-between my-7">
            <div>
              <h1 className="text-4xl font-semibold tracking-wider">
                Browse By Category
              </h1>
            </div>
            <div className="flex gap-2">
              <button
                className="bg-gray-100 h-11 w-11 rounded-full flex items-center justify-center"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <FaArrowLeft />
              </button>
              <button
                className="bg-gray-100 h-11 w-11 rounded-full flex items-center justify-center"
                onClick={() => sliderRef.current.slickNext()}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="mt-5">
            <Slider {...sliderSettings} ref={sliderRef}>
              {BrowseByCategory.map((category) => (
                <div
                  key={category._id}
                  onClick={() => handleCategoryClick(category.title )}
                  
                  className="cursor-pointer flex flex-col justify-center items-center border-2 border-gray-200 rounded-md py-7 px-6 hover:bg-customRed hover:text-white hover:border-customRed transition duration-300"
                >
                  <div className="flex items-center justify-center text-5xl">
                    {category.icon}
                  </div>
                  <h1 className="mt-4 text-center text-lg">{category.title}</h1>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconsByCatagaries;
