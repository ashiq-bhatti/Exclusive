import React, { useContext, useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { StoreContext } from "../Context/StoreContext";
import CountDownTimer from "../Components/CountDown_Timer/CountDownTimer";
import { GrView } from "react-icons/gr";
import { PiHeartThin } from "react-icons/pi";
import {
  FaStar,
  FaStarHalfAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
};

const FlashSales = () => {
  const { product_List, addToCart, token } = useContext(StoreContext);
  const [viewAllProducts, setViewAllProducts] = useState(false);
  const sliderRef = useRef(null);
  const [wishList, setWishList] = useState([]);

  const todayProduct = product_List.filter(
    (product) =>
      product.eventCategory && product.eventCategory === "Today"
  );

  const displayProducts = viewAllProducts ? todayProduct : todayProduct.slice(0, 4);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    toast.success("Product added to cart!");
  };

  const addWishList = async (productId) => {
    try {
      if (!token) {
        toast.error("Please login to add to wishlist");
        return;
      }

      const response = await axios.put(
        "http://localhost:8000/api/wishlist/add_to_wish_list",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setWishList(response.data.user.wishlist);
      toast.success(response.data.message);
    } catch (error) {
      console.error("Failed to add to wishlist:", error.message);
    }
  };

  return (
    <div className="flashSales-section">
      <div className="flashSales-section-outer flex justify-center mt-20">
        <div className="flashSales-section-inner w-[84%] m-auto">
          <div className="flex items-center gap-3">
            <div className="h-9 w-5 rounded-sm bg-customRed"></div>
            <h1 className="text-customRed font-semibold">Today's</h1>
          </div>
          <div className="flex justify-between my-7">
            <div className="flex items-center gap-20">
              <h1 className="text-lg md:text-2xl lg:text-4xl font-semibold tracking-wider">
                Flash Sales
              </h1>
              <div>
                <span className="font-medium flex gap-3">
                  <p>Days</p>
                  <p>Hours</p>
                  <p>Minutes</p>
                  <p>Seconds</p>
                </span>
                <CountDownTimer duration={2 * 24 * 60 * 60 * 1000} />
              </div>
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
        </div>
      </div>

      <div className="w-3/4 m-auto">
        <Slider ref={sliderRef} {...sliderSettings}>
          {displayProducts.length > 0 ? (
            displayProducts.map((product) => (
              <div key={product._id} className="w-64 card border-1 space-x-3 group">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-52 relative flex rounded-md p-1">
                    <span className="absolute top-2 left-2 px-2 rounded-sm bg-customRed text-white text-center">
                      -{product.off_percent}
                    </span>
                    <img
                      src={`http://localhost:8000/public/images/${product.image}`}
                      alt={product.title}
                      className="h-32 w-32 m-auto transform hover:scale-110"
                    />
                    <div className="absolute flex flex-col gap-2 top-3 right-3">
                      <button
                        onClick={() => addWishList(product._id)}
                        className={`bg-white h-8 w-8 rounded-full flex items-center justify-center`}
                      >
                        <PiHeartThin
                          className={`h-6 w-6 ${
                            wishList.includes(product._id)
                              ? "text-customRed "
                              : "text-gray-500"
                          }`}
                        />
                      </button>
                      <Link to={`/product-detail-page/${product._id}`}>
                        <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
                          <GrView />
                        </button>
                      </Link>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-black text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => handleAddToCart(product._id)}
                  >
                    Add To Cart
                  </button>
                </div>
                <div className="space-y-2 font-semibold">
                  <h1>{product.title}</h1>
                  <div className="flex gap-3">
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
                    <h1 className="text-gray-400">{`(${product.reviews})`}</h1>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg font-semibold text-center my-7">
              No products available
            </p>
          )}
        </Slider>
      </div>

      <div className="text-center mt-12">
        <button
          className="text-white bg-customRed py-3 px-10 rounded-sm"
          onClick={() => setViewAllProducts(!viewAllProducts)}
        >
          {viewAllProducts ? "Show Less Products" : "View All Products"}
        </button>
      </div>
    </div>
  );
};

export default FlashSales;

