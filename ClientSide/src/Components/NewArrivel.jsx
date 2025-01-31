
import { Link } from "react-router-dom";
import {  useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

const NewArrivel = () => {
  const { product_List } = useContext(StoreContext);

  const newArrivelProduct = product_List.filter(
    (product) => product.eventCategory === "NewArrivals"
  );
  return (
    <>
      <div className="flashSales-section-inner w-[90%] sm:w-[85%] lg:w-[84%] m-auto">
        <div className="flex gap-3 items-center">
          <div className="h-9 w-5 rounded-sm bg-customRed"></div>
          <h1 className="text-customRed font-semibold">Featured</h1>
        </div>
        <div className="flex justify-between my-7">
          <div className="flex items-center gap-10 sm:gap-20">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold tracking-wider">
              New Arrival
            </h1>
          </div>
        </div>
      </div>

      <div className="flashSales-section-inner w-[90%] sm:w-[85%] lg:w-[84%] m-auto flex flex-col lg:flex-row justify-between gap-8">
        <div className="left w-full lg:w-[50%] bg-black rounded-md relative p-5">
          {newArrivelProduct.length > 0 ? (
            newArrivelProduct.slice(0, 1).map((product) => (
              <div key={product._id}>
                <img
                  src={`http://localhost:8000/public/images/${product.images[0]}`}
                  alt={product.title}
                  className="w-full mt-20  object-contain  lg:absolute bottom-0"
                />
                <div className="text-white absolute bottom-6 left-6 pr-10 sm:pr-20">
                  <h1 className="text-lg sm:text-xl font-bold">
                    {product.title.split(" ").slice(0, 3).join(" ")}
                  </h1>
                  <p className="my-4 text-sm sm:text-base">
                    {product.description.split(" ").slice(0, 11).join(" ")}
                  </p>
                    <Link to={`/product-detail-page/${product._id}`} className="border-b-2 text-sm sm:text-lg font-semibold border-gray-600 pb-1 hover:border-white transition duration-200">
                      Shop Now
                    </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg font-semibold text-center my-7 text-white">
              No products available
            </p>
          )}
        </div>

      
        <div className="right w-full lg:w-[50%]">
          <div className="bg-black px-6 sm:px-8 rounded-md flex flex-col sm:flex-row">
            {newArrivelProduct.length > 1 ? ( 
              newArrivelProduct.slice(1, 2).map((product) => (
                <div
                  key={product._id}
                  className="flex flex-col sm:flex-row "
                >
                  <div className="text-white mt-5 md:mt-32 mb-7">
                    <h1 className="text-lg sm:text-xl text-white">
                      {product.title.split(" ").slice(0, 5).join(" ")}{" "}
                     
                    </h1>
                    <p className="text-white my-4 text-sm sm:text-base">
                      {product.description.split(" ").slice(0, 8).join(" ")}{" "}
                      
                    </p>
                    <h2 className="text-white">
                    <Link to={`/product-detail-page/${product._id}`} className="border-b-2 text-sm sm:text-lg font-semibold border-gray-600 pb-1 hover:border-white transition duration-200">
                      Shop Now
                    </Link>
                    </h2>
                  </div>
                  <img
                    src={`http://localhost:8000/public/images/${product.images[0]}`}
                    alt={product.title}
                    className="w-full sm:w-[60%] mt-4 sm:mt-0"
                  />
                </div>
              ))
            ) : (
              <p className="text-lg font-semibold text-center my-7 text-white">
                No products available
              </p>
            )}
          </div>

          <div className="mt-8 gap-6 sm:gap-8 flex flex-col sm:flex-row">
            <div className="p-6 sm:p-10 bg-black relative rounded-md">
              {newArrivelProduct.length > 2 ? (
                newArrivelProduct.slice(2, 3).map((product) => (
                  <div key={product._id}>
                    <img
                      src={`http://localhost:8000/public/images/${product.images[0]}`}
                      alt={product.title}
                      className="w-full h-64 object-contain"
                    />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h1 className="text-lg sm:text-xl text-white">
                        {product.title.split(" ").slice(0, 5).join(" ")}{" "}
                      </h1>
                      <p className="text-white text-sm sm:text-base">
                        {product.description.split(" ").slice(0, 3).join(" ")}{" "}
                      </p>
                      <h2 className="text-white">
                      <Link to={`/product-detail-page/${product._id}`} className="border-b-2 text-sm sm:text-lg font-semibold border-gray-600 pb-1 hover:border-white transition duration-200">
                      Shop Now
                    </Link>
                      </h2>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-lg font-semibold text-center my-7 text-white">
                  No products available
                </p>
              )}
            </div>
            <div className="p-6 sm:p-10 bg-black relative rounded-md">
              {newArrivelProduct.length > 3 ? (
                newArrivelProduct.slice(3,4).map((product) => (
                  <div key={product._id}>
                    <img
                      src={`http://localhost:8000/public/images/${product.images[0]}`}
                      alt={product.title}
                      className="w-full h-64 object-contain"
                    />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h1 className="text-lg sm:text-xl text-white">
                        {product.title.split(" ").slice(0, 5).join(" ")}{" "}
                      </h1>
                      <p className="text-white text-sm sm:text-base">
                        {product.description.split(" ").slice(0, 4).join(" ")}{" "}
                      </p>
                      <h2 className="text-white">
                      <Link to={`/product-detail-page/${product._id}`} className="border-b-2 text-sm sm:text-lg font-semibold border-gray-600 pb-1 hover:border-white transition duration-200">
                      Shop Now
                    </Link>
                      </h2>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-lg font-semibold text-center my-7 text-white">
                  No products available
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivel;
