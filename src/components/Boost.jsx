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
        className="w-[25%] relative top-20"
      />
      <img src={boostStairsRight} alt="Stairs" className="w-[60%]" />
      {/* Main heading */}
      <div className="absolute bottom-28 right-1/3 flex w-[40%] mr-10 items-start justify-center">
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
        className="absolute right-1/4 top-2/4 z-20 pr-10"
      />
      <img src={boostCoffee} alt="Coffee" className="absolute bottom-32 left-3/4 pb-4" />
      <img src={boostShoe} alt="Shoe" className="absolute right-8 top-2/4 pt-10" />
      <img src={boostHand} alt="Hand" className="absolute left-3/4 bottom-3/4 ml-28 mb-10" />
      <img src={boostCard} alt="Card" className="absolute top-1/4 left-3/4" />
    </div>
  );
};

export default Boost;
