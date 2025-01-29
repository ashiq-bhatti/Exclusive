import React, { useEffect, useContext, useState } from "react";
import { GrView } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { PiHeartThin } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { StoreContext } from "../Context/StoreContext";
import HOC from "../Components/HOC";

function ProductDetailsPage() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const handleToggle = () => {
    setShowFullDescription(!showFullDescription);
  };
  const { product_List, cartItems, addToCart, removeItemFromCart, token,backend_url } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});
  const [wishList, setWishList] = useState([]);
  const { id } = useParams();

  const addWishList = async (productId) => {
    try {
      if (!token) {
        toast.error("Please login to add to wishlist");
        return;
      }

      const response = await axios.put(
        `${backend_url}/api/wishlist/add_to_wish_list`,
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
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const request = await axios.get(
          `${backend_url}/api/product/fetch-product-by-id/${id}`
        );
        const response = request.data.product;
        if (request.status === 200) {
          setProductData(response);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProductById();
  }, []);
  const todayProduct = product_List.filter(
    (product) => product.eventCategory && product.eventCategory === "Today"
  );
  return (
    <>
      <div className="section-outer flex justify-center my-16">
        <div className="section-inner w-[84%] m-auto ">
          <div className="flex items-center space-x-1 ">
            <h1 className="text-gray-500">
              Account / {productData.category} /
            </h1>
            <span>
              {productData.title && productData.title.length > 30
                ? productData.title.slice(0, 30) + "..."
                : productData.title}
            </span>
          </div>
        </div>
      </div>

      <div className="section-outer mb-20">
        <div className="section-inner flex flex-col md:flex md:flex-row w-[84%] m-auto gap-12">
          <div className="left-imges-section flex flex-col-reverse md:flex md:flex-row  gap-7 ">
            <div className="flex md:flex-col gap-2">
              {productData.images &&
                productData.images
                  .slice(1)
                  .map((image, index) => (
                    <img
                      key={index}
                      src={`http://localhost:8000/public/images/${image}`}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-20 h-24 md:w-28 md:h-28 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                    />
                  ))}
            </div>
            <div>
              <div className="bg-customGray p-7 md:p-8 md:py-12 rounded-md">
                {productData.images && productData.images.length > 0 && (
                  <img
                    src={`http://localhost:8000/public/images/${productData.images[0]}`}
                    alt="Product"
                    className=" w-56 h-60  md:w-80 md:h-96 cursor-pointer transform hover:scale-105"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="right-details-section w-full md:w-[60%] lg:w-[35%]">
            <h1 className="text-2xl font-semibold">{productData.title}</h1>
            <div>
              <div className="ratingStar flex gap-3 my-3">
                <div className="flex items-center text-customeYellow">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <h1 className="text-gray-400">
                  {" "}
                  {`(${productData.reviews}) Reviews`}
                </h1>
                <div className="h-4 w-[1px] mt-1 bg-black opacity-50"></div>
                <p className="text-customGreen"> In Stock</p>{" "}
              </div>
              <h1 className="text-2xl font-semibold mb-4">
                {" "}
                {`$${productData.price}`}
              </h1>
              {productData.description &&
              productData.description.length > 700 ? (
                <>
                  <p>
                    {showFullDescription
                      ? productData.description
                      : productData.description.slice(0, 800) + "..."}
                  </p>
                  <button
                    onClick={handleToggle}
                    className="text-blue-500 underline mt-2"
                  >
                    {showFullDescription ? "View Less" : "View More"}
                  </button>
                </>
              ) : (
                <p>{productData.description}</p>
              )}
              <div className="h-[1px] w-full my-5 bg-black opacity-50"></div>
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Colore:</h1>
                <div className="flex gap-2 mt-1">
                  <div className="cercale h-4 w-4 rounded-full bg-slate-400 "></div>
                  <div className="cercale h-4 w-4 rounded-full bg-customRed"></div>
                </div>
              </div>
              <div className="flex items-center gap-4 my-4">
                <h1 className="text-xl font-medium">Size:</h1>
                <div className="flex gap-2 mt-1">
                  <div className="cercale py-1 px-2 font-semibold rounded border border-1  hover:bg-customRed hover:text-white">
                    XS
                  </div>
                  <div className="cercale py-1 px-3 font-semibold rounded border border-1  hover:bg-customRed  hover:text-white">
                    S
                  </div>
                  <div className="cercale py-1 px-2 font-semibold rounded border border-1  hover:bg-customRed  hover:text-white">
                    M
                  </div>
                  <div className="cercale py-1 px-3 font-semibold rounded border border-1  hover:bg-customRed  hover:text-white">
                    L
                  </div>
                  <div className="cercale py-1 px-2 font-semibold rounded border border-1  hover:bg-customRed  hover:text-white">
                    XL
                  </div>
                </div>
              </div>
              <div className="flex justify-between md:flex-wrap">
                <div className="countBtn flex items-center rounded border border-1 md:mb-3">
                  <button
                    type="button"
                    onClick={() => removeItemFromCart(productData._id)}
                    className="px-2 text-3xl border border-l-2  hover:bg-customRed hover:text-white rounded-l"
                  >
                    -
                  </button>
                  <p className="px-7  font-semibold">
                    {cartItems[productData._id]}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(productData._id);
                    }}
                    className="px-2 text-3xl border border-r-2  hover:bg-customRed hover:text-white rounded-r"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => {
                    addToCart(productData._id);
                    navigate("/cart-page");
                  }}
                  type="button"
                  className="bg-customRed text-white py-1 px-12 rounded"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => addWishList(productData._id)}
                  className={`bg-white h-8 w-8 rounded-full flex items-center justify-center bg`}
                >
                  <PiHeartThin
                    className={`h-6 w-6 ${
                      wishList.includes(productData._id)
                        ? "text-customRed "
                        : "text-gray-500"
                    }`}
                  />
                </button>{" "}
              </div>
              {/* free delivery section */}
              <div className="border border-1 shadow-sm rounded mt-5">
                <div className="flex gap-4 ml-3 mt-4">
                  <TbTruckDelivery className=" text-black  w-10 h-10 p-1" />
                  <div className="">
                    <h1 className="font-semibold">Free Delivery</h1>
                    <Link to="#" className=" font-thin  underline">
                      Enter your postal code for Delivery Availability
                    </Link>
                  </div>
                </div>
                <div className="h-[1px] w-full my-5 bg-black opacity-50"></div>
                <div className="flex gap-4 ml-3 my-4">
                  <MdOutlineKeyboardReturn className=" text-black  w-10 h-10 p-1" />
                  <div className="">
                    <h1 className="font-semibold">Free Delivery</h1>

                    <div className="flex">
                      <p>Free 30 Days Delivery Returns. </p>
                      <Link to="#" className="font-semibold  underline">
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Related Products */}

      <div className="flashSales-section-inner w-[84%] m-auto ">
        <div className="flex justify-between mt-16 mb-10">
          <div className="flex gap-3 items-center">
            <div className="h-9 w-5 rounded-sm bg-customRed"></div>
            <h1 className="text-black  md:text-xl lg:text-2xl  font-semibold">
              Related Products
            </h1>
          </div>
        </div>
      </div>

      <div className="w-[84%] m-auto mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {todayProduct ? (
            todayProduct.map((product) => (
              <div
                key={product._id}
                className=" cart border-1 space-x-3 group "
              >
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <div className="h-48 relative bg-gray-100 flex rounded-md p-2">
                    <span className="absolute top-2 left-2 px-2 rounded-sm bg-customRed text-white text-center">
                      -{product.off_percent}
                    </span>
                    <div className="flex items-center justify-center w-full h-full">
                      <img
                        src={`http://localhost:8000/public/images/${product.images[0]}`}
                        alt="Product"
                        className="w-40 h-36 transform hover:scale-110"
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
                    className="w-full bg-black text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => {
                      addToCart(product._id);
                      toast("Product added to cart");
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
                <div className="space-y-2 font-semibold">
                  <h1>
                    {product.title && product.title.length > 50
                      ? product.title.slice(0, 50) + "..."
                      : product.title}
                  </h1>
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
}

export default HOC(ProductDetailsPage);
