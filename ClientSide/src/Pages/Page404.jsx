import React, { Link } from "react";

function Page404() {
  return (
    <>
      <div className="flashSales-section-outer flex justify-center mt-20">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex items-center space-x-1">
            <h1 className="text-gray-500">Home /</h1>
            <span>404 Error</span>
          </div>
          <h1 className="text-center text-7xl font-bold mt-16">
            404 Not Found
          </h1>
          <h2 className="text-center text-md  mt-7 mb-2 ">
            Your visited page not found. You may go home page.
          </h2>
          <div className="flex justify-center mb-24">
          {/* <Link to='/'> */}
          <button className=" mt-[40px] text-white  bg-customRed py-3 px-10  rounded-sm ">
            Back to home page
          </button>
          {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page404;
