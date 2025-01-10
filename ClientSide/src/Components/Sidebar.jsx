import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/StoreContext";

const Sidebar = () => {
  const { product_List, addToCart } = useContext(StoreContext);

  const [filterProduct, setFilterProduct] = useState(null);

  const filterProducts = (category) => {
    if (category === "all") {
      setFilterProduct(null);
    } else {
      const updatedProducts = product_List.filter(
        (product) => product.category === category
      );
      setFilterProduct(updatedProducts);
    }
  };

  const productsToDisplay = filterProduct || product_List;
  return (
    <>
      <div className="menue  border-r text-lg pr-6 ">
        <ul className="mt-10">
          <li>
            <Link to="#" className="flex items-center">
              <p>Woman's Feshion</p>{" "}
              <RiArrowDropRightLine className="text-3xl ml-14" />
            </Link>
          </li>
          <li className="flex items-center ">
            <Link to="#" className="flex items-center">
              {" "}
              <p> Men's Feshion</p>{" "}
              <RiArrowDropRightLine className="text-3xl ml-20" />
            </Link>
          </li>
          <li className="pt-2">
            <Link to="#"> Electronics </Link>
          </li>
          <li className="pt-2">
            <Link to="#"> Home & Lifestyle </Link>
          </li>
          <li className="pt-2">
            <Link to="#"> Medicine </Link>
          </li>
          <li className="pt-2">
            <Link to="#"> Sport & Outdoor </Link>
          </li>
          <li className="pt-2">
            <Link to="#"> Boy's & Toyes </Link>
          </li>
          <li className="pt-2">
            <Link to="#"> Groceries & Pets </Link>
          </li>
          <li className="pt-2">
            <Link to="#"> Health & Beauty</Link>
          </li>
        </ul>
        <button type="button" onClick={() => filterProducts("all")}>
          All Products
        </button>
        <br />
        <button type="button" onClick={() => filterProducts("electric")}>
          Electricity
        </button>
        <br />
        <button type="button" onClick={() => filterProducts("computer")}>
          Computer
        </button>
        <br />
        <button type="button" onClick={() => filterProducts("medicine")}>
          Medicine
        </button>
      </div>
    </>
  );
};

export default Sidebar;