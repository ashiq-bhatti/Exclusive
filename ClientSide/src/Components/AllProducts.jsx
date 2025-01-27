import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../Context/StoreContext";
import { GrView } from "react-icons/gr";
import { PiHeartThin } from "react-icons/pi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import HOC from "./HOC";
import { useLocation } from "react-router-dom";
import axios from "axios";

const AllListedProducts = () => {
  const { product_List, addToCart, token } = useContext(StoreContext);
  const location = useLocation();
  const [productsByCategory, setProductsByCategory] = useState(product_List);
  const [currentCategory, setCurrentCategory] = useState("All Products");
  const [wishList, setWishList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsByCategory.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nPage = Math.ceil(productsByCategory.length / productsPerPage);
  const paginationNumbers = [...Array(nPage + 1).keys()].slice(1);
  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const search = queryParams.get("search");

    if (search) {
      const filtered = product_List.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setProductsByCategory(filtered);
      setCurrentCategory(`Search results for "${search}"`);
    } else if (category && category !== "all") {
      const filtered = product_List.filter(
        (product) => product.category === category
      );
      setProductsByCategory(filtered);
      setCurrentCategory(category);
    } else {
      setProductsByCategory(product_List);
      setCurrentCategory("All Products");
    }
  }, [location.search, product_List]);

  const addWishList = async (productId) => {
    try {
      if (!token) {
        toast.error("Please login to add to wishlist");
        return;
      }

      const response = await axios.put(
        "http://localhost:8000/api/wishlist/add_to_wish_list",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setWishList(response.data.user.wishlist);
      toast.success(response.data.message);
    } catch (error) {
      console.error("Failed to add to wishlist:", error.message);
    }
  };
  return (
    <>
      <div className="w-[84%] m-auto my-12">
        <h1 className="text-customRed font-semibold my-10 ">
          {currentCategory} ({productsByCategory.length} products)
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div key={product._id} className="card border-1 space-x-3">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-56 relative bg-gray-100 flex rounded-md p-1">
                    <span className="absolute top-2 left-2 px-2 rounded-sm bg-customRed text-white text-center">
                      -{product.off_percent}
                    </span>
                    <div className="flex items-center justify-center w-full h-full">
                      <img
                        src={`http://localhost:8000/public/images/${product.images[0]}`}
                        alt="Product"
                        className="w-36 h-40 transform hover:scale-110"
                      />
                    </div>
                    <div className="absolute flex flex-col gap-2 top-3 right-3">
                      <button
                        onClick={() => addWishList(product._id)}
                        className={`bg-white h-8 w-8 rounded-full flex items-center justify-center bg`}
                      >
                        <PiHeartThin
                          className={`h-6 w-6 ${
                            wishList.includes(product._id)
                              ? "text-customRed "
                              : "text-gray-500"
                          }`}
                        />
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

      {productsByCategory.length > 8 && (
        <div className="flex justify-center items-center gap-2 my-16">
          <button
            className="px-3 py-1 bg-gray-300 rounded"
            onClick={prePage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {paginationNumbers.map((number) => (
            <button
              key={number}
              className={`px-3 py-1 rounded ${
                currentPage === number
                  ? " bg-customRed text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => changeNumber(number)}
            >
              {number}
            </button>
          ))}
          <button
            className="px-3 py-1 bg-gray-300 rounded"
            onClick={nextPage}
            disabled={currentPage === nPage}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default HOC(AllListedProducts);
