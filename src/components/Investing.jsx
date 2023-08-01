import React from "react";
import { SiApple } from "react-icons/si";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsTwitch, BsTwitter, BsInstagram } from "react-icons/bs";

import { investingFloor, investingGraphLeft, investingGraphRight, investingPhoneLeft, rays } from "../Assets/assets";

const Investing = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#00D54B] w-full h-[100vh] relative overflow-hidden">
      <img src={rays} alt="Rays" className="absolute w-full h-[100vh] z-[1]" />
      <h1 className="headings text-5xl text-white mb-20">Investing</h1>
      {/* Main Container */}
      <div className="flex items-center justify-between w-[80%] mx-auto z-10">
        {/* Stocks */}
        <div className="flex flex-col md:flex-row w-[45%]">
          <div className="text-black mr-10">
            <h2 className="headings text-2xl">Stocks</h2>
            <p>
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </p>
          </div>
          <img src={investingPhoneLeft} alt="Phone" />
        </div>
        {/* Bitcoin */}
        <div className="flex flex-col md:flex-row w-[45%]">
          <img src={investingPhoneLeft} alt="Phone" />
          <div className="text-black ml-10">
            <h2 className="headings text-2xl">Bitcoin</h2>
            <p>
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </p>
          </div>
        </div>
      </div>
      <img
        src={investingFloor}
        alt="Floor"
        className="absolute bottom-0 w-full md:h-[30%] lg:h-auto"
      />
      <img
        src={investingGraphLeft}
        alt="Graph"
        className="absolute left-0 top-3/4 lg:top-2/4"
      />
      <img
        src={investingGraphRight}
        alt="Graph"
        className="absolute right-0 bottom-2/3 md:bottom-1/3"
      />
      {/* Footer */}
      <div className="flex items-center justify-between absolute bottom-2 w-[90%] z-20 px-4 py-6">
        {/* Buttons */}
        <div className="flex text-black headings">
          <button className="flex items-center justify-around uppercase px-4 py-4 border-[1px] border-black bg-white rounded-lg mx-4">
            {" "}
            <SiApple className="text-[#00D54B] lg:mr-4 " size={30} />{" "}
            <p className="hidden lg:inline">APP STORE</p>{" "}
          </button>
          <button className="flex items-center justify-around uppercase px-4 py-4 border-[1px] border-black bg-white rounded-lg mx-4">
            {" "}
            <BiLogoPlayStore
              className="text-[#00D54B] lg:mr-4 "
              size={30}
            />{" "}
            <p className="hidden lg:inline">google play</p>{" "}
          </button>
        </div>
        {/* Text */}
        <div className="flex w-2/5 text-[10px] text-black items-center justify-center">
          <p className="hidden lg:block w-[60%]">
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </p>
          <div className="flex text-black text-2xl lg:text-4xl ml-4">
            <BsTwitch />
            <BsTwitter className="mx-4" />
            <BsInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investing;
