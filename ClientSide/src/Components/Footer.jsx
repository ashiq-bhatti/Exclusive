import React from "react";
import { Link } from "react-router-dom";
import { VscSend } from "react-icons/vsc";
import { RiFacebookLine } from "react-icons/ri";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";

import Qrcode from "../images/RandomImages/Qrcode.png";
import appStore from "../images/RandomImages/appStore.png";
import googleStore from "../images/RandomImages/googleStore.png";

function Footer() {
  return (
    <>
      <div className="footerOuter bg-black">
        <div className="footerInner w-[84%] m-auto  md:flex flex-wrap justify-between py-12 pr-16">
          <div className="exclusive text-white ">
            <Link to="/" className="font-semibold text-2xl  ">
              Exclusive
            </Link>
            <br />
            <Link to="#" className="font-semibold  ">
              <h1 className="py-2">Subscribe</h1>
            </Link>
            <p>Get 10% off your first order</p>
            <div className="searchBox border-2 border-white  bg-black flex px- rounded-md items-center space-x-2 pr-3 my-4 ">
              <form className="flex items-center ">
                <input
                  type="email"
                  className="bg-black border-0 "
                  placeholder="Enter your email "
                />
                <button type="submit">
                  {" "}
                  <VscSend className="text-2xl  " />
                </button>
              </form>
            </div>
          </div>
          <div className="suptort text-white">
            <h1 className="font-semibold text-lg mb-3 ">Support</h1>
            <p>
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </p>
            <p className="  py-4">exclusive@gmail.com</p>
            <p>+923029047292</p>
          </div>
          <div className="account text-white">
            <h1 className="font-semibold text-lg mb-3">Account</h1>
            <ul className="text-white ">
              <li className="py-2">
                <Link to="#">My Account</Link>
              </li>
              <li className="py-2">
                <Link to="register">Login / Register</Link>
              </li>
              <li className="py-2">
                <Link to="#">Chart</Link>
              </li>
              <li className="py-2">
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li className="py-2">
                <Link to="#">Shop</Link>
              </li>
            </ul>
          </div>
          <div className="quickLink text-white">
            <h1 className="font-semibold text-lg mb-3">Quick Link</h1>
            <ul className="text-white">
              <li className="py-2">
                <Link to="#">Privacy Policy</Link>
              </li>
              <li className="py-2">
                <Link to="#">Terms Of Use</Link>
              </li>
              <li className="py-2">
                <Link to="#">FAQ</Link>
              </li>
              <li className="py-2">
                <Link to="/contact">Contact</Link>
              </li>
             
            </ul>
          </div>
          <div className="downloadApp ">
            <h1 className="text-white font-semibold text-lg mb-3">
              Download App
            </h1>
            <ul className="text-white">
              <li className="py-2 text-gray-600 text-sm">
                Save $3 with App New User Only
              </li>
              <li className="py-2">
                <div className="flex gap-3">
                  <div className="qRCode">
                    <img src={Qrcode} alt="" />
                  </div>
                  <div className="googleApp ">
                    <img src={appStore} alt="" className="mb-3" />
                    <img src={googleStore} alt="" />
                  </div>
                </div>
              </li>

              <li className="py-2">
                <ul className="flex gap-8">
                  <li>
                    <Link to="#">
                      <RiFacebookLine className="text-xl" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <LuTwitter className="text-xl" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <FaInstagram className="text-xl" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=''
                    >
                      <RiLinkedinLine className="text-xl" />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright border-t-[1px] border-gray-900 text-slate-900 text-center">
          <p className="p-2"> Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
