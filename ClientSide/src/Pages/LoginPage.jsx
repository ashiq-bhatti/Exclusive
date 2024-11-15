import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MobBaskit from "../images/RandomImages/MobBaskit.png";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import toast from "react-hot-toast";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const request = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });
      const response= request.data;

      if (response.data.success) {
        toast.success("Login successful");
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          toast.error("User not found");
        } else if (error.response.status === 401) {
          toast.error("Invalid password");
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
          <div className="right ">
            <div className="content mt-44">
              <h1
                className="text-4xl font-semibold "
                style={{ wordSpacing: "5px" }}
              >
                Log in to Exclusive
              </h1>
              <p className="font-medium my-6 ">Enter your details below</p>
              <form onSubmit={handleSubmit}>
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
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
