import playStation from "../images/RandomImages/playStation.png";
import woman from "../images/RandomImages/woman.png";
import speackers from "../images/RandomImages/speackers.png";
import perfume from "../images/RandomImages/perfume.png";
import { Link } from "react-router-dom";

const NewArrivel = () => {
  return (
    <>
     <div className="flashSales-section-inner w-[84%] m-auto ">
            <div className="flex gap-3 items-center">
              <div className="h-9 w-5 rounded-sm bg-customRed"></div>
              <h1 className="text-customRed  font-semibold">Featured </h1>
            </div>
            <div className="flex justify-between my-7">
              <div className="flex items-center gap-20">
                <h1 className="text-4xl font-semibold tracking-wider">
                  New Arrivel
                </h1>
              </div>
            </div>
          </div>
    
       
          <div className="flashSales-section-inner w-[84%] m-auto flex flex-col lg:flex-row justify-between gap-8  ">
            <div className="left w-[90%] bg-black rounded-md relative ">
              <img
                src={playStation}
                alt="PlayStation 5"
                className="w-full absolute bottom-0 "
              />
    
              <div className="absolute bottom-6 left-6 text-white pr-20">
                <h1 className="text-xl font-bold">PlayStation 5</h1>
                <p className="my-4">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="border-b-2 text-lg font-semibold border-gray-600 pb-1 hover:border-white transition duration-200">
                  Shop Now
                </button>
              </div>
            </div>
    
            <div className="right  w-[90%] ">
              <div className="left bg-black px-8  rounded-md flex flex-row">
                <div className="  text-white">
                  <h1 className="text-xl text-white">Women’s Collections</h1>
                  <p className="text-white  my-4">
                    Featured woman collections that give you another vibe.{" "}
                  </p>
                  <h2 className="text-white">
                    <Link className="border-b-2 text-lg font-semibold border-gray-600 pb-1">
                      Shop Now
                    </Link>
                  </h2>
                </div>
    
                <img src={woman} alt="" className="w-[80%]" />
              </div>
    
              <div className="mt-8 gap-8 flex">
                <div className="left p-10  bg-black relative rounded-md">
                  <img src={speackers} alt="" className="reletive" />
                  <div className="absolute  bottom-6 left-6 text-white">
                    <h1 className="text-xl text-white">Speakers</h1>
                    <p className="text-white ">Amazon wireless speakers</p>
                    <h2 className="text-white">
                      <Link className="border-b-2 text-lg font-semibold border-gray-600 pb-1">
                        Shop Now
                      </Link>
                    </h2>
                  </div>
                </div>
                <div className="left p-10 bg-black relative rounded-md">
                  <img src={perfume} alt="" className="reletive" />
                  <div className="absolute  bottom-6 left-6 text-white">
                    <h1 className="text-xl text-white">Perfume</h1>
                    <p className="text-white font-xs">GUCCI INTENSE OUD EDP</p>
                    <h2 className="text-white">
                      <Link className="border-b-2 text-lg font-semibold border-gray-600 pb-1">
                        Shop Now
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default NewArrivel