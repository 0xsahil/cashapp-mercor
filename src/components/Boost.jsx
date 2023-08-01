import React from "react";

import {
  boostPhone,
  boostBurger,
  boostStairsLeft,
  boostStairsRight,
  boostCoffee,
  boostShoe,
  boostHand,
  boostCard,
} from "../Assets/assets";

const Boost = () => {
  return (
    <div className="flex w-full h-[100vh] bg-black items-end justify-between px-0 relative overflow-hidden z-10">
      <img
        src={boostStairsLeft}
        alt="Stairs"
        className="h-1/2 lg:h-auto lg:w-[25%] absolute lg:relative bottom-0 lg:top-20"
      />
      <img
        src={boostStairsRight}
        alt="Stairs"
        className=" w-full md:w-[90%] lg:w-[60%] absolute lg:relative right-0"
      />
      {/* Main heading */}
      <div className="hidden absolute bottom-28 right-1/3 flex w-[40%] mr-10 items-start justify-center">
        <div className="px-2 py-4 mt-20">
          <h1 className="headings text-4xl text-[#00D54B]">
            Cash Card & Boost
          </h1>
          <p className="text-white">
            The Cash Card is a free, customizable debit card that lets you pay
            online and in stores. It’s the only way to get Boosts—instant
            discounts that work at places where you want to spend.
          </p>
        </div>
        <img src={boostPhone} alt="Phone" />
      </div>
      <img
        src={boostBurger}
        alt="Burger"
        className="absolute left-20 md:left-1/4 md:ml-20 md:mb-10 lg:ml-10 lg:mb-0 bottom-10 lg:left-2/3 lg:top-2/4 z-20"
      />
      <img
        src={boostCoffee}
        alt="Coffee"
        className="absolute bottom-10 md:bottom-20 md:ml-24 left-2/4 lg:bottom-32 lg:left-3/4 ml-5 lg:ml-0 pb-4 lg:pb-0 h-[10%] lg:h-auto"
      />
      <img
        src={boostShoe}
        alt="Shoe"
        className="absolute -right-4 bottom-32 md:right-4 md:bottom-56 lg:right-8 lg:top-2/4 lg:pt-10"
      />
      <img
        src={boostHand}
        alt="Hand"
        className="absolute right-20 md:right-36 lg:left-3/4 bottom-1/4 md:bottom-1/3 lg:bottom-3/4 lg:ml-28 mb-10 md:mb-20 lg:mb-10"
      />
      <img src={boostCard} alt="Card" className="absolute left-5 bottom-1/4 lg:top-1/4 lg:left-3/4" />
    </div>
  );
};

export default Boost;
