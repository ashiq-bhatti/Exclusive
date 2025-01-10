import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/StoreContext";
import { GrView } from "react-icons/gr";
import { PiHeartThin } from "react-icons/pi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { CiSearch } from "react-icons/ci";
import HOC from "./HOC";

const AllListedProducts = () => {
  const { product_List, addToCart } = useContext(StoreContext);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectedCategories = (category) => {
    if (category === "all") {
      setSelectedCategory(null);
    } else {
      const updatedProducts = product_List.filter(
        (product) => product.category === category
      );
      setSelectedCategory(updatedProducts);
    }
  };

  const productsToDisplay = selectedCategory || product_List;

  const [searchProduct, setSearchProduct] = useState("");
  const handleSearch = (e) => {
    setSearchProduct(e.target.value);
  };
  const searchResults = productsToDisplay.filter(
    (product) =>
      product.title.toLowerCase().includes(searchProduct.toLocaleLowerCase()) ||
      product.category.toLowerCase().includes(searchProduct.toLocaleLowerCase())
  );

  return (
    <>
      <div className="searchBox hidden w-32 lg:flex bg-gray-100 px-2 rounded-md items-center space-x-3">
        <input
          className="bg-gray-100 border-0 outline-none"
          type="text"
          placeholder="Search..."
          value={searchProduct}
          onChange={handleSearch}
        />
        <button type="submit">
          <CiSearch className="text-2xl ml-2" />
        </button>
      </div>
      <button type="button" onClick={() => selectedCategories("all")}>
        All Products
      </button>
      <br />
      <button type="button" onClick={() => selectedCategories("electric")}>
        Electricity
      </button>
      <br />
      <button type="button" onClick={() => selectedCategories("computer")}>
        Computer
      </button>
      <br />
      <button type="button" onClick={() => selectedCategories("medicine")}>
        Medicine
      </button>

      <h1 className="text-customRed font-semibold">All Products</h1>

      <div className="w-[84%] m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <div key={product._id} className="card border-1 space-x-3">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-56 relative bg-gray-100 flex rounded-md p-1">
                    <span className="absolute top-2 left-2 px-2 rounded-sm bg-customRed text-white text-center">
                      -{product.off_percent}
                    </span>
                    <img
                      src={`http://localhost:8000/public/images/${product.image}`}
                      alt=""
                      className="h-32 w-32 m-auto transform hover:scale-110"
                    />
                    <div className="absolute flex flex-col gap-2 top-3 right-3">
                      <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
                        <PiHeartThin />
                      </button>
                      <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center">
                        <Link to={`/product-detail-page/${product._id}`}>
                          <GrView />
                        </Link>
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-black text-white p-2"
                    onClick={() => {
                      addToCart(product._id);
                      toast("Product added to cart");
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
                <div className="space-y-2 font-semibold">
                  <h1>{product.title}</h1>
                  <div className="flex gap-3 font-semibold">
                    <span className="text-customRed">${product.price}</span>
                    <span className="text-gray-400 line-through">
                      ${product.discount_price}
                    </span>
                  </div>
                  <div className="ratingStar flex gap-4">
                    <div className="flex items-center text-customeYellow">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                    </div>
                    <h1 className="text-gray-400">{`(${product.reviews}) `}</h1>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg font-semibold text-center my-7">
              No products available
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default HOC(AllListedProducts);
