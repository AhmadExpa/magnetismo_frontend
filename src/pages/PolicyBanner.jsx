import React from "react";
import finlaworkk from "../assets/images/finlaworkk.png";
import { useNavigate } from "react-router-dom";
const PolicyBanner = () => {
    const Navigate = useNavigate();
  return (
    <div>
        <div className="">
      <img
        src={finlaworkk}
        alt="Banner"
        className="object-cover relative"
      onClick={() => Navigate('/product#carrt')}/>

      </div>
     
    </div>
  );
};

export default PolicyBanner;
