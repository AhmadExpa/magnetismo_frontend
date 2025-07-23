import React from "react";
import circlemagnetismologo from "../assets/home/circlemagnetismologo.jpg";
import main from "../assets/product/main.png";
export default function MagnetismoSolutionBanner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 mt-5 p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
            <div>
                <img src={circlemagnetismologo} alt="" className="w-[120px] h-[80px] mix-blend-multiply" />
            </div>
          <div className="space-y-2">
            <p className="text-gray-600 font-medium">The Solution</p>
            <h1 className="lg:text-5xl font-bold text-blue-600 md:tracking-tight">
              MAGNETISMO
            </h1>
            <p className="text-blue-500 font-medium text-lg">
              A breakthrough in magnetic therapy
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-semibold">Static magnetic field</span>{" "}
                stimulates micro-circulation
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                Reduces{" "}
                <span className="font-semibold">
                  inflammation, stiffness, and fatigue
                </span>
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-semibold">No charging needed</span> -
                always ready
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-semibold">Drug free</span> and{" "}
                <span className="text-blue-600 font-semibold">
                  skin-friendly
                </span>
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <span className="font-semibold">Small Device, Big Relief.</span>
              </p>
            </div>
          </div>

          {/* Website Button */}
          <div className="pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl">
              www.themagnetismo.com
            </button>
          </div>
        </div>

        {/* Right Side - Product Image */}
        <div><img src={main} alt="" className="mix-blend-multiply"/></div>
      </div>
    </div>
  );
}
