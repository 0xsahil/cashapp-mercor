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
    <div className="flex relative w-full h-[100vh] bg-[#00D54B]">
      <img src={bankingHole} alt="hole top" className="w-96 absolute" />
      <img
        src={bankingTrackRight}
        alt="Track"
        className="w-64 absolute top-4 right-20"
      />
      <img
        src={bankingColumn}
        alt="Column"
        className=" absolute top-32 left-20"
      />
      <img
        src={bankingTrackLeft}
        alt="Track"
        className="absolute top-1/3 left-1/3 w-64"
      />
      <img src={bankingPhone} alt="Phone" className="mx-auto w-80 z-20" />
      <img
        src={bankingRampRight}
        alt="Ramp"
        className="absolute bottom-2/4 right-1/4"
      />
      <img
        src={bankingStairsRight}
        alt="Stairs"
        className="absolute right-32 top-1/3"
      />
      <img
        src={bankingStairsLeft}
        alt="Stairs"
        className="absolute bottom-20 left-32"
      />
      <img
        src={bankingRampLeft}
        alt="Ramp"
        className="absolute bottom-6 left-52 ml-10"
      />
      <img
        src={bankingCubes}
        alt="Cubes"
        className="absolute right-1/4 bottom-20"
      />
      <img
        src={bankingMonster}
        alt="Monster"
        className="absolute top-3/4 right-20"
      />
      <img
        src={bankingTube}
        alt="Tube"
        className="absolute mx-auto bottom-0 right-2/4"
      />
      <img
        src={bankingHoleBottom}
        alt="hole"
        className="absolute w-96 right-48 bottom-0"
      />
      <div className="absolute top-2/4 w-80 left-1/4">
        <h2 className="headings text-4xl text-white">Banking</h2>
        <p>
          Receive your paycheck, tax returns, and other direct deposits up to
          two days early using your Cash App routing and account number.
        </p>
      </div>
    </div>
  );
};

export default Banking;
