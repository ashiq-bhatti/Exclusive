import playStation from "../images/RandomImages/playStation.png";
import woman from "../images/RandomImages/woman.png";
import speackers from "../images/RandomImages/speackers.png";
import perfume from "../images/RandomImages/perfume.png";
import { Link } from "react-router-dom";

const NewArrivel = () => {
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
        <div className="left w-full lg:w-[50%] bg-black rounded-md  relative">
          <img
            src={playStation}
            alt="PlayStation 5"
            className="w-full mt-20 lg:absolute bottom-0"
          />
          <div className=" text-white absolute bottom-6 left-6 pr-10 sm:pr-20">
            <h1 className="text-lg sm:text-xl font-bold">PlayStation 5</h1>
            <p className="my-4 text-sm sm:text-base">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="border-b-2 text-sm sm:text-lg font-semibold border-gray-600 pb-1 hover:border-white transition duration-200">
              Shop Now
            </button>
          </div>
        </div>

        <div className="right w-full lg:w-[50%]">
          <div className="bg-black px-6 sm:px-8 rounded-md flex flex-col sm:flex-row">
            <div className="text-white mt-32 ">
              <h1 className="text-lg sm:text-xl text-white">
                Women’s Collections
              </h1>
              <p className="text-white my-4 text-sm sm:text-base">
                Featured woman collections that give you another vibe.
              </p>
              <h2 className="text-white">
                <Link className="border-b-2 text-sm sm:text-lg font-semibold border-gray-600 pb-1">
                  Shop Now
                </Link>
              </h2>
            </div>
            <img
              src={woman}
              alt=""
              className="w-full sm:w-[60%] mt-4 sm:mt-0"
            />
          </div>

          <div className="mt-8 gap-6 sm:gap-8 flex flex-col sm:flex-row">
            <div className="p-6 sm:p-10 bg-black relative rounded-md">
              <img src={speackers} alt="" className="w-full" />
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-lg sm:text-xl text-white">Speakers</h1>
                <p className="text-white text-sm sm:text-base">
                  Amazon wireless speakers
                </p>
                <h2 className="text-white">
                  <Link className="border-b-2 text-sm sm:text-lg font-semibold border-gray-600 pb-1">
                    Shop Now
                  </Link>
                </h2>
              </div>
            </div>
            <div className="p-6 sm:p-10 bg-black relative rounded-md">
              <img src={perfume} alt="" className="w-full" />
              <div className="absolute bottom-6 left-6 text-white">
                <h1 className="text-lg sm:text-xl text-white">Perfume</h1>
                <p className="text-white text-sm sm:text-base">
                  GUCCI INTENSE OUD EDP
                </p>
                <h2 className="text-white">
                  <Link className="border-b-2 text-sm sm:text-lg font-semibold border-gray-600 pb-1">
                    Shop Now
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivel;
