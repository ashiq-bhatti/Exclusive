import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobBaskit from "../images/RandomImages/MobBaskit.png";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/register",
        { name, email, password }
      );

      if (response.data.success) {
        toast.success("User registration successful");
        navigate("/login");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          toast.error("User already exists");
        } else if (error.response.status === 500) {
          toast.error("Server error");
        } else {
          toast.error("Unexpected error occurred");
        }
      } else {
        toast.error("Network error or server not reachable");
      }
    }
  };

  return (
    <>
      <div className="outer mt-16 mb-24">
        <div className="inner flex gap-28">
          <div className="left">
            <img src={MobBaskit} alt="" className="rounded-r-md " />
          </div>
          <div className="right">
            <div className="content mt-24">
              <h1
                className="text-4xl font-semibold "
                style={{ wordSpacing: "5px" }}
              >
                Create an account
              </h1>
              <p className="font-medium my-6 ">Enter your details below</p>
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Name"
                  className="w-full my-2  border-gray-500  border-0  border-b-2"
                />{" "}
                <br />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="w-full my-2  border-gray-500  border-0  border-b-2"
                  placeholder="Email or Phone Number"
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  className="w-full my-2  border-gray-500  border-0  border-b-2"
                />
                <br />
                <button
                  type="submit"
                  className="bg-customRed text-center text-white w-full rounded-md py-3 my-5"
                >
                  Create Accoutnt
                </button>
                <br />
                <button
                  type="button "
                  className=" flex gap-4 border border-gray-300 text-center text-md w-full rounded-md py-3 px-9"
                >
                  <FcGoogle className="text-2xl" />
                  <p> Sign Up With Google</p>
                </button>
                <div className="flex space-x-4 mt-10">
                  <p>Already have an account?</p>
                  <Link
                    to="/login"
                    className="font-medium  border-b border-gray-500"
                  >
                    Log In
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
