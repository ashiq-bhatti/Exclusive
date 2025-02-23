import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobBaskit from "../images/RandomImages/MobBaskit.png";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import toast from "react-hot-toast";
import { StoreContext } from "../Context/StoreContext";
import HOC from "../Components/HOC";

function LoginPage() {
  const { setToken  ,backend_url} = useContext(StoreContext);

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
      const request = await axios.post(
        `${backend_url}/api/auth/user-login`,
        {
          email,
          password,
        }
      );
      const response = request.data;

      if (response.success) {
        setToken(response.token);
        localStorage.setItem("token", response.token);
        toast.success("Login successful");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
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
      <div className="outer mt-16 mb-24 w-[90%] lg:w-[80%] mx-auto lg:mx-0">
        <div className="inner flex flex-col lg:flex-row gap-12 lg:gap-36 items-center">
          <div className="left w-full lg:w-1/2">
            <img
              src={MobBaskit}
              alt=""
              className="rounded-md lg:rounded-none lg:rounded-r-md w-full"
            />
          </div>

          <div className="right w-full lg:w-1/2">
            <div className="content  mt-6 lg:mt-2 text-center lg:text-left">
              <h1
                className="text-3xl lg:text-4xl font-semibold"
                style={{ wordSpacing: "5px" }}
              >
                Log in to Exclusive
              </h1>
              <p className="font-medium my-4 lg:my-6">
                Enter your details below
              </p>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  className="w-full my-2 border-gray-500 border-0 border-b-2"
                  placeholder="Email or Phone Number"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  className="w-full my-2 border-gray-500 border-0 border-b-2"
                />
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

export default HOC(LoginPage);
