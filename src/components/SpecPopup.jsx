// import React, { useState } from "react";
// import pen from "../assets/images/pen.jpg";
// import flageusa from "../assets/images/flageusa.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const SpecPopup = () => {
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   const handleSubmit = () => {
//     if (!email.trim() || !phone.trim()) {
//       toast.error("All fields are required!");
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       toast.error("Please enter a valid email address!");
//       return;
//     }
//     toast.success("Form submitted successfully!");
//     setEmail("");
//     setPhone("");
//   };

//   return (
//     <div className="bg-gray-100 md:w-[450px] rounded-xl">
//       <ToastContainer position="top-right" />
//       <div className="flex items-center md:pt-10 justify-end">
//         <div className="rounded-sm lg:p-5">
//           <h2 className="lg:text-3xl font-bold text-center text-[#273771] mb-2">
//             Refocus Refresh Relief
//           </h2>
//           <p className="text-center text-gray-700 text-sm mb-6">
//             Be the first to access exclusive Magnetismo deals, migraine relief
//             solutions, and soothing support for your daily screen routine.
//           </p>

//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-[250px] md:w-[300px] flex mx-auto border-2 border-black outline-none rounded-full bg-white md:px-4 md:py-3 py-2 px-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />

//             <div className="w-[250px] md:w-[300px] border-2 border-black outline-none rounded-full bg-white md:px-4 md:py-3 px-2 py-2 flex mx-auto mb-4">
//               <img src={flageusa} alt="" className="w-8 h-5 mt-1" />
//               <input
//                 type="tel"
//                 placeholder="Phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="flex-grow focus:outline-none ps-2"
//                 onKeyPress={(e) => {
//                   if (!/[0-9]/.test(e.key)) {
//                     e.preventDefault();
//                   }
//                 }}
//               />
//             </div>
//           </div>

//           <div className="flex justify-center mb-4">
//             <img src={pen} className="md:h-[200px] object-contain" />
//           </div>

//           <p className="text-[16px] flex mx-auto text-gray-600 mb-4 justify-center leading-tight">
//             By submitting this form, you consent to receive informational{" "}
//           </p>

//           <div className="w-full flex justify-center lg:mb-0 mb-4">
//             <button
//               onClick={handleSubmit}
//               className="md:w-[200px] bg-[#2792C9] hover:bg-[#273D73] px-1 py-1 text-white lg:px-2 lg:py-3 rounded-full font-semibold text-lg"
//             >
//               Sign Up Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpecPopup;
import React, { useState } from "react";
import pen from "../assets/images/pen.jpg";
import flageusa from "../assets/images/flageusa.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SpecPopup = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    phone: ""
  });

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    }

    // Phone validation
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else {
      // Check allowed characters only
      const allowedCharsRegex = /^[0-9_+\(\)\s]*$/;
      if (!allowedCharsRegex.test(phone)) {
        newErrors.phone = "Phone number contains invalid characters";
        isValid = false;
      } else {
        // Count digits only
        const digitsOnly = phone.replace(/\D/g, "");
        if (digitsOnly.length < 10) {
          newErrors.phone = "Phone number must have at least 10 digits";
          isValid = false;
        } else if (digitsOnly.length > 20) {
          newErrors.phone = "Phone number must not exceed 20 digits";
          isValid = false;
        }
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({
        ...prev,
        email: ""
      }));
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Allow only digits, _, +, (, ), and spaces
    if (/^[0-9_+\(\)\s]*$/.test(value)) {
      setPhone(value);
      if (errors.phone) {
        setErrors((prev) => ({
          ...prev,
          phone: ""
        }));
      }
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      toast.success("Form submitted successfully!");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <div className="bg-gray-100 md:w-[450px] rounded-xl">
      <ToastContainer position="top-right" />
      <div className="flex items-center md:pt-10 justify-end">
        <div className="rounded-sm lg:p-5">
          <h2 className="lg:text-3xl font-bold text-center text-[#273771] mb-2">
            Refocus Refresh Relief
          </h2>
          <p className="text-center text-gray-700 text-sm mb-6">
            Be the first to access exclusive Magnetismo deals, migraine relief
            solutions, and soothing support for your daily screen routine.
          </p>

          <div>
            <div className="w-[250px] md:w-[300px] mx-auto mb-1">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full flex border-2 ${
                  errors.email ? "border-red-500" : "border-black"
                } outline-none rounded-full bg-white md:px-4 md:py-3 py-2 px-2 mb-1 focus:outline-none focus:ring-2 focus:ring-teal-500`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm px-4">{errors.email}</p>
              )}
            </div>

            <div className="w-[250px] md:w-[300px] mx-auto mb-1">
              <div
                className={`w-full border-2 ${
                  errors.phone ? "border-red-500" : "border-black"
                } outline-none rounded-full bg-white md:px-4 md:py-3 px-2 py-2 flex mb-1`}
              >
                <img src={flageusa} alt="" className="w-8 h-5 mt-1" />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  className="flex-grow focus:outline-none ps-2"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm px-4">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <img src={pen} className="md:h-[200px] object-contain" alt="Pen" />
          </div>

          <p className="text-[16px] flex mx-auto text-gray-600 mb-4 justify-center leading-tight">
            By submitting this form, you consent to receive informational{" "}
          </p>

          <div className="w-full flex justify-center lg:mb-0 mb-4">
            <button
              onClick={handleSubmit}
              className="md:w-[200px] bg-[#2792C9] hover:bg-[#273D73] px-1 py-1 text-white lg:px-2 lg:py-3 rounded-full font-semibold text-lg"
            >
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecPopup;
