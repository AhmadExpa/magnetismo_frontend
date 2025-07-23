import React from "react";
import "./home.css";
import { GiReceiveMoney } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { VITE_PRICE_VIDEO_IN_INNOVATIVE_AND_HOW_IT_WORKS_PAGE } from "../enviroment";

const InnovativeRelief = () => {
  const navigate = useNavigate();

  const goToPolicy = () => {
    navigate("/moneyback", { state: { activeTab: "MoneyBack" } });
  };

 

  const handleNavigateToReviews = () => {
    navigate("/product", {
      state: { activeTab: "REVIEWS", scrollTo: "reviews" },
    });
  };

  return (
    <div className="lg:flex flex-col lg:flex-row mx-auto mt-16 md:w-[90%]">
      <div className="lg:w-1/2 md:w-full relative  mb-8 md:mb-0 flex justify-center items-center">
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-xl md:mb-4 mx-auto">
            <video
              src={
                VITE_PRICE_VIDEO_IN_INNOVATIVE_AND_HOW_IT_WORKS_PAGE
              }
              autoPlay
              loop
              muted
              className="w-full h-auto object-cover sm:rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="md:w-[600px] text-center md:text-left md:ms-20">
        <h1 className="md:text-2xl text-xl font-bold  text-[#273771]  lg:pe-0 xs:px-2 md:px-0 text-start">
          Say goodbye to screen-time stress with effortless migraine relief and
          relaxed, clear vision.
        </h1>
        <div className="md:flex items-center">
          <div>
            <ul className="list-none md:p-0 p-3">
              <div className="flex items-center gap-2">
                <span className="flex justify-center items-center rounded-full mt-3 p-1 bg-gray-300 text-[#293E75]">
                  <FaCheck />
                </span>
                <li className="mb-2 mt-5">
                  <span className="font-bold text-[#273771]">
                    Instant Relief
                  </span>
                </li>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex justify-center items-center rounded-full mt-3 p-1 bg-gray-300 text-[#293E75]">
                  <FaCheck />
                </span>
                <li className="mb-2 mt-5">
                  <span className="font-bold text-[#273771]">
                    {" "}
                    Magnetic Attachment{" "}
                  </span>
                </li>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex justify-center items-center rounded-full mt-3 p-1 bg-gray-300 text-[#293E75]">
                  <FaCheck />
                </span>
                <li className="mb-2 mt-5">
                  <span className="font-bold text-[#273771]">
                    Soothing Effect
                  </span>
                </li>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex justify-center items-center rounded-full mt-3 p-1 bg-gray-300 text-[#293E75]">
                  <FaCheck />
                </span>
                <li className=" mt-5">
                  <span className="font-bold text-[#273771]">
                    Lightweight & Portable
                  </span>
                </li>
              </div>
            </ul>
          </div>
         
        </div>
        <div className="md:flex items-center  md:gap-2 gap-0 md:p-0 p-3 md:mt-5">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={goToPolicy}
          >
            <GiReceiveMoney className="text-4xl text-[#273771] md:mb-4 mb-2" />
            <span className="text-sm">100% Money Return Policy</span>
          </div>
          <div
            className="flex items-center gap-4 md:gap-2 md:mt-0 mt-2  md:ms-2"
            onClick={handleNavigateToReviews}
            style={{ cursor: "pointer" }}
          >
            <LiaFlagUsaSolid className="text-4xl  text-[#273771]" />
            <span className="text-sm">Made in USA</span>
          </div>
          <div
            className="flex items-center md:gap-2 gap-4 cursor-pointer md:mt-0 mt-2"
          
          >
            <AiOutlineSafetyCertificate className="text-4xl  text-[#273771] md:mt-0 mt-2" />
            <span className="text-sm">1 Year Warranty</span>
          </div>
        </div>
        <div className="">
            <div className="flex justify-start md:ms-0 ms-5 ">
              <button
                className="w-36 uppercase bg-[#4682B4] hover:bg-[#000080]  mt-3 p-2 text-white rounded-full px-6"
                onClick={() => navigate("/product#carrt")}
              >
                Shop now
              </button>
            </div>
          </div>
      </div>
      
    </div>
  );
};

export default InnovativeRelief;
