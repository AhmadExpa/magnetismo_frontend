import React from "react";
import { FaTowerBroadcast } from "react-icons/fa6";
import migrainerelief from "../assets/images/migrainerelief.png";
import longscreentimming from "../assets/images/longscreentimming.png";
import smartclipondesign from "../assets/images/smartclipondesign.png";
import trustedbyeyeexperts from "../assets/images/trustedbyeyeexperts.png";
const QualityInnovative = () => {
  return (
    <div>
      <div className="bg-gray-100 md:py-12 py-5 px-4 md:px-20 text-center ">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 md:mb-10">
          Relief. Innovation. Comfort.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full flex justify-center items-center w-[130px] h-[130px]">
              <img
                src={migrainerelief}
                className="text-4xl  text-gray-700 mix-blend-multiply "
              />
            </div>
            <h3 className="font-semibold text-lg md:mt-2 ">
              Migraine Relief With Magnetic Therapy
            </h3>
            <p className=" text-gray-600 text-start lg:ps-0 md:ps-2">
              The device utilizes magnetic energy to help manage migraines and
              relieve stress on the eyes during screen use, allowing users to
              regain a sense of mental calmness.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full flex justify-center items-center w-[130px] h-[130px]">
              <img
                src={smartclipondesign}
                className="text-4xl  text-gray-700 mix-blend-multiply   "
              />
            </div>
            <h3 className="font-semibold text-lg md:mt-2 ">
              Smart Clip-On Design
            </h3>
            <p className=" text-gray-600 text-start lg:ps-10 md:ps-12">
              Snaps onto your eye glasses and shades in seconds; easy to wear
              everywhere, lightweight, and travel-friendly.
            </p>
          </div>

          <div className="flex flex-col items-center text-center ">
            <div className="bg-white rounded-full flex justify-center items-center w-[130px] h-[130px]">
              <img
                src={trustedbyeyeexperts}
                className="text-4xl  text-gray-700 mix-blend-multiply "
              />
            </div>
            <h3 className="font-semibold text-lg md:mt-2 ">
              Trusted by Eye Experts
            </h3>
            <p className=" text-gray-600 md:text-start lg:text-start text-left ps-2 lg:w-[300px] lg:ps-[53px] md:ps-[40px]">
              Suggested for natural, noninvasive relief by optometrists and
              ophthalmologists.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full flex justify-center items-center w-[130px] h-[130px]">
              <img
                src={longscreentimming}
                className="text-4xl  text-gray-700 mix-blend-multiply"
              />
            </div>
            <h3 className="font-semibold text-lg md:mt-2 ">
              Especially Designed for Long-Term Screen Users
            </h3>
            <p className=" text-gray-600 lg:ps-2 md:ps-3 text-start">
              Magnetismo keeps your eyes and mind at ease during long screen
              sessions, whether you're a gamer, writer, developer, or
              binge-watcher.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityInnovative;
