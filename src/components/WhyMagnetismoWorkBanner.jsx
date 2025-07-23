import React from "react";
import { FaBan } from "react-icons/fa";

import { FaHeartbeat } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";

const WhyMagnetismoWorkBanner = () => {
  return (
    <>
      <div className=" lg:p-0 p-2 mt-5 bg-blue-50 bg-[url('banner3.jpeg')] bg-cover bg-right bg-no-repeat md:min-h-screen ">
        <div className=" md:pt-20 md:px-10 lg:w-[420px] md:w-[370px]">
          <h1 className="font-bold lg:text-5xl md:text-3xl text-2xl md:p-4">
            Why Magnetismo Works
          </h1>
        </div>
        <div className="flex flex-col lg:ms-1 md:ms-2">
          <div className="md:px-10 flex items-center mt-3 md:gap-3 gap-4">
            <FaBan className="text-2xl" />
            <p className="  md:w-[280px] leading-5">
              Prevent long-term damage from poor circulation
            </p>
          </div>
          <div className="md:px-10 flex items-center mt-3 md:gap-3 gap-4">
            <FaHeartbeat className="text-2xl" />
            <p className=" w-[260px] leading-5">
              Always comfort for work play or rest
            </p>
          </div>
           <div className="md:px-10 flex items-center mt-3 gap-3">
            <IoIosWarning className="text-2xl" />
            <p className=" md:w-[260px] leading-5">
              instant comfort with zero hassle Naturally reduces digital fatigue
            </p>
          </div>
          <div className="md:ms-10 lg:mt-5 border-2 border-b border-gray-300 lg:w-1/2"></div>
          <div className="md:ms-10 md:mt-2">
            <span>Relief Anywhere Anytime</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyMagnetismoWorkBanner;
