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
      <div className="absolute top-1/4 left-20 lg:left-2 lg:top-32 z-50 flex items-center justify-center w-[70%] ">
        <div className="bg-none lg:w-1/3 absolute bottom-10 md:top-10 z-[100]">
          <h2 className="headings text-5xl text-[#00D54B]">Payments</h2>
          <p className=" text-lg md:text-xl">
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </p>
        </div>
        <img
          src={paymentsPhone}
          alt="phone"
          className=" h-[60%] relative lg:bottom-12 lg:left-1/4 z-[99] opacity-70 lg:opacity-100"
        />
      </div>
      {/* Pillars */}
      <div className="z-20 absolute bottom-0 flex items-center justify-center p-0 w-full h-full ">
        <img
          src={paymentsColumnLeft}
          alt="column left"
          className=" absolute left-0 bottom-0 h-2/4 lg:h-auto z-[23] lg:z-20"
        />
        <img
          src={paymentsPillarMedium}
          alt="pillar medium"
          className="z-[21] md:z-[22] left-8 bottom-5 absolute md:right-3/4 lg:left-32 md:bottom-10"
        />
        <img
          src={paymentsPillarMedium}
          alt="pillar medium"
          className="absolute bottom-6 right-12 h-52 z-[22] lg:right-3/4 lg:bottom-20"
        />
        <img
          src={paymentsPillarMedium}
          alt="pillar medium"
          className="absolute right-1/4 bottom-1/4 h-1/5  z-[2]"
        />
        <img
          src={paymentsPillarMedium}
          alt="pillar medium"
          className="hidden md:block absolute -bottom-10 left-1/4  z-[100]"
        />
        <img
          src={paymentsPillarMedium}
          alt="pillar medium"
          className="hidden md:block absolute top-2/3 h-1/6 lg:h-1/5 left-1/4 lg:left-2/4  z-30 lg:z-[120]"
        />
        <img
          src={paymentsColumnCenter}
          alt="column center"
          className="z-[22] bottom-0 right-1/4 absolute"
        />
        <img
          src={paymentsPillarMedium}
          alt="pillar medium"
          className="absolute hidden lg:block bottom-36 h-[330px] right-64 z-[30] "
        />
        <img
          src={paymentsColumnRight}
          alt="column right"
          className="absolute right-0 bottom-20 lg:bottom-10 z-20"
        />
        <img
          src={paymentsFloor}
          alt="payments floor"
          className="z-[1] absolute bottom-0 left-0 w-full h-[30%] lg:h-auto "
        />
      </div>
    </div>
  );
};

export default Payment;
