import { StoreContext } from "../Context/StoreContext";
import React, { useContext, useState } from "react";
import { GrView } from "react-icons/gr";
import { PiHeartThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const OurProducts = () => {
  const { product_List, addToCart } = useContext(StoreContext);
  const [viewAllProducts, setViewAllProducts] = useState(false);
  const displayProducts = viewAllProducts
    ? product_List
    : product_List.slice(0, 8);
    const ourProducts = product_List.filter((product)=>product.eventCategory && product.eventCategory === 'Our Products');
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
        </div>
      </div>

      <div className="w-[84%] m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {ourProducts ? (
            ourProducts.map((product) => (
              <div key={product._id} className="w-64 card border-1 space-x-3">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-56 relative bg-gray-100 flex rounded-md p-1">
                    <span className="absolute top-2 left-2 px-2 rounded-sm bg-customRed text-white text-center">
                      -{product.off_percent}
                    </span>
                    <img
                      src={`http://localhost:8000/public/images/${product.image}`}
                      alt=""
                      className="h-32 w-32 m-auto transform hover:scale-110"
                    />
                    <div className="absolute flex flex-col gap-2 top-3 right-3">
                      <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
                        <PiHeartThin />
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
                    className="w-full bg-black text-white p-2"
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
