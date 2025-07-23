// import React, { useEffect, useState } from "react";
// import JoinTheMagnetistmo from "../components/joinTheMagnetistmo";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function ContactUs() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error when user types in field
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     let isValid = true;

//     // Validate each required field
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//       isValid = false;
//     }

//     if (!formData.contact.trim()) {
//       newErrors.contact = "Contact number is required";
//       isValid = false;
//     }

//     if (!formData.subject.trim()) {
//       newErrors.subject = "Subject is required";
//       isValid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//       isValid = false;
//     }

//     // Email validation with regex
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     } else {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(formData.email)) {
//         newErrors.email = "Please enter a valid email address";
//         isValid = false;
//       }
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       toast.success("Form submitted successfully!");

//       // Reset the form
//       setFormData({
//         name: "",
//         email: "",
//         contact: "",
//         subject: "",
//         message: "",
//       });
//     }
//   };

//   return (
//     <div className="relative">
//       <ToastContainer position="top-right" />
//       <div className="relative w-full">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full shadow-lg object-cover brightness-enhance"
//         >
//           <source
//             src={import.meta.env.VITE_VIDEO_IN_CONTACT_US}
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>

//         {/* Fixed heading with background only on the text */}
//         {/* <div className="absolute inset-0 flex justify-center items-center">
//           <h2 className="text-[#293E75] md:text-4xl text-3xl font-bold bg-gray-100 bg-opacity-90 px-6 py-3 rounded-lg">
//             Customer Support
//           </h2>
//         </div> */}
//       </div>
//       <section className="w-full bg-gray-100 flex justify-center items-center px-4">
//         <div className="max-w-4xl w-full bg-gray-100 md:p-8 p-3">
//           <h2 className="text-center text-4xl text-[#293E75] font-semibold md:mb-10 mb-4">
//             Let's Connect
//           </h2>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`w-full border-b ${
//                   errors.name ? "border-red-500" : "border-gray-400"
//                 } bg-gray-100 outline-none focus:border-[#273771] py-2`}
//                 placeholder="Your Name"
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//               )}
//             </div>

//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full border-b ${
//                   errors.email ? "border-red-500" : "border-gray-400"
//                 } bg-gray-100 outline-none focus:border-[#273771] py-2`}
//                 placeholder="Email"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//               )}
//             </div>

//             <div>
//               <input
//                 type="text"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 className={`w-full border-b ${
//                   errors.contact ? "border-red-500" : "border-gray-400"
//                 } bg-gray-100 outline-none focus:border-[#273771] py-2`}
//                 placeholder="Contact Number"
//               />
//               {errors.contact && (
//                 <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
//               )}
//             </div>

//             <div>
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className={`w-full border-b ${
//                   errors.subject ? "border-red-500" : "border-gray-400"
//                 } bg-gray-100 outline-none focus:border-[#273771] py-2`}
//                 placeholder="Subject"
//               />
//               {errors.subject && (
//                 <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
//               )}
//             </div>

//             <div>
//               <textarea
//                 rows="5"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className={`w-full border-b ${
//                   errors.message ? "border-red-500" : "border-gray-400"
//                 } bg-gray-100 outline-none focus:border-[#273771] py-2`}
//                 placeholder="Message"
//               />
//               {errors.message && (
//                 <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//               )}
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-[#556EAF] text-white px-10 py-2 rounded-md hover:bg-[#273771] transition"
//               >
//                 SUBMIT
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//       <JoinTheMagnetistmo />
//     </div>
//   );
// }

// export default ContactUs;
import React, { useEffect, useState } from "react";
import JoinTheMagnetistmo from "../components/joinTheMagnetistmo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VITE_VIDEO_IN_CONTACT_US } from "../enviroment";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  // Allow only valid characters in contact input
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    // Regex to allow digits, underscore, +, (, )
    const validContactRegex = /^[0-9_+()]*$/;
    if (value === "" || validContactRegex.test(value)) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      if (errors.contact) {
        setErrors((prev) => ({
          ...prev,
          contact: "",
        }));
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Use different handler for contact input to filter characters
    if (name === "contact") {
      handleContactChange(e);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types in field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
      isValid = false;
    } else {
      // Remove _ + ( ) from contact to count only digits
      const digitsOnly = formData.contact.replace(/[_+()]/g, "");
      // Check if only digits remain
      if (!/^\d+$/.test(digitsOnly)) {
        newErrors.contact = "Contact number can only contain digits and _+() symbols";
        isValid = false;
      } else if (digitsOnly.length < 10) {
        newErrors.contact = "Contact number must be at least 10 digits";
        isValid = false;
      } else if (digitsOnly.length > 20) {
        newErrors.contact = "Contact number cannot exceed 20 digits";
        isValid = false;
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Form submitted successfully!");

      // Reset the form
      setFormData({
        name: "",
        email: "",
        contact: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="relative">
      <ToastContainer position="top-right" />
      <div className="relative w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full shadow-lg object-cover brightness-enhance"
        >
          <source
            src={VITE_VIDEO_IN_CONTACT_US}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className="w-full bg-gray-100 flex justify-center items-center px-4">
        <div className="max-w-4xl w-full bg-gray-100 md:p-8 p-3">
          <h2 className="text-center text-4xl text-[#293E75] font-semibold md:mb-10 mb-4">
            Let's Connect
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border-b ${
                  errors.name ? "border-red-500" : "border-gray-400"
                } bg-gray-100 outline-none focus:border-[#273771] py-2`}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border-b ${
                  errors.email ? "border-red-500" : "border-gray-400"
                } bg-gray-100 outline-none focus:border-[#273771] py-2`}
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className={`w-full border-b ${
                  errors.contact ? "border-red-500" : "border-gray-400"
                } bg-gray-100 outline-none focus:border-[#273771] py-2`}
                placeholder="Contact Number"
              />
              {errors.contact && (
                <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full border-b ${
                  errors.subject ? "border-red-500" : "border-gray-400"
                } bg-gray-100 outline-none focus:border-[#273771] py-2`}
                placeholder="Subject"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            <div>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border-b ${
                  errors.message ? "border-red-500" : "border-gray-400"
                } bg-gray-100 outline-none focus:border-[#273771] py-2`}
                placeholder="Message"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#556EAF] text-white px-10 py-2 rounded-md hover:bg-[#273771] transition"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
      <JoinTheMagnetistmo />
    </div>
  );
}

export default ContactUs;
