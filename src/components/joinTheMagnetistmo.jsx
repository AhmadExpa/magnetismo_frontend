import React from "react";
import story from "../assets/howItswork/story.png";
import { Link } from "react-router-dom";

function JoinTheMagnetistmo() {
  return (
    <div>
      <section className="md:py-10 py-2 max-w-[1360px] mx-auto bg-[#293E75]">
        <div className="flex md:flex-row flex-col-reverse justify-between md:px-32 px-4 ">
          <div className="md:text-start text-center">
            <h2 className="text-2xl font-bold text-white md:mb-4">
              JOIN THE <span className="text-white">MAGNETISMO MOVEMENT</span>
            </h2>
            <p className="text-white text-start">
              Say goodbye to headaches from working on computers, digital eye
              fatigue, and migraines caused by long screen hours.{" "}
              <span className="text-white">
                Magnetismo brings effective, affordable relief to your
                fingertips.
              </span>
              <span className="text-white">
                With Magnetismo, your natural headache relief journey begins
                today!
              </span>
            </p>
            <Link to="/product#carrt">
            <button className="mt-4 mx-auto block text-center text-white border border-white p-2 rounded-md px-5 bg-[#4682B4] hover:bg-[#000080]">
              Shop Now
            </button>
            </Link>
           
          </div>
          <div className="mb-10 md:text-start text-center md:mb-0">
            <img src={story} alt="story" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default JoinTheMagnetistmo;
