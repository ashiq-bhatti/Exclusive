import { StoreContext } from "../Context/StoreContext";
import React, { useContext, useState } from "react";
import { GrView } from "react-icons/gr";
import { PiHeartThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
const OurProducts = () => {
  const { product_List, addToCart, token ,backend_url} = useContext(StoreContext);
  const [viewAllProducts, setViewAllProducts] = useState(false);
  const [wishList, setWishList] = useState([]);

  const ourProducts = product_List.filter(
    (product) =>
      product.eventCategory && product.eventCategory === "Our Products"
  );
  const displayProducts = viewAllProducts
    ? ourProducts
    : ourProducts.slice(0, 8);

  const addWishList = async (productId) => {
    try {
      if (!token) {
        toast.error("Please login to add to wishlist");
        return;
      }

      const response = await axios.put(
        `${backend_url}/api/wishlist/add_to_wish_list`,
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
    <>
      <div className="flashSales-section-outer flex justify-center mt-20">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex gap-3 items-center">
            <div className="h-9 w-5 rounded-sm bg-customRed"></div>
            <h1 className="text-customRed  font-semibold">Our Products </h1>
          </div>
          <div className="flex justify-between my-7">
            <div className="flex items-center gap-20">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold tracking-wider">
                Explore Our Prducts
              </h1>
            </div>
            <div className="flex gap-2">
              <div className="bg-gray-100 h-6 w-6 md:h-11 md:w-11  rounded-full flex items-center justify-center">
                {" "}
                <FaArrowLeft className="text-sm" />
              </div>
              <div className="bg-gray-100 h-6 w-6 md:h-11 md:w-11 rounded-full flex items-center justify-center">
                {" "}
                <FaArrowRight className="text-sm"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[84%] m-auto">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayProducts ? (
            displayProducts.map((product) => (
              <div key={product._id} className="card border-1  space-x-3 group">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-52 relative bg-gray-100 flex rounded-md p-1">
                    <span className="absolute top-2 left-2 px-2 rounded-sm bg-customRed text-white text-center">
                      -{product.off_percent}
                    </span>
                    <div className="flex items-center justify-center w-full h-full">
                      <img
                        src={`${backend_url}/public/images/${product.images[0]}`}
                        alt="Product"
                        className="w-30 h-36 transform hover:scale-110"
                      />
                    </div>
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
                      <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
                        <Link to={`/product-detail-page/${product._id}`}>
                          <GrView />
                        </Link>
                      </button>
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
                  <h1>{product .title && product .title.length >70 ? product .title.slice(0,70)+'...': product .title }</h1>
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
                    <h1 className="text-gray-400">{`(${product.reviews}) `}</h1>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg font-semibold text-center my-7">
              No products available
            </p>
          )}
        </div>
      </div>
      <div className="text-center text-white mt-12">
        <button
          className=" bg-customRed py-3 px-10  rounded-sm  "
          onClick={() => setViewAllProducts(!viewAllProducts)}
        >
          {viewAllProducts ? "View Less Products" : "View All Products"}
        </button>
      </div>
    </>
  );
};

export default OurProducts;
