import standpen from "../assets/images/standpen.jpg";
import logomoneyback from "../assets/images/logomoneyback.png";
import { useNavigate } from "react-router-dom";
const HealthBenefitsUI = () => {
  const navigate = useNavigate();

  const handleCLick = () => {
    navigate("/moneyback");
  };
  return (
    <div className="lg:flex justify-center items-center  p-4">
      <div className="w-full max-w-6xl rounded-lg overflow-hidden relative">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-blue-200 p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 w-20 h-20 bg-white rounded-full -mt-10 -ml-10"></div>
            <h2 className="text-xl lg:text-4xl font-medium  text-indigo-800 mb-6">
     Effective relief from 
            </h2>

            <ul className="space-y-5 mb-6">
              <li className="flex items-center">
                <span className="text-indigo-800 mr-3 text-lg">▶</span>
                <span className="text-xl lg:text-4xl text-indigo-800 font-medium">
                  Stress
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-800 mr-3 text-lg">▶</span>
                <span className="text-xl lg:text-4xl text-indigo-800 font-medium">
                  Migraine
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-800 mr-3 text-lg">▶</span>
                <span className="text-xl lg:text-4xl text-indigo-800 font-medium">
                  Eye Stress
                </span>
              </li>
            </ul>

            <p className="text-xl lg:text-3xl  text-indigo-800 mb-4">
              Caused By Excessive Screen Time
            </p>

            <p className="text-xl lg:text-3xl  text-indigo-800 font-medium">
              Or 100% Money Back Guaranteed
            </p>

            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div
                className="absolute w-full h-full bg-cover"
                style={{
                  backgroundImage: `url(${standpen})`,
                }}
              ></div>
            </div>
          </div>
          <div
            onClick={handleCLick}
            className=" relative w-full md:w-1/2 bg-white p-8 flex justify-center items-center"
          >
            <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] relative cursor-pointer bg-blue-200 rounded-full mx-auto">
              <div className="md:mt-8 mt-2">
                <img src={logomoneyback} alt="" />
              </div>
              <div>
                <p className="  text-indigo-800 absolute lg:top-[210px] lg:right-[105px] text-xl md:top-[160px] md:right-[75px] lg:text-3xl tex-txl lg:w-[180px] md:w-[120px] top-[90px] right-[29px] w-[120px] xsm:top-[90px] xsm:right-[20px] smm:top-[90px] smm:right-[20px]">
                  <span className="lg:ms-10 md:ms-5 ms-5">100%</span> Money Back <span className="lg:ms-5">Guarantee</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthBenefitsUI;
