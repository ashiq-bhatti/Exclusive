import React, { useState ,useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import MobBaskit from "../images/RandomImages/MobBaskit.png";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import axios from "axios";
import HOC from "../Components/HOC";
import { StoreContext } from "../Context/StoreContext";


function RegisterPage() {
  const navigate = useNavigate();
  const {  backend_url} = useContext(StoreContext);

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
        `${backend_url}/api/auth/user-register`,
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
      <div className="outer mt-16 mb-24 w-[90%] lg:w-[80%] mx-auto lg:mx-0">
        <div className="inner flex flex-col lg:flex-row gap-12 lg:gap-36 items-center">
          <div className="left w-full lg:w-2/3">
            <img
              src={MobBaskit}
              alt=""
              className="rounded-md lg:rounded-none lg:rounded-r-md w-full "
            />
          </div>

          <div className="right w-full lg:w-1/3">
            <div className="content mt-6 lg:mt-2 text-center lg:text-left">
              <h1
                className="text-3xl lg:text-4xl font-semibold"
                style={{ wordSpacing: "5px" }}
              >
                Create an account
              </h1>
              <p className="font-medium my-4 lg:my-6">
                Enter your details below
              </p>
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  placeholder="Name"
                  className="w-full my-2 border-gray-500 border-0 border-b-2"
                />
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
                  Create Account
                </button>
                <button
                  type="button"
                  className="flex gap-4 border border-gray-300 text-center text-md w-full rounded-md py-3 px-6 lg:px-1 items-center justify-center"
                >
                  <FcGoogle className="text-2xl" />
                  <p>Sign Up With Google</p>
                </button>
                <div className="flex justify-center lg:justify-start space-x-2 mt-6">
                  <p>Already have an account?</p>
                  <Link
                    to="/login"
                    className="font-medium border-b border-gray-500"
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

export default HOC(RegisterPage);
