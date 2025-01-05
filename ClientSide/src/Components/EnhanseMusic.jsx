import speacker from "../images/FlashSale/speacker.png";

const EnhanseMusic = () => {
  return (
    <>
    <div className="flex gap-14 border-t-2 bg-black my-10 p-14 w-[84%] m-auto">
            <div className="left">
              <p className="text-customGreen font-semibold mb-8">Categories</p>
              <h1 className="text-5xl font-semibold text-white">
                Enhance Your <br /> Music Experience
              </h1>
              <div className="timer"></div>
              <div className="flex gap-2 my-8">
                <div className="bg-gray-100 h-14 w-14  rounded-full flex items-center justify-center">
                  {" "}
                  <p className="text-sm">Hours</p>
                </div>
                <div className="bg-gray-100 h-14 w-14 rounded-full flex items-center justify-center">
                  {" "}
                  <p className="text-sm">Days</p>
                </div>
                <div className="bg-gray-100 h-14 w-14 rounded-full flex items-center justify-center">
                  {" "}
                  <p className="text-sm">Minutes</p>
                </div>
                <div className="bg-gray-100 h-14 w-141 rounded-full flex items-center justify-center">
                  {" "}
                  <p className="text-sm p-1">Seconds</p>
                </div>
              </div>
              <button className="b bg-customGreen text-white px-9 py-3 rounded-sm">
                Bye Now!
              </button>
            </div>
            <div className="right ">
              <img src={speacker} alt="" />
            </div>
          </div>
    </>
  )
}

export default EnhanseMusic