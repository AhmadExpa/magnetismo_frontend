import { useState } from "react";
import logo from "../assets/home/Magnetismo_Logo.png";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./footer.css";
import payment from "../assets/footer/payment.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SpecPopup from "./SpecPopup";
import { VITE_FOOTER_SECTION_VIDEO_URL } from "../enviroment";

export default function Footer() {
  const activeStyle = "text-[#273771]";
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleRoute = (route) => {
    navigate(`/${route}`);
  };

  return (
    <>
      <div className="mt-6 w-full flex justify-center items-center relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full shadow-lg object-cover brightness-enhance"
        >
          <source src={VITE_FOOTER_SECTION_VIDEO_URL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex justify-end items-center bg-black bg-opacity-30">
          <div className="relative w-full max-w-md bg-white rounded-l-lg shadow-lg slide-in-right">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-3xl font-bold text-gray-600 hover:text-black"
            >
              ×
            </button>
            <SpecPopup />
          </div>
        </div>
      )}

      <div className="cursor-pointer mt-0">
        <footer className="bg-gradient-to-r from-[#26A2D9] md:p-0 p-6 to-[#293E75] text-white">
          <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto md:px-4 px-2 items-center md:items-start gap-6 text-center md:text-left">
            <div className="w-full md:w-auto space-y-2 text-sm mt-0 md:mt-16">
              <img
                src={logo}
                alt="Magnetismo Logo"
                className="lg:h-15 lg:w-25 mx-auto md:mx-0 lg:mb-6 object-contain"
              />
              <ul className="lg:mt-5 lg:space-y-2 text-sm">
                {[
                  { label: "HOME", path: "/" },
                  { label: "HOW IT WORKS", path: "/how-it-works" },
                  { label: "PRODUCT", path: "/product" },
                  { label: "FAQS", path: "/faq" },
                ].map(({ label, path }) => (
                  <li key={label}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive
                          ? activeStyle
                          : "block py-2 text-white hover:text-[#273771] transition"
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-auto md:mt-24">
              <p className="text-[16px] font-semibold">
                “EASE YOUR EYES, ENERGIZE YOUR MIND.”
              </p>
              <p className="text-[16px] text-center text-white">
                STEP INTO THE MAGNETISMO WORLD.
              </p>
              <p className="flex justify-center md:justify-start gap-2 mt-3">
                <FiPhone className="text-white" /> +1(833)000-000
              </p>
              <p className="flex justify-center md:justify-start gap-2 mt-2">
                <FiMapPin className="text-white" /> 18211 Redriver Sky San
                Antonio, Texas. 78259
              </p>
              <p className="flex justify-center md:justify-start gap-2 mt-2">
                <FiMail className="text-white" /> Info@themagnetismo.com
              </p>
            </div>

            <div className="w-full md:w-auto flex flex-col items-center md:items-start mt-0 md:mt-24">
              <div className="flex space-x-4 text-xl">
                <a
                  href="https://twitter.com/YourTwitterHandle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61571953774783"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://linkedin.com/in/YourLinkedInProfile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/the_magnetismo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  <FaInstagram />
                </a>
              </div>

              <h3 className="text-lg font-semibold mt-2">
                Get <span className="text-white">Email</span> Alerts.
              </h3>

              <div className="relative w-full max-w-xs mt-2">
                <input
                  type="email"
                  placeholder="Subscribe for Newsletter"
                  className="w-full p-2 bg-transparent border-b border-white focus:outline-none placeholder-gray-300 text-center md:text-left"
                />
                <button
                  className="absolute right-2 top-1 text-2xl text-white"
                  onClick={() => setShowPopup(true)}
                >
                  →
                </button>
              </div>

              <img src={payment} alt="Payment Methods" className="h-6 mt-6" />
            </div>
          </div>
        </footer>

        <div className="bg-blue-900 flex flex-col md:flex-row items-center justify-center gap-2 py-4 text-sm text-gray-200 text-center md:text-left flex-wrap">
          <span className="max-w-screen-xl px-2 md:px-4">
            © {new Date().getFullYear()} All rights reserved By Magnetismo.
          </span>

          <p
            className="cursor-pointer hover:underline"
            onClick={() => handleRoute("moneyback")}
          >
            Return Policy
          </p>
          <span className="hidden md:inline">|</span>

          <p
            className="cursor-pointer hover:underline"
            onClick={() => handleRoute("privacyPolicy")}
          >
            Privacy Policy
          </p>
          <span className="hidden md:inline">|</span>

          <p
            className="cursor-pointer hover:underline"
            onClick={() => handleRoute("shippingPolicy")}
          >
            Shipping Policy
          </p>
          <span className="hidden md:inline">|</span>

          <p
            className="cursor-pointer hover:underline"
            onClick={() => handleRoute("termsPolicy")}
          >
            Terms of Services
          </p>
        </div>
      </div>
    </>
  );
}
