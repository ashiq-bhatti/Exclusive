import React, { useState } from "react";

function AccountPage() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
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
        <div className="section-inner w-[84%] m-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 my-14">
            <h1 className="text-gray-500">Home / </h1>
            <span>My Account</span>
          </div>
          <div className="flex items-center space-x-2 my-14">
            <h1 className="text-black">Wellcome! </h1>
            <span className="text-customRed">Hussnain</span>
          </div>
        </div>
      </div>

      {/* manage my account & Edit profile section start */}

      <div className="section-inner w-[84%] m-auto lg:flex lg:flex-row lg:justify-between lg:items-center mb-28 flex flex-col ">
        <div className="left-manage-account md:w-[25%] w-[80%] m-auto mb-6">
          <h1 className="text-lg font-semibold">Manage My Account</h1>
          <div className="flex  flex-col  ml-10 my-3  space-y-2 ">
            <p className="text-customRed">My Profile</p>
            <p className="text-gray-500">Adress Book</p>
            <p className="text-gray-500">My Payment Options</p>
          </div>
          <h1 className="text-lg font-semibold">Manage Order</h1>
          <div className="flex  flex-col  ml-10 my-3  space-y-2 ">
            <p className="text-gray-500">My Returns</p>
            <p className="text-gray-500">My Cancellations</p>
          </div>
          <h1 className="text-lg font-semibold">Manage WishList</h1>
          <div className="flex  flex-col  ml-10 my-3  space-y-2 "></div>
        </div>
        <div className="right-edit-profile sm:w-[75%] sm:py-5 sm:px-20 rounded shadow-lg md:w-full w-full py-1 px-3">
          <h1 className="text-customRed text-xl font-semibold">
            Edit Your Profile
          </h1>
          <form onClick={handleSubmit} className="my-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col mb-6 w-[47%] ">
                <label htmlFor="name" className=" mb-2 ">
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  placeholder="Ashiq"
                  onChange={handleChange}
                  value={formData.fname}
                  required
                  className="w-full p-3 bg-customGray border-0  rounded-md"
                />
              </div>
              <div className="flex flex-col mb-6 w-[47%] ">
                <label htmlFor="name" className=" mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  placeholder="Hussain"
                  onChange={handleChange}
                  value={formData.lname}
                  required
                  className="w-full p-3 bg-customGray border-0  rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col mb-6 w-[47%] ">
                <label htmlFor="name" className=" mb-2 ">
                  First Name
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Ashiq"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  className="w-full p-3 bg-customGray border-0  rounded-md"
                />
              </div>
              <div className="flex flex-col mb-6 w-[47%] ">
                <label htmlFor="name" className=" mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Jojer Town, Lahore"
                  onChange={handleChange}
                  value={formData.address}
                  required
                  className="w-full p-3 bg-customGray border-0  rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6  space-y-4">
              <label htmlFor="name" className="">
                Password Change
              </label>
              <input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                onChange={handleChange}
                value={formData.currentPassword}
                required
                className="w-full p-3 bg-customGray border-0  rounded-md"
              />
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                onChange={handleChange}
                value={formData.newPassword}
                required
                className="w-full p-3 bg-customGray border-0  rounded-md"
              />
              <input
                type="password"
                name="confirmNewPassword"
                placeholder="Comfirm New Password"
                onChange={handleChange}
                value={formData.confirmNewPassword}
                required
                className="w-full p-3 bg-customGray border-0  rounded-md"
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="cancel"
                className="py-3 px-9  hover:border   text-black  rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-3 px-9 border  bg-customRed text-white  rounded-md"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AccountPage;