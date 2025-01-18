import React, { useEffect, useContext, useState } from "react";
import game1 from "../images/RandomImages/game1.png";
import game2 from "../images/RandomImages/game2.png";
import game3 from "../images/RandomImages/game3.png";
import game4 from "../images/RandomImages/game4.png";
import game5 from "../images/RandomImages/game5.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { PiHeartThin } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import ProductCard from "../Components/ProductCard";
import { useNavigate } from "react-router-dom";
import { backend_url } from "../BackenURL";
import axios from "axios";
import toast from "react-hot-toast";

import { StoreContext } from "../Context/StoreContext";
import HOC from "../Components/HOC";

function ProductDetailsPage() {
  const { cartItems, addToCart, removeItemFromCart, token } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});
  const [wishList, setWishList] = useState([]);

  const { id } = useParams();

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
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const request = await axios.get(
          `http://localhost:8000/api/product/fetch-product-by-id/${id}`
        );
        const response = request.data.product;
        if (request.status === 200) {
          setProductData(response);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProductById();
  }, []);

  return (
    <>
      <div className="section-outer flex justify-center my-16">
        <div className="section-inner w-[84%] m-auto ">
          <div className="flex items-center space-x-1 ">
            <h1 className="text-gray-500">
              Account / {productData.category} /
            </h1>
            <span>{productData.title}</span>
          </div>
        </div>
      </div>

      <div className="section-outer mb-20">
        <div className="section-inner flex flex-col md:flex md:flex-row w-[84%] m-auto gap-12">
          <div className="left-imges-section flex flex-col-reverse md:flex md:flex-row  gap-7 ">
            <div className="flex md:flex md:flex-col  gap-5">
              <div className="bg-customGray p-3 rounded-md">
                <img src={game2} alt="Product" />
              </div>
              <div className="bg-customGray p-3 rounded-md">
                <img src={game3} alt="Product" />
              </div>
              <div className="bg-customGray p-3 rounded-md">
                <img src={game4} alt="Product" />
              </div>
              <div className="bg-customGray p-3 rounded-md">
                <img src={game5} alt="Product" />
              </div>
            </div>

            <div>
              <div className="bg-customGray p-7 md:p-8 md:py-32 rounded-md">
                <img
                  src={`http://localhost:8000/public/images/${productData.image}`}
                  alt="Product"
                  className=" w-96 h-80"
                />
              </div>
            </div>
          </div>
          <div className="right-details-section w-full md:w-[60%] lg:w-[35%]">
            <h1 className="text-2xl font-semibold">{productData.title}</h1>
            <div>
              <div className="ratingStar flex gap-3 my-3">
                <div className="flex items-center text-customeYellow">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <h1 className="text-gray-400">
                  {" "}
                  {`(${productData.reviews}) Reviews`}
                </h1>
                <div className="h-4 w-[1px] mt-1 bg-black opacity-50"></div>
                <p className="text-customGreen"> In Stock</p>{" "}
              </div>
              <h1 className="text-2xl font-semibold">
                {" "}
                {`$${productData.price}`}
              </h1>
              <p className="mt-5">{`${productData.description}`}</p>
              <div className="h-[1px] w-full my-5 bg-black opacity-50"></div>
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Colore:</h1>
                <div className="flex gap-2 mt-1">
                  <div className="cercale h-4 w-4 rounded-full bg-slate-400 "></div>
                  <div className="cercale h-4 w-4 rounded-full bg-customRed"></div>
                </div>
              </div>
              <div className="flex items-center gap-4 my-4">
                <h1 className="text-xl font-medium">Size:</h1>
                <div className="flex gap-2 mt-1">
                  <div className="cercale py-1 px-2 font-semibold rounded border border-1  hover:bg-customRed hover:text-white">
                    XS
                  </div>
                  <div className="cercale py-1 px-3 font-semibold rounded border border-1  hover:bg-customRed  hover:text-white">
                    S
                  </div>
                  <div className="cercale py-1 px-2 font-semibold rounded border border-1  hover:bg-customRed  hover:text-white">
                    M
                  </div>
                  <div className="cercale py-1 px-3 font-semibold rounded border border-1  hover:bg-customRed  hover:text-white">
                    L
                  </div>
                  <div className="cercale py-1 px-2 font-semibold rounded border border-1  hover:bg-customRed  hover:text-white">
                    XL
                  </div>
                </div>
              </div>
              <div className="flex justify-between md:flex-wrap">
                <div className="countBtn flex items-center rounded border border-1 md:mb-3">
                  <button
                    type="button"
                    onClick={() => removeItemFromCart(productData._id)}
                    className="px-2 text-3xl border border-l-2  hover:bg-customRed hover:text-white rounded-l"
                  >
                    -
                  </button>
                  <p className="px-7  font-semibold">
                    {cartItems[productData._id]}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(productData._id);
                    }}
                    className="px-2 text-3xl border border-r-2  hover:bg-customRed hover:text-white rounded-r"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    addToCart(productData._id);
                    navigate("/cart-page");
                  }}
                  type="button"
                  className="bg-customRed text-white py-1 px-12 rounded"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => addWishList(productData._id)}
                  className={`bg-white h-8 w-8 rounded-full flex items-center justify-center bg`}
                >
                  <PiHeartThin
                    className={`h-6 w-6 ${
                      wishList.includes(productData._id)
                        ? "text-customRed "
                        : "text-gray-500"
                    }`}
                  />
                </button>{" "}
              </div>
              {/* free delivery section */}
              <div className="border border-1 shadow-sm rounded mt-5">
                <div className="flex gap-4 ml-3 mt-4">
                  <TbTruckDelivery className=" text-black  w-10 h-10 p-1" />
                  <div className="">
                    <h1 className="font-semibold">Free Delivery</h1>
                    <Link to="#" className=" font-thin  underline">
                      Enter your postal code for Delivery Availability
                    </Link>
                  </div>
                </div>
                <div className="h-[1px] w-full my-5 bg-black opacity-50"></div>
                <div className="flex gap-4 ml-3 my-4">
                  <MdOutlineKeyboardReturn className=" text-black  w-10 h-10 p-1" />
                  <div className="">
                    <h1 className="font-semibold">Free Delivery</h1>

                    <div className="flex">
                      <p>Free 30 Days Delivery Returns. </p>
                      <Link to="#" className="font-semibold  underline">
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Related Products */}
      <div className="flashSales-section-outer flex justify-center my-20">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-9 w-5 rounded-sm bg-customRed"></div>
            <h1 className="text-customRed  font-semibold">Related Item </h1>
          </div>

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
    </>
  );
}

export default HOC(ProductDetailsPage);
