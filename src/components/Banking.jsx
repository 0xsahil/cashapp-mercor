import React from "react";
import {
  bankingHole,
  bankingColumn,
  bankingCubes,
  bankingHoleBottom,
  bankingMonster,
  bankingPhone,
  bankingRampLeft,
  bankingRampRight,
  bankingStairsLeft,
  bankingStairsRight,
  bankingTrackLeft,
  bankingTrackRight,
  bankingTube,
} from "../Assets/assets";

const Banking = () => {
  return (
    <div className="flex relative w-full h-[100vh] bg-[#00D54B] overflow-hidden">
      <img
        src={bankingHole}
        alt="hole top"
        className="w-1/3 top-7 lg:top-0 lg:w-96 absolute"
      />
      <img
        src={bankingTrackRight}
        alt="Track"
        className=" w-52 md:w-64 absolute top-4 right-5 lg:right-20"
      />
      <img
        src={bankingColumn}
        alt="Column"
        className=" absolute top-10 md:top-32 md:left-20"
      />
      <img
        src={bankingTrackLeft}
        alt="Track"
        className="absolute top-1/3 -left-10 lg:left-1/3 w-64 z-[10] md:z-auto"
      />
      <img src={bankingPhone} alt="Phone" className="mx-auto w-80 z-[50]" />
      <img
        src={bankingRampRight}
        alt="Ramp"
        className="absolute top-1/4 lg:bottom-2/4 right-0 md:right-10 lg:right-1/4 z-[9] md:z-auto h-32 md:h-auto"
      />
      <img
        src={bankingStairsRight}
        alt="Stairs"
        className="hidden md:block absolute right-32 bottom-1/3 lg:top-1/3"
      />
      <img
        src={bankingStairsLeft}
        alt="Stairs"
        className="absolute bottom-10 lg:bottom-20 left-1 md:left-10 lg:left-32"
      />
      <img
        src={bankingRampLeft}
        alt="Ramp"
        className="hidden md:block absolute bottom-1/4 lg:bottom-6 lg:left-52 lg:ml-10"
      />
      <img
        src={bankingCubes}
        alt="Cubes"
        className="absolute right-10 md:right-1/4 bottom-32 md:bottom-20"
      />
      <img
        src={bankingMonster}
        alt="Monster"
        className="absolute bottom-10 md:top-3/4 right-5 md:right-20"
      />
      <img
        src={bankingTube}
        alt="Tube"
        className="absolute mx-auto bottom-0 right-2/4 z-[20]"
      />
      <img
        src={bankingHoleBottom}
        alt="hole"
        className="absolute w-full md:w-96 md:right-48 bottom-0"
      />
      <div className="w-[80%] md:w-80 absolute bottom-1/3 md:bottom-2/4 lg:top-2/4 left-10 md:left-1/4 z-[70] bg-white bg-opacity-40 lg:bg-opacity-0 py-4 md:py-2 px-6 rounded-lg">
        <h2 className="headings text-4xl lg:text-white">Banking</h2>
        <p>
          Receive your paycheck, tax returns, and other direct deposits up to
          two days early using your Cash App routing and account number.
        </p>
      </div>
    </div>
  );
};

export default Banking;
