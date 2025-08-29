import { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useAppSelector } from "../store/store";
import logo from "../assets/home/Magnetismo_Logo.png";
import cart from "../assets/home/Cart.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [step, setStep] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const activeStyle = "text-[#273771] border-b-2 border-[#273771] pb-1";

  // Safely access the cart state with proper error handling
  const { products } = useAppSelector("cartSlice");
  const totalQuantity = products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  // Function to handle dropdown click (for both desktop and mobile)
  const handleDropdownClick = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  // Function to handle product dropdown item clicks
  const handleProductItemClick = (hash) => {
    navigate(`/product${hash}`);
    closeMenu();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep((prev) => (prev === 3 ? 1 : prev + 1));
    }, 3000);

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
    navigate("/moneyback");
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
          <div className="hidden md:flex space-x-6" ref={dropdownRef}>
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
            <div className="relative">
              <div
                className="flex items-center hover:text-black transition cursor-pointer"
                onClick={() => handleDropdownClick("howItWorks")}
              >
                HOW IT WORKS <FiChevronDown className="ml-1" />
              </div>
              {activeDropdown === "howItWorks" && (
                <ul className="absolute left-0 mt-2 space-y-2 text-center bg-white rounded shadow-lg md:w-[160px] z-50">
                  <li>
                    <NavLink
                      to="/how-it-works#how-to-use"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      How to Use
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/faq"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      FAQs
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            {/* Story Dropdown */}
            <div className="relative">
              <div
                className="flex items-center hover:text-black transition cursor-pointer"
                onClick={() => handleDropdownClick("story")}
              >
                STORY <FiChevronDown className="ml-1" />
              </div>
              {activeDropdown === "story" && (
                <ul className="absolute left-0 mt-2 space-y-2 text-center bg-white rounded shadow-lg md:w-[160px] z-50">
                  <li>
                    <NavLink
                      to="/story#our-story"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Our Story
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/how-it-works#about"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/how-it-works#mission"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMenu}
                    >
                      Our Mission
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>

            {/* Product Dropdown */}
            <div className="relative">
              <div
                className="flex items-center hover:text-black transition cursor-pointer"
                onClick={() => handleDropdownClick("product")}
              >
                PRODUCT <FiChevronDown className="ml-1" />
              </div>
              {activeDropdown === "product" && (
                <ul className="absolute left-0 mt-2 space-y-2 text-center bg-white rounded shadow-lg md:w-[160px] z-50">
                  <li>
                    <button
                      onClick={() => handleProductItemClick("#gallery")}
                      className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200 text-left"
                    >
                      Gallery
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleProductItemClick("#instructions")}
                      className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200 text-left"
                    >
                      Instructions
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleProductItemClick("#reviews")}
                      className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200 text-left"
                    >
                      Reviews
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleProductItemClick("#warnings")}
                      className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200 text-left"
                    >
                      Warnings
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleProductItemClick("#warranty")}
                      className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200 text-left"
                    >
                      Warranty
                    </button>
                  </li>
                </ul>
              )}
            </div>

            <NavLink
              to="/contact"
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
              <img
                src={cart}
                alt="Cart"
                className="h-8 w-8 md:ms-0 sm:ms-3 xs:ms-36"
              />
              {totalQuantity > 0 && (
                <span className="bg-[#273771] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-2 ">
                  {totalQuantity}
                </span>
              )}
            </NavLink>
            <div
              className="hidden md:block text-sm text-gray-700 cursor-pointer"
              onClick={handleMoneyBack}
            >
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
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-100 shadow-md z-50">
            <ul className="flex flex-col ml-5 py-4 space-y-4">
              {/* Mobile: Home */}
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
                  onClick={() => handleDropdownClick("howItWorks")}
                >
                  How It Works <FiChevronDown className="ml-1 " />
                </div>
                {activeDropdown === "howItWorks" && (
                  <ul className="ml-4 space-y-2">
                    <li>
                      <NavLink
                        to="/how-it-works#how-to-use"
                        className="block py-2 text-gray-700 hover:text-black"
                        onClick={closeMenu}
                      >
                        How to Use
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq"
                        className="block py-2 text-gray-700 hover:text-black"
                        onClick={closeMenu}
                      >
                        FAQs
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              {/* Mobile: Story Dropdown */}
              <li>
                <div
                  className="flex items-center justify-between py-2 text-gray-700 hover:text-black cursor-pointer"
                  onClick={() => handleDropdownClick("story")}
                >
                  Story <FiChevronDown className="ml-1 " />
                </div>
                {activeDropdown === "story" && (
                  <ul className="ml-4 space-y-2">
                    <li>
                      <NavLink
                        to="/story#our-story"
                        className="block py-2 text-gray-700 hover:text-black"
                        onClick={closeMenu}
                      >
                        Our Story
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/how-it-works#about"
                        className="block py-2 text-gray-700 hover:text-black"
                        onClick={closeMenu}
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/how-it-works#mission"
                        className="block py-2 text-gray-700 hover:text-black"
                        onClick={closeMenu}
                      >
                        Our Mission
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              {/* Mobile: Product Dropdown */}
              <li>
                <div
                  className="flex items-center justify-between py-2 text-gray-700 hover:text-black cursor-pointer"
                  onClick={() => handleDropdownClick("product")}
                >
                  Product <FiChevronDown className="ml-1" />
                </div>
                {activeDropdown === "product" && (
                  <ul className="ml-4 space-y-2">
                    <li>
                      <button
                        onClick={() => handleProductItemClick("#gallery")}
                        className="block w-full py-2 text-gray-700 hover:text-black text-left"
                      >
                        Gallery
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleProductItemClick("#instructions")}
                        className="block w-full py-2 text-gray-700 hover:text-black text-left"
                      >
                        Instructions
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleProductItemClick("#reviews")}
                        className="block w-full py-2 text-gray-700 hover:text-black text-left"
                      >
                        Reviews
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleProductItemClick("#warnings")}
                        className="block w-full py-2 text-gray-700 hover:text-black text-left"
                      >
                        Warnings
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleProductItemClick("#warranty")}
                        className="block w-full py-2 text-gray-700 hover:text-black text-left"
                      >
                        Warranty
                      </button>
                    </li>
                  </ul>
                )}
              </li>

              {/* Mobile: Contact Us */}
              <li>
                <NavLink
                  to="/contact"
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
