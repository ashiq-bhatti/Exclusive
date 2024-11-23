import React, { useRef, useState, useEffect } from "react";
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
import playStation from "../images/RandomImages/playStation.png";
import woman from "../images/RandomImages/woman.png";
import speackers from "../images/RandomImages/speackers.png";
import perfume from "../images/RandomImages/perfume.png";

import { FlashSale } from "../StaticApi";

import { GrView } from "react-icons/gr";
import { PiHeartThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";

function HomePage() {
  const [flashSaleApi, setFlashSaleApi] = useState(FlashSale);
  const [products, setProducts] = useState("");

  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const FetchProducts = async () => {
      try {
        const request = await axios.get(
          "http://localhost:4000/api/admin/fetch-product"
        );
        const response = request.data;
        setProducts(response.product);
        if (response.status === 200) {
          console.log("product: " + response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchProducts();
  }, []);

  return (
    <>
      {/* sidebar and slider section */}

      <div ref={scrollRef} className="menuSlider-section-outer flex">
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
              <h1 className=" text-lg md:text-2xl lg:text-4xl font-semibold tracking-wider">
                Flash Sales
              </h1>
              <div className="-mt-6">
                <span className=" font-medium flex gap-3">
                  {" "}
                  <p>Days</p> <p>Hours </p> Minutes <p>Seconds</p>{" "}
                </span>
                <CountDownTimer duration={2 * 24 * 60 * 60 * 1000} />
              </div>
            </div>
            {/* <div className="flex gap-2">
              <div className="bg-gray-100 h-11 w-11  rounded-full flex items-center justify-center">
                {" "}
                <FaArrowLeft className="" />
              </div>
              <div className="bg-gray-100 h-11 w-11 rounded-full flex items-center justify-center">
                {" "}
                <FaArrowRight />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* cards */}

      <div className="w-3/4 m-auto ">
        <Slider {...settings} className="">
          {flashSaleApi.map((card, index) => (
            <div key={card.id} className="w-64 card border-1 ">
              <div className="h-56 relative bg-gray-100 flex gap-3   rounded-md p-1">
                <span className="absolute top-2 left-2 px-2 rounded-sm bg-customRed text-white text-center ">
                  {card.discount}
                </span>
                <img src={card.imgsrc} alt="" className=" h-36 w-36 m-auto" />
                <div className="absolute flex flex-col gap-2 top-3 right-3">
                  <button className="bg-white h-8 w-8  rounded-full flex items-center justify-center">
                    {" "}
                    <PiHeartThin className="" />
                  </button>
                  <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
                    {" "}
                    <Link to="/product-detail-page">
                      <GrView />
                    </Link>
                  </button>
                  {/* <button className="w-full  bottom-0 left-0  bg-black text-white text-center">
                   Add To Cart
                          </button> */}
                </div>
              </div>

              <div className="space-y-2 font-semibold">
                <h2 className="mt-3">{card.description}</h2>
                <div className="flex gap-3 font-semibold">
                  <span className="text-customRed">{card.discountPrice}</span>
                  <span className="text-gray-400 line-through">
                    {card.orgPrice}
                  </span>
                </div>
                <div className="ratingStar flex gap-4">
                  <div className="flex items-center text-customeYellow">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <h1 className="text-gray-400">{card.rating}</h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <ViewAllProductsButton className="mt-7" />

      {/* Today,Flash sales section  end */}

      {/* Divider Line */}

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
            {/* <IconsByCatagaries /> */}
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

      {/* api data from backend */}
      {/* <div className="w-[84%] m-auto">
        <div className="w-3/2  flex gap-8">
          {products.length > 0 ? (
            products
              .map((product) => (
                <div key={product.id} className="w-64 card border-1  space-x-3">
                  <div className="h-60 relative bg-gray-100 flex rounded-md p-1">
                    <span className="absolute top-2 left-2 px-2 rounded-sm bg-customRed text-white text-center">
                      -{product.off_percent}
                    </span>
                    <img
                      src={product.image}
                      alt=""
                      className="h-36 w-36 m-auto"
                    />
                    <div className="absolute flex flex-col gap-2 top-3 right-3">
                      <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
                        <PiHeartThin />
                      </button>
                      <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
                        <Link to="/product-detail-page">
                          <GrView />
                        </Link>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 font-semibold">
                    <h1>{product.title}</h1>
                    <div className="flex gap-3 font-semibold">
                      <span className="text-customRed">${product.price}</span>
                      <span className="text-gray-400 line-through">
                        ${product.discount_price}
                      </span>
                    </div>
                    <div className="ratingStar flex gap-4">
                      <div className="flex items-center text-customeYellow">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                      </div>
                      <h1 className="text-gray-400">{`(${product.rating}) `}</h1>
                    </div>
                  </div>
                </div>
              ))
              .slice(1, 5)
          ) : (
            <p className="text-lg font-semibold text-center my-7">
              No products available
            </p>
          )}
        </div>
      </div> */}

      <ViewAllProductsButton />

      {/* Featured New Arrivel */}
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
      </div>

      {/* Cards */}
      <div className="flashSales-section-inner w-[84%] m-auto flex flex-col lg:flex-row justify-between gap-8  ">
        <div className="left w-[90%] bg-black rounded-md relative ">
          <img
            src={playStation}
            alt="PlayStation 5"
            className="w-full absolute bottom-0 "
          />

          <div className="absolute bottom-6 left-6 text-white pr-20">
            <h1 className="text-xl font-bold">PlayStation 5</h1>
            <p className="my-4">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="border-b-2 text-lg font-semibold border-gray-600 pb-1 hover:border-white transition duration-200">
              Shop Now
            </button>
          </div>
        </div>

        <div className="right  w-[90%] ">
          <div className="left bg-black px-8  rounded-md flex flex-row">
            <div className="  text-white">
              <h1 className="text-xl text-white">Women’s Collections</h1>
              <p className="text-white  my-4">
                Featured woman collections that give you another vibe.{" "}
              </p>
              <h2 className="text-white">
                <Link className="border-b-2 text-lg font-semibold border-gray-600 pb-1">
                  Shop Now
                </Link>
              </h2>
            </div>

            <img src={woman} alt="" className="w-[80%]" />
          </div>

          <div className="mt-8 gap-8 flex">
            <div className="left p-10  bg-black relative rounded-md">
              <img src={speackers} alt="" className="reletive" />
              <div className="absolute  bottom-6 left-6 text-white">
                <h1 className="text-xl text-white">Speakers</h1>
                <p className="text-white ">Amazon wireless speakers</p>
                <h2 className="text-white">
                  <Link className="border-b-2 text-lg font-semibold border-gray-600 pb-1">
                    Shop Now
                  </Link>
                </h2>
              </div>
            </div>
            <div className="left p-10 bg-black relative rounded-md">
              <img src={perfume} alt="" className="reletive" />
              <div className="absolute  bottom-6 left-6 text-white">
                <h1 className="text-xl text-white">Perfume</h1>
                <p className="text-white font-xs">GUCCI INTENSE OUD EDP</p>
                <h2 className="text-white">
                  <Link className="border-b-2 text-lg font-semibold border-gray-600 pb-1">
                    Shop Now
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Free And Fast Delivery section */}
      <div className="w-[70%] m-auto  space-x-40 my-28">
        <div className="w-full md:flex  items-center justify-between">
        <div className=" flex flex-col items-center justify-center ">
          <div className="bg-black border-8  border-gray-300 h-14 w-14 mb-4  rounded-full flex  items-center justify-center">
            {" "}
            <TbTruckDelivery className="text-white text-3xl" />
          </div>
          <h1 className="font-semibold mb-1">FREE AND FAST DELIVERY</h1>
          <p className="text-xs">Free delivery for all orders over $140</p>
        </div>
        <div className=" flex flex-col items-center  my-10 ">
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
      </div>

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
