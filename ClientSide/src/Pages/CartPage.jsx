import React, { useReducer, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import game from "../images/sliderImages/game.png";
import LED from "../images/RandomImages/LED.png";

import { useNavigate } from "react-router-dom";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
};
function CartPage() {
const nevigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
const [formData, setFormData] = useState({
    couponNum:''
});
const handleChange =(e)=>{
    const {name,value}= e.target;
    setFormData({...formData , [name]:value});
}
const handleSubmit =(e)=>{
e.preventDefault();
    console.log(formData);
}
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

      <div className="flashSales-section-outer flex justify-center ">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex justify-between items-center py-5 px-12 shadow-md shadow-slate-100 my-4  ">
            <h1>Product</h1>
            <h1>Quantity</h1>
            <h1>Price</h1>
            <h1>Subtotal</h1>
          </div>
          <div className="flex   my-10 shadow-md shadow-slate-100  ">
            <ul className="flex justify-between items-center py-2  px-12  w-full">
              <li className="flex items-center gap-5">
                <img src={game} alt="Loading.." className="h-14 w-14" />
              </li>
              <li>$650 </li>
              <li>
                <div className="countBtn flex gap-4 py-2 px-3 items-center rounded  border-2">
                  <p className="  font-semibold">{state}</p>
                  <div className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => dispatch({ type: "increment" })}
                      className=""
                    >
                      <FaAngleUp className="text-xs" />
                    </button>

                    <button
                      type="button"
                      onClick={() => dispatch({ type: "decrement" })}
                    >
                      <FaAngleDown className="text-xs" />
                    </button>
                  </div>
                </div>
              </li>
              <li>$650</li>
            </ul>
          </div>
          <div className="flex   my-10 shadow-md shadow-slate-100  ">
            <ul className="flex justify-between items-center py-2 px-12  w-full">
              <li className="flex items-center gap-5">
              <img src={LED} alt="Loading.." className="h-12 w-12" />
              </li>
              <li>$650 </li>
              <li>
                <div className="countBtn flex gap-4 py-2 px-3 items-center rounded  border-2">
                  <p className="  font-semibold">{state}</p>
                  <div className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => dispatch({ type: "increment" })}
                      className=""
                    >
                      <FaAngleUp className="text-xs" />
                    </button>

                    <button
                      type="button"
                      onClick={() => dispatch({ type: "decrement" })}
                    >
                      <FaAngleDown className="text-xs" />
                    </button>
                  </div>
                </div>
              </li>
              <li>$650</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Return Button */}

      <div className="flashSales-section-outer flex justify-center ">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex justify-between items-center ">
            <button className="py-3 px-10 border  border-black border-opacity-55 font-semibold rounded-md">
              Return To Shop
            </button>
            <button className="py-3 px-10 border  border-black border-opacity-55 font-semibold rounded-md">
              Update Cart
            </button>
          </div>
        </div>
      </div>

      {/* coupon section */}
      <div className="flashSales-section-outer flex justify-center mt-14 mb-32 ">
        <div className="flashSales-section-inner flex  justify-between w-[84%] m-auto ">
            <div className="left">
              <form onClick={handleSubmit} className="flex justify-between items-center gap-6">
                <input
                  type="text"
                  name="couponNum"
                  onChange={handleChange}
                  value={formData.coupon}
                  className=" border border-black border-opacity-80 px-9 py-[10px] rounded-md"
                  placeholder="Coupon Code"
                />
                <button type="submit" className="py-3 px-12 border  bg-customRed text-white  rounded-md">
                  Apply Coupon
                </button>
              </form>
            </div>
            <div className=" right-cart-totel border-2  border-black border-opacity-55 rounded-md p-5 py-6">
              <h1 className="text-lg font-semibold mb-2">Cart Total </h1>
              <div className="flex justify-between items-center border-b my-3 border-gray-400 pb-2 w-full">
                <p className="mr-72 ">Subtotal:</p>
                <p>$550</p>
              </div>
              <div className="flex justify-between items-center border-b my-3 border-gray-400 pb-2 w-full">
                <p className="mr-72 ">Sipping:</p>
                <p>Free</p>
              </div>
              <div className="flex justify-between items-center  pb-2 w-full">
                <p className="mr-64 ">Total:</p>
                <p className="">$550</p>
              </div>
              <button onClick={()=>nevigate('/check-out-page')} type="submit" className="w-[66%] flex m-auto mt-3 py-3 px-10 border  bg-customRed text-white font-semibold rounded-md">
                Proceed to chekout
              </button>
            </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
