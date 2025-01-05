import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadphones } from "react-icons/pi";
import { CiDiscount1 } from "react-icons/ci";
const FreeAndFastDelivery = () => {
  return (
    <>
    <div className="w-[70%] m-auto  space-x-40 my-28">
            <div className="w-full md:flex  items-center justify-between">
              <div className=" flex flex-col items-center justify-center ">
                <div className="bg-black border-8  border-gray-300 h-14 w-14 mb-4  rounded-full flex  items-center justify-center">
                  {" "}
                  <TbTruckDelivery className="text-white text-3xl" />
                </div>
                <h1 className="font-semibold mb-1">FREE AND FAST DELIVERY</h1>
                <p className="text-xs">Free delivery for all orders over $140</p>
              </div>
              <div className=" flex flex-col items-center  my-10 ">
                <div className="bg-black border-8  border-gray-300 h-14 w-14 mb-4  rounded-full flex  items-center justify-center">
                  {" "}
                  <PiHeadphones className="text-white text-3xl" />
                </div>
                <h1 className="font-semibold mb-1">24/7 CUSTOMER SERVICE</h1>
                <p className="text-xs">Friendly 24/7 customer support</p>
              </div>
              <div className=" flex flex-col items-center justify-center ">
                <div className="bg-black border-8  border-gray-300 h-14 w-14 mb-4  rounded-full flex  items-center justify-center">
                  {" "}
                  <CiDiscount1 className="text-white text-3xl" />
                </div>
                <h1 className="font-semibold mb-1">MONEY BACK GUARANTEE</h1>
                <p className="text-xs">We reurn money within 30 days</p>
              </div>
            </div>
          </div>
    </>
  )
}

export default FreeAndFastDelivery