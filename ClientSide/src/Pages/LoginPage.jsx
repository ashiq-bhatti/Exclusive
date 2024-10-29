import React,{useState} from "react";
import { Link } from "react-router-dom";
import MobBaskit from "../images/RandomImages/MobBaskit.png";
import { FcGoogle } from "react-icons/fc";
function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
                />{" "}
                <br />
                <button
                  type="submit"
                  className="bg-customRed text-center text-white w-full rounded-md py-3 my-5"
                >
                  Log In
                </button>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
