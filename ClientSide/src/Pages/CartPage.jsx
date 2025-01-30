import React, { useContext, useReducer, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { StoreContext } from "../Context/StoreContext";
import HOC from "../Components/HOC";

function CartPage() {
  const {
    cartItems,
    product_List,
    addToCart,
    removeItemFromCart,
    totelAmoutOfCart,
    backend_url,
  } = useContext(StoreContext);
  const nevigate = useNavigate();

  const [formData, setFormData] = useState({
    couponNum: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="flashSales-section-outer flex justify-center ">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex items-center space-x-1 my-14">
            <h1 className="text-gray-500">Home /</h1>
            <span>Cart</span>
          </div>
        </div>
      </div>

      <div className="flashSales-section-outer flex justify-center">
        <div className="flashSales-section-inner w-[90%] lg:w-[84%] m-auto">
          {/* Header Row */}
          <div className="hidden md:grid grid-cols-4 gap-4 py-5 px-6 lg:px-12 shadow-md shadow-slate-100 my-4">
            <h1 className="text-left">Product</h1>
            <h1 className="text-center">Price</h1>
            <h1 className="text-center">Quantity</h1>
            <h1 className="text-right">Subtotal</h1>
          </div>

          {product_List && product_List.length > 0 ? (
            product_List.map((product) => {
              if (cartItems[product._id] > 0) {
                return (
                  <div
                    key={product._id}
                    className="grid grid-cols-4 items-center text-center gap-4 py-4 px-4 sm:px-6 lg:px-12 my-6 shadow-md shadow-slate-100"
                  >
                    {/* Product Info */}
                    <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                      <RxCross2
                        onClick={() => {
                          removeItemFromCart(product._id);
                          toast.success("Item Removed Successfully");
                        }}
                        className="bg-customRed rounded-full text-white cursor-pointer text-xs sm:text-sm shrink-0"
                      />
                      <img
                        src={`http://localhost:8000/public/images/${product.images[0]}`}
                        alt="Product"
                        className="h-12 w-12 sm:h-14 sm:w-14 object-contain shrink-0"
                      />
                      <span className="text-xs sm:text-sm md:text-base truncate">
                        {`${product.title.slice(0, 10)}${
                          product.title.length > 10 ? "..." : ""
                        }`}
                      </span>
                    </div>

                    {/* Product Price */}
                    <div className="text-xs sm:text-sm md:text-base whitespace-nowrap">
                      ${product.price}
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex justify-center min-w-0">
                      <div className="countBtn flex gap-2 sm:gap-4 py-2 px-2 sm:px-3 items-center rounded border-2">
                        <p className="font-semibold text-xs sm:text-sm md:text-base">
                          {cartItems[product._id]}
                        </p>
                        <div className="flex flex-col">
                          <button
                            type="button"
                            onClick={() => {
                              addToCart(product._id);
                            }}
                          >
                            <FaAngleUp className="text-xs sm:text-sm" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeItemFromCart(product._id)}
                          >
                            <FaAngleDown className="text-xs sm:text-sm" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="text-right sm:text-sm md:text-base whitespace-nowrap">
                      ${product.price * cartItems[product._id]}
                    </div>
                  </div>
                );
              }
            })
          ) : (
            <p className="text-center my-12 text-sm md:text-base">
              No items in the cart
            </p>
          )}
        </div>
      </div>

      {/* Return Button */}

      <div className="flashSales-section-outer flex justify-center ">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex justify-between items-center ">
            <button
              onClick={() => nevigate("/")}
              className="py-2 px-5 md:py-3 md:px-10 border  border-black border-opacity-55 font-semibold rounded-md"
            >
              Return To Shop
            </button>
            <button className="py-2 px-5 md:py-3 md:px-10 border  border-black border-opacity-55 font-semibold rounded-md">
              Update Cart
            </button>
          </div>
        </div>
      </div>

      {/* coupon section */}

      <div className="flashSales-section-outer flex justify-center mt-14 mb-32 ">
        <div className="flashSales-section-inner  justify-between flex flex-col  md:flex-row  w-[84%] m-auto ">
          <div className="left w-full md:w-[40%]">
            <form
              onClick={handleSubmit}
              className="flex md:flex-col md:items-start lg:flex-row items-center justify-between gap-6 "
            >
              <input
                type="text"
                name="couponNum"
                onChange={handleChange}
                value={formData.coupon}
                className=" border border-black border-opacity-80 w-40 md:w-auto lg:w-36   rounded-md"
                placeholder="Coupon Code"
              />
              <button
                type="submit"
                className=" p-2  lg:py-3 lg:px-5 xl:px-10 border  bg-customRed text-white  rounded-md"
              >
                Apply Coupon
              </button>
            </form>
          </div>
          <div className=" right-cart-totel w-full md:w-[47%] border-2  border-black border-opacity-55 rounded-md mt-6 p-5 py-6">
            <h1 className="text-lg font-semibold mb-2">Cart Total </h1>
            <div className="flex justify-between items-center border-b my-3 border-gray-400 pb-2 w-full">
              <p className=" ">Subtotal:</p>
              <p>${totelAmoutOfCart()}</p>
            </div>
            <div className="flex justify-between items-center border-b my-3 border-gray-400 pb-2 w-full">
              <p className=" ">Sipping:</p>
              <p>${3}</p>
            </div>
            <div className="flex justify-between items-center  pb-2 w-full">
              <p className="">Total:</p>
              <p className="">${totelAmoutOfCart() + 3}</p>
            </div>
            <div className=" flex justify-center ">
              <button
                onClick={() => nevigate("/check-out-page")}
                type="submit"
                className=" mt-3 py-3 px-5 text-center border  bg-customRed text-white font-semibold rounded-md"
              >
                Proceed to chekout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HOC(CartPage);
