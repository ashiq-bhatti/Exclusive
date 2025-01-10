import React from "react";

import ProductCard from "../Components/ProductCard";
import HOC from "../Components/HOC";

function WishListPage() {
  return (
    <>
      <div className="flashSales-section-outer flex justify-center mt-9">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex justify-between my-7">
            <div className="flex items-center gap-20">
              <h1 className="text-2xl font-semibold tracking-wider">
                Wishlist (4)
              </h1>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="border border-gray-400 px-6 py-2 rounded-md font-semibold mr-4"
              >
                Move To All Bag
              </button>
            </div>
          </div>

          {/* Cards */}
          <div>
            <div className="flex gap-8 mt-4">
              <ProductCard
                imgsrc="./src/images/FlashSale/game.png"
                description="HAVIT HV-G92 Gamepad"
                discountPrice="$120"
                orgPrice="$120"
                rating="(88)"
              />
              <ProductCard
                imgsrc="./src/images/FlashSale/keybord.png"
                description="AK-900 Wired Keyboard"
                discountPrice="$960"
                orgPrice="$1160"
                rating="(85)"
              />
              <ProductCard
                description="IPS LCD Gaming Monitor"
                discountPrice="$370"
                orgPrice="$400"
                rating="(99)"
              />
              <ProductCard
                description="IPS LCD Gaming Monitor"
                discountPrice="$370"
                orgPrice="$400"
                rating="(99)"
              />
            </div>
          </div>
        </div>
      </div>

      {/* just for you */}
      <div className="flashSales-section-outer flex justify-center my-20 ">
        <div className="flashSales-section-inner w-[84%] m-auto ">
          <div className="flex justify-between my-7">
            <div className="flex items-center gap-3">
              <div className="h-9 w-5 rounded-sm bg-customRed"></div>
              <h1 className=" text-2xl font-semibold tracking-wider">
                Just For You{" "}
              </h1>
            </div>

            <button
              type="button"
              className="border border-gray-400 mr-5 px-10 py-3 rounded-md font-semibold"
            >
              See All
            </button>
          </div>

          {/* Cards */}
          <div>
            <div className="flex gap-8 mt-4">
              <ProductCard
                imgsrc="./src/images/FlashSale/game.png"
                description="HAVIT HV-G92 Gamepad"
                discountPrice="$120"
                orgPrice="$120"
                rating="(88)"
              />
              <ProductCard
                imgsrc="./src/images/FlashSale/keybord.png"
                description="AK-900 Wired Keyboard"
                discountPrice="$960"
                orgPrice="$1160"
                rating="(85)"
              />
              <ProductCard
                description="IPS LCD Gaming Monitor"
                discountPrice="$370"
                orgPrice="$400"
                rating="(99)"
              />
              <ProductCard
                description="IPS LCD Gaming Monitor"
                discountPrice="$370"
                orgPrice="$400"
                rating="(99)"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HOC(WishListPage);
