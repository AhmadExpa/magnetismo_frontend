import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useAppSelector } from "../store/store";
import logo from "../assets/home/Magnetismo_Logo.png";
import cart from "../assets/home/Cart.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [step, setStep] = useState(1);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const activeStyle = "text-[#273771] border-b-2 border-[#273771] pb-1";

  const { products } = useAppSelector("cartSlice");
  const totalQuantity = products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep((prev) => (prev === 3 ? 1 : prev + 1)); // loop back to 1 after 3
    }, 3000); // delay between transitions

    return () => clearTimeout(timer);
  }, [step]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const handleMoneyBack = () => {
    navigate('/moneyback');
  };

  const handleHowItWorksClick = () => {
    if (dropdownOpen) {
      navigate('/how-it-works');
      closeMenu();
    }
    toggleDropdown();
  };

  return (
    <>
      {/* Top Bar */}
      <nav className="top-0 left-0 w-full z-[100] mb-0 group overflow-hidden h-10">
        <div className="bg-[#293E75] transition-all duration-300 transform">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="heading1"
                className="max-w-7xl mx-auto flex justify-center items-center py-1 px-4"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-white md:text-[16px] text-sm font-[300] whitespace-nowrap">
                  Not satisfied? Get a 100% refund within 15 days
                </h2>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="heading2"
                className="max-w-7xl mx-auto flex justify-center items-center py-1 px-4"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-white text-[16px] font-[300] whitespace-nowrap">
                  Available Nationwide
                </h1>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="heading3"
                className="max-w-7xl mx-auto flex justify-center items-center py-1 px-4"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-white text-[16px] font-[400] whitespace-nowrap">
                  Introductory Price $18.99
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 m-0  ${
          scrolling
            ? "bg-white shadow-lg text-black"
            : "bg-transparent hover:bg-white hover:text-black"
        }`}
      >
        <div className="flex justify-between items-center px-4 md:px-10 pt-3 p-2">
          <NavLink to="/" onClick={closeMenu}>
            <motion.img
              src={logo}
              alt="Logo"
              className="h-10 w-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 ">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? activeStyle : "hover:text-black transition"
              }
            >
              HOME
            </NavLink>

            {/* How It Works Dropdown */}
            <div className="relative group ">
              <div
                onClick={handleHowItWorksClick}
                className="flex items-center hover:text-black transition cursor-pointer"
              >
                HOW IT WORKS <FiChevronDown className="ml-1" />
              </div>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 space-y-2 text-center bg-white rounded shadow-lg md:w-[130px]">
                  <li>
                    <NavLink
                      to="/story"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => {
                        closeMenu();
                        setDropdownOpen(false);
                      }}
                    >
                      Story
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/faq"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={() => {
                        closeMenu();
                        setDropdownOpen(false);
                      }}
                    >
                      FAQ'S
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            {/* Product Link */}
            <NavLink
              to="/product"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? activeStyle : "hover:text-black transition"
              }
            >
              PRODUCT
            </NavLink>

            <NavLink
              to="/contact us"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? activeStyle : "hover:text-black transition"
              }
            >
              CONTACT US
            </NavLink>
          </div>

          {/* Cart & Info */}
          <div className="items-center flex justify-end md:gap-4">
            <NavLink to="/cart" className="relative">
              <img src={cart} alt="Cart" className="h-8 w-8 md:ms-0 sm:ms-3 xs:ms-36" />
              {totalQuantity > 0 && (
                <span className="bg-[#273771] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-2 ">
                  {totalQuantity}
                </span>
              )}
            </NavLink>
            <div className="hidden md:block text-sm text-gray-700 cursor-pointer" onClick={handleMoneyBack}>
              <span className="font-medium">Money Back</span>
              <p className="uppercase"> Guarantee</p>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-[60px] left-0 w-full bg-gray-100 shadow-md ">
            <ul className="flex flex-col ml-5 py-4 space-y-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? activeStyle
                      : "block py-2 text-gray-700 hover:text-black"
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>

              {/* Mobile: How It Works */}
              <li>
                <div
                  className="flex items-center justify-between py-2 text-gray-700 hover:text-black cursor-pointer"
                  onClick={handleHowItWorksClick}
                >
                  How it works <FiChevronDown className="ml-1 " />
                </div>
                {dropdownOpen && (
                  <ul className="ml-4 space-y-2">
                    <li>
                      <NavLink
                        to="/story"
                        className="block py-2 text-gray-700 hover:text-black"
                        onClick={() => {
                          closeMenu();
                          setDropdownOpen(false);
                        }}
                      >
                        Story
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq"
                        className="block py-2 text-gray-700 hover:text-black"
                        onClick={() => {
                          closeMenu();
                          setDropdownOpen(false);
                        }}
                      >
                        FAQ'S
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              {/* Mobile: Product Link */}
              <li>
                <NavLink
                  to="/product"
                  className="block py-2 text-gray-700 hover:text-black"
                  onClick={closeMenu}
                >
                  Product
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact us"
                  className={({ isActive }) =>
                    isActive
                      ? activeStyle
                      : "block py-2 text-gray-700 hover:text-black"
                  }
                  onClick={closeMenu}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
