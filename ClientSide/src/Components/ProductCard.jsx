import React from "react";
import { GrView } from "react-icons/gr";
import { PiHeartThin } from "react-icons/pi";
import card from "../images/sliderImages/Card.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

import game from "../images/sliderImages/game.png";
import { Link } from "react-router-dom";


function ProductCard(props) {

  return (
    <>
  
      <div className="w-64 card border-1 ">
        <div className="h-56 relative bg-gray-100 flex    rounded-md p-1">
          <span className="absolute top-2 left-2 px-2 rounded-sm bg-customRed text-white text-center ">
            {props.discount}
          </span>
            <img src={game} alt="" className=" h-36 w-36 m-auto" />
          <div className="absolute flex flex-col gap-2 top-3 right-3">
            <button className="bg-white h-8 w-8  rounded-full flex items-center justify-center">
              {" "}
              <PiHeartThin className="" />
            </button>
            <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
              {" "}
            <Link to='/product-detail-page'><GrView /></Link>  
            </button>
            {/* <button className="w-full  bottom-0 left-0  bg-black text-white text-center">
            Add To Cart
          </button> */}
          </div>
          
        </div>

        <div className="space-y-2 font-semibold">
          <h2 className="mt-3">{props.description}</h2>
          <div className="flex gap-3 font-semibold">
            <span className="text-customRed">{props.discountPrice}</span>
            <span className="text-gray-400 line-through">{props.orgPrice}</span>
          </div>
          <div className="ratingStar flex gap-4">
            <div className="flex items-center text-customeYellow">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <h1 className="text-gray-400">{props.rating}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
