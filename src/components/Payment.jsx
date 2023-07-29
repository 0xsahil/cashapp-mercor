import React from "react";

import {
  paymentsPhone,
  paymentsColumnLeft,
  paymentsColumnCenter,
  paymentsColumnRight,
  paymentsPillarMedium,
  paymentsFloor,
} from "../Assets/assets";

const Payment = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-[100vh] bg-white p-0 pt-10 overflow-hidden">
      {/* Heading */}
      <div className="absolute top-20 z-50 mx-auto flex items-center justify-center w-[70%] ">
        <div className=" bg-white">
          <h2 className="headings text-5xl text-[#00D54B]">Payments</h2>
          <p className="">
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </p>
        </div>
        <img
          src={paymentsPhone}
          alt="phone"
          className=" h-[70%] relative -left-56 "
        />
      </div>
      {/* Pillars */}
      <div className="z-20 absolute bottom-0 flex items-center justify-center p-0 w-full ">
        <img
          src={paymentsColumnLeft}
          alt="column left"
          className=" absolute left-0 bottom-0 z-20"
        />
        <img
          src={paymentsPillarMedium}
          alt="pillar medium"
          className="z-20 absolute left-40 bottom-4"
        />
        <img
          src={paymentsPillarMedium}
          alt="pillar medium"
          className="absolute left-56 bottom-10 ml-20 h-52 z-[2]"
        />
        <img
          src={paymentsPillarMedium}
          alt="pillar medium"
          className="relative -left-28 bottom-10  z-[2]"
        />
        <img
          src={paymentsPillarMedium}
          alt="pillar medium"
          className="absolute -bottom-10  z-[100]"
        />
        <img
          src={paymentsPillarMedium}
          alt="pillar medium"
          className="relative bottom-28 -left-10  z-30"
        />
        <img
          src={paymentsColumnCenter}
          alt="column center"
          className="z-[21] bottom-0 absolute"
        />
        <img
          src={paymentsPillarMedium}
          alt="pillar medium"
          className="absolute bottom-36 h-[330px] right-64 "
        />
        <img
          src={paymentsColumnRight}
          alt="column right"
          className="absolute right-0 bottom-10 z-20"
        />
        <img
          src={paymentsFloor}
          alt="payments floor"
          className="z-[1] absolute bottom-0 w-full"
        />
      </div>
    </div>
  );
};

export default Payment;
