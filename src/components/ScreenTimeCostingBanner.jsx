import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaHeartbeat } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";

const ScreenTimeCostingBanner = () => {
  return (
    <>
      <div className=" lg:p-0 p-2  bg-blue-50 bg-[url('girl.jpeg')] bg-cover bg-center bg-no-repeat md:min-h-screen ">
        <div className=" md:pt-20 md:px-10 lg:w-[420px] md:w-[370px]">
          <h1 className="font-bold lg:text-5xl md:text-3xl text-2xl md:p-4">
            Screen Time Is Costing Us Our Health
          </h1>
        </div>
        <div className="flex flex-col lg:ms-1 md:ms-2">
          <div className="md:px-10 flex items-center mt-3 md:gap-3 gap-4">
            <IoIosPhonePortrait className="text-2xl" />
            <p className="  md:w-[280px] leading-5">
              Headaches & eye strain from prolonged screen exposure
            </p>
          </div>
          <div className="md:px-10 flex items-center mt-3 md:gap-3 gap-4">
            <FaHeartbeat className="text-2xl" />
            <p className=" w-[260px] leading-5">
              Poor blood circulation around the eyes
            </p>
          </div>
           <div className="md:px-10 flex items-center mt-3 gap-3">
            <IoIosWarning className="text-2xl" />
            <p className=" md:w-[260px] leading-5">
              Long-trerm risk: tissue demage and vision loss
            </p>
          </div>
          <div className="md:ms-10 lg:mt-5 border-2 border-b border-gray-300 lg:w-1/2"></div>
          <div className="md:ms-10 md:mt-2">
            <span>Modern Life Demands more screen time but at what cost?</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenTimeCostingBanner;
