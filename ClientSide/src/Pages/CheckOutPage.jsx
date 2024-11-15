import React, { useState } from "react";
import game from "../images/sliderImages/game.png";
import LED from "../images/RandomImages/LED.png";

import visaLogo from "../images/RandomImages/visaLogo.png";
import masterLogo from "../images/RandomImages/masterLogo.png";
import paypalLogo from "../images/RandomImages/paypalLogo.png";

function CheckoutPage() {
  const [formData, setFormData] = useState({
    fname: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: "",
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
      <div className="section-outer flex  ">
        <div className="section-inner w-[84%] m-auto ">
          <div className="flex items-center space-x-2 my-14">
            <h1 className="text-gray-500">Account / </h1>
            <h1 className="text-gray-500">My Account / </h1>
            <h1 className="text-gray-500">Product / </h1>
            <h1 className="text-gray-500">View Cart / </h1>
            <span>CheckOut</span>
          </div>
        </div>
      </div>

      {/* Billing detail section */}

      <div className="section-outer flex justify-center ">
        <div className="section-inner w-[84%] m-auto mb-28">
          <h1 className="text-black text-3xl mb-9 font-semibold">
            Billing Detail{" "}
          </h1>
          <div className="flex  justify-between">
            <div className="formData-box w-[40%]">
              <form action="">
                <div className="flex flex-col mb-6 ">
                  <label htmlFor="name" className="text-gray-400 mb-2">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fname"
                    onChange={handleChange}
                    value={formData.fname}
                    className="w-full p-2 bg-customGray border-0  rounded-md"
                  />
                </div>
                <div className="flex flex-col mb-6 ">
                  <label htmlFor="name" className="text-gray-400 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    onChange={handleChange}
                    value={formData.companyName}
                    className="w-full p-2 bg-customGray border-0  rounded-md"
                  />
                </div>
                <div className="flex flex-col mb-6 ">
                  <label htmlFor="name" className="text-gray-400 mb-2">
                    Street Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    onChange={handleChange}
                    value={formData.streetAddress}
                    className="w-full p-2 bg-customGray border-0  rounded-md"
                  />
                </div>
                <div className="flex flex-col mb-6 ">
                  <label htmlFor="name" className="text-gray-400 mb-2">
                    Apartment, flate, etc, {"(Optional)"}
                  </label>
                  <input
                    type="text"
                    name="apartment"
                    onChange={handleChange}
                    value={formData.apartment}
                    className="w-full p-2 bg-customGray border-0  rounded-md"
                  />
                </div>
                <div className="flex flex-col mb-6 ">
                  <label htmlFor="name" className="text-gray-400 mb-2">
                    Town / City<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={formData.city}
                    className="w-full p-2 bg-customGray border-0  rounded-md"
                  />
                </div>
                <div className="flex flex-col mb-6 ">
                  <label htmlFor="name" className="text-gray-400 mb-2">
                    Phone Number<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    className="w-full p-2 bg-customGray border-0  rounded-md"
                  />
                </div>
                <div className="flex flex-col mb-6 ">
                  <label htmlFor="name" className="text-gray-400 mb-2">
                    Email<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                    className="w-full p-2 bg-customGray border-0  rounded-md"
                  />
                </div>
                <div className=" mb-3 ">
                  <div className="flex  items-center gap-4  ">
                    <input
                      type="checkbox"
                      name="saveInfo"
                      onChange={handleChange}
                      value={formData.saveInfo}
                      className=" p-2 bg-customGray border-0  rounded"
                    />
                    <label htmlFor="name" className=" text-lg">
                      Save this information for faster check-out next time{" "}
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="billDetal-box  w-[47%]">
              <div className="w-[70%]">
                <div className="flex justify-between items-cente  my-7  ">
                  <div className="flex items-center gap-5">
                    <img src={game} alt="Loading.." className="h-14 w-14" />
                    <h1>LCD Monitor</h1>
                  </div>
                  <h1>$750</h1>
                </div>
                <div className="flex justify-between items-cente  pb-2 my-4  ">
                  <div className="flex items-center gap-5">
                    <img src={LED} alt="Loading.." className="h-12 w-12" />
                    <h1>LCD Monitor</h1>
                  </div>
                  <h1>$750</h1>
                </div>
                <div className="flex justify-between items-center border-b my-5 border-gray-400 pb-2 w-full">
                  <p className=" text-lg">Subtotal:</p>
                  <p className="text-lg">$550</p>
                </div>
                <div className="flex justify-between items-center border-b my-4 border-gray-400 pb-2 w-full">
                  <p className="text-lg  ">Sipping:</p>
                  <p className="text-lg">Free</p>
                </div>
                <div className="flex justify-between items-center  pb-2 w-full">
                  <p className="text-lg ">Total:</p>
                  <p className="text-lg">$550</p>
                </div>
                <div className="flex justify-between items-center mt-4  pb-2 w-full">
                  <div className="flex items-center gap-4">
                    <input type="radio" />
                    <p className="text-lg">Bank</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={visaLogo} alt="Loading.." className="h-10 w-16" />
                    <img
                      src={masterLogo}
                      alt="Loading.."
                      className="h-10 w-16"
                    />
                    <img
                      src={paypalLogo}
                      alt="Loading.."
                      className="h-10 w-16"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <input type="radio" />
                  <p className="text-lg">Chash on delivery</p>
                </div>
              </div>
              <div className="left">
                <form
                  onClick={handleSubmit}
                  className="flex items-center gap-6 my-6"
                >
                  <input
                    type="text"
                    name="couponNum"
                    onChange={handleChange}
                    value={formData.coupon}
                    className=" border border-black border-opacity-80 px-9 py-[10px] rounded-md"
                    placeholder="Coupon Code"
                  />
                  <button
                    type="submit"
                    className="py-3 px-10 border  bg-customRed text-white  rounded-md"
                  >
                    Apply Coupon
                  </button>
                </form>
                <button
                  type="submit"
                  className="py-3 px-12  border  bg-customRed text-white  rounded-md"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
