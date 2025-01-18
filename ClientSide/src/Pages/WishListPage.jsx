import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import HOC from "../Components/HOC";
import { PiHeartThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { StoreContext } from "../Context/StoreContext";
import toast from "react-hot-toast";
function WishListPage() {
  const { addToCart, token } = useContext(StoreContext);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishList, setWishList] = useState([]);

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
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/wishlist/get_wish_list",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setWishlist(response.data.findUser.wishlist);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [addWishList]);

  return (
    <>
      <div className="flashSales-section-outer flex justify-center mt-9">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex justify-between my-7">
            <div className="flex items-center gap-20">
              <h1 className="text-2xl font-semibold tracking-wider">
                Wishlist ({wishlist.length})
              </h1>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="border border-gray-400 px-6 py-2 rounded-md font-semibold mr-4"
              >
                Move To All Bag
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="">
            {loading ? (
              <p>Loading...</p>
            ) : wishlist.length > 0 ? (
              <div className="flex gap-8 mt-4">
                {wishlist.map((product) => (
                  <div
                    key={product._id}
                    className="w-64  card border-1 space-x-3 group"
                  >
                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                      <div className="h-52 relative flex rounded-md p-1">
                        <span className="absolute top-2 left-2 px-2 rounded-sm bg-customRed text-white text-center">
                          -{product.off_percent || "0%"}
                        </span>
                        <img
                          src={`http://localhost:8000/public/images/${product.image}`}
                          alt={product.title}
                          className="h-32 w-32 m-auto transform hover:scale-110"
                        />
                        <div className="absolute flex flex-col gap-2 top-3 right-3">
                          <button
                            onClick={() => addWishList(product._id)}
                            className={`bg-white h-8 w-8 rounded-full flex items-center justify-center bg`}
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
                        onClick={() => {
                          addToCart(product._id);
                          toast("Product added to cart");
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                    <div className="space-y-2 font-semibold">
                      <h1>{product.title}</h1>
                      <div className="flex gap-3">
                        <span className="text-customRed">${product.price}</span>
                        <span className="text-gray-400 line-through">
                          ${product.discount_price || product.price}
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
                        <h1 className="text-gray-400">{`(${
                          product.reviews || 0
                        })`}</h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No items in your wishlist.</p>
            )}
          </div>
        </div>
      </div>

      {/* Just for you */}
      <div className="flashSales-section-outer flex justify-center my-20 ">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex justify-between my-7">
            <div className="flex items-center gap-3">
              <div className="h-9 w-5 rounded-sm bg-customRed"></div>
              <h1 className=" text-2xl font-semibold tracking-wider">
                Just For You
              </h1>
            </div>

            <button
              type="button"
              className="border border-gray-400 mr-5 px-10 py-3 rounded-md font-semibold"
            >
              See All
            </button>
          </div>

          {/* Example Cards */}
          <div>
            <div className="flex gap-8 mt-4">
              {/* Replace with real suggestions */}
              <ProductCard
                imgsrc="./src/images/FlashSale/game.png"
                description="HAVIT HV-G92 Gamepad"
                discountPrice="$120"
                orgPrice="$120"
                rating="(88)"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HOC(WishListPage);
