// import React, { useEffect, useState } from "react";
// import PolicyBanner from "./PolicyBanner";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const MoneyBack = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     orderNumber: "",
//     purchaseDate: "",
//     description: "",
//   });

//   const [errors, setErrors] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     orderNumber: "",
//     purchaseDate: "",
//     description: "",
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

//     // Validate each field
//     Object.keys(formData).forEach((field) => {
//       if (!formData[field].trim()) {
//         newErrors[field] = "This field is required";
//         isValid = false;
//       }
//     });

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       toast.success("Form submitted successfully!", {
//         position: "top-right",
//         autoClose: 3000,
//       });

//       // Reset the form
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         orderNumber: "",
//         purchaseDate: "",
//         description: "",
//       });
//     }
//   };

//   return (
//     <div className="bg-gray-100">
//       <ToastContainer />
//       <PolicyBanner />
//       <div className="lg:ms-32 lg:mt-5  smm:mt-0 md:p-0 ms-6 p-5">
//         <h2 className="text-3xl font-semibold text-[#273771]">
//           Magnetismo Return/Refund Request Form
//         </h2>
//         <div className="mt-2">
//           <strong>
//             Please fill out this form within 15 days of receiving your order to
//             request a return or refund.
//           </strong>
//         </div>
//         <h3 className="font-medium">
//           Our team will get back to you within 24–48 hours.
//         </h3>
//       </div>

//       <div className="min-h-screen flex justify-center items-center bg-gray-100 lg:px-4 md:px-0 px-2 lg:py-2">
//         <div className="flex flex-col lg:flex-row gap-10 md:p-8 xs:ps-8  smm:ps-9 xsm:ps-8 rounded-xl max-w-6xl w-full">
//           {/* Policy Content */}
//           <div className="lg:w-1/2 lg:space-y-4">
//             <strong className="text-lg">Return & Refund Policy</strong>
//             <p>
//               At Magnetismo, we want you to be fully satisfied with your
//               purchase. If you are not completely happy with your order, we
//               offer a hassle-free return policy.
//             </p>
//             <div>
//               <h3 className="font-bold">Returns</h3>
//               <ul className="list-disc list-inside">
//                 <li>Return within 15 days of delivery.</li>
//                 <li>Product must be in original condition.</li>
//                 <li>Proof of purchase required.</li>
//                 <li>Return shipping is customer's responsibility.</li>
//               </ul>
//             </div>
//             <div>
//               <strong>Refunds</strong>
//               <ul className="list-disc list-inside">
//                 <li>Processed in 5-7 business days.</li>
//                 <li>Issued to original payment method.</li>
//               </ul>
//             </div>
//             <div>
//               <strong>Exchanges</strong>
//               <ul className="list-disc list-inside">
//                 <li>Contact: support@magnetismo.com</li>
//                 <li>Subject to availability.</li>
//               </ul>
//             </div>
//             <div>
//               <strong>Non-Returnable Items</strong>
//               <ul className="list-disc list-inside">
//                 <li>Gift cards</li>
//                 <li>Clearance items</li>
//               </ul>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="lg:w-1/2">
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="w-full">
//                   <label className="block text-gray-700 font-medium mb-2">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     placeholder="Enter your first name"
//                     className={`w-full border ${
//                       errors.firstName ? "border-red-500" : "border-gray-300"
//                     } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E9DE1]`}
//                   />
//                   {errors.firstName && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.firstName}
//                     </p>
//                   )}
//                 </div>
//                 <div className="w-full">
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     placeholder="Enter your last name"
//                     className={`w-full border ${
//                       errors.lastName ? "border-red-500" : "border-gray-300"
//                     } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E9DE1]`}
//                   />
//                   {errors.lastName && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.lastName}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="w-full">
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     className={`w-full border ${
//                       errors.email ? "border-red-500" : "border-gray-300"
//                     } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E9DE1]`}
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                   )}
//                 </div>
//                 <div className="w-full">
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Phone Number
//                   </label>
//                   <input
//                     type="number"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Enter your phone number"
//                     className={`w-full border ${
//                       errors.phone ? "border-red-500" : "border-gray-300"
//                     } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E9DE1]`}
//                   />
//                   {errors.phone && (
//                     <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//                   )}
//                 </div>
//               </div>

//               <div className="flex flex-col md:flex-row gap-4">
//                 <div className="w-full">
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Order Number
//                   </label>
//                   <input
//                     type="number"
//                     name="orderNumber"
//                     value={formData.orderNumber}
//                     onChange={handleChange}
//                     placeholder="Enter your order number"
//                     className={`w-full border ${
//                       errors.orderNumber ? "border-red-500" : "border-gray-300"
//                     } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E9DE1]`}
//                   />
//                   {errors.orderNumber && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.orderNumber}
//                     </p>
//                   )}
//                 </div>
//                 <div className="w-full">
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Date of Purchase
//                   </label>
//                   <input
//                     type="date"
//                     name="purchaseDate"
//                     value={formData.purchaseDate}
//                     onChange={handleChange}
//                     placeholder="Enter purchase date"
//                     className={`w-full border ${
//                       errors.purchaseDate ? "border-red-500" : "border-gray-300"
//                     } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E9DE1]`}
//                   />
//                   {errors.purchaseDate && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.purchaseDate}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Description
//                 </label>
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   placeholder="Enter your description"
//                   className={`w-full h-[130px] border ${
//                     errors.description ? "border-red-500" : "border-gray-300"
//                   } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E9DE1]`}
//                 />
//                 {errors.description && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.description}
//                   </p>
//                 )}
//               </div>

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-[#556EAF] text-white font-medium hover:bg-[#273771] transition rounded-full"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="md:flex md:justify-center ps-10 md:ps-0">
//         Need help? Email us at
//         <span className="font-bold ps-1">support@magnetismo.com</span>
//       </div>
//     </div>
//   );
// };

// export default MoneyBack;
import React, { useEffect, useState } from "react";
import PolicyBanner from "./PolicyBanner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MoneyBack = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    orderNumber: "",
    purchaseDate: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[\d\s\-\+\(\)]{10,20}$/;

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = "This field is required";
        isValid = false;
      }
    });

    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (10–15 digits)";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        orderNumber: "",
        purchaseDate: "",
        description: "",
      });
    } else {
      toast.error("Please correct the errors in the form.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="bg-gray-100">
      <ToastContainer />
      <PolicyBanner />
      <div className="lg:ms-32 lg:mt-5 smm:mt-0 md:p-0 ms-6 p-5">
        <h2 className="text-3xl font-semibold text-[#273771]">
          Magnetismo Return/Refund Request Form
        </h2>
        <div className="mt-2">
          <strong>
            Please fill out this form within 15 days of receiving your order to
            request a return or refund.
          </strong>
        </div>
        <h3 className="font-medium">
          Our team will get back to you within 24–48 hours.
        </h3>
      </div>

      <div className="min-h-screen flex justify-center items-center bg-gray-100 lg:px-4 md:px-0 px-2 lg:py-2">
        <div className="flex flex-col lg:flex-row gap-10 md:p-8 xs:ps-8 smm:ps-9 xsm:ps-8 rounded-xl max-w-6xl w-full">
          <div className="lg:w-1/2 lg:space-y-4">
            <strong className="text-lg">Return & Refund Policy</strong>
            <p>
              At Magnetismo, we want you to be fully satisfied with your
              purchase. If you are not completely happy with your order, we
              offer a hassle-free return policy.
            </p>
            <div>
              <h3 className="font-bold">Returns</h3>
              <ul className="list-disc list-inside">
                <li>Return within 15 days of delivery.</li>
                <li>Product must be in original condition.</li>
                <li>Proof of purchase required.</li>
                <li>Return shipping is customer's responsibility.</li>
              </ul>
            </div>
            <div>
              <strong>Refunds</strong>
              <ul className="list-disc list-inside">
                <li>Processed in 5-7 business days.</li>
                <li>Issued to original payment method.</li>
              </ul>
            </div>
            <div>
              <strong>Exchanges</strong>
              <ul className="list-disc list-inside">
                <li>Contact: support@magnetismo.com</li>
                <li>Subject to availability.</li>
              </ul>
            </div>
            <div>
              <strong>Non-Returnable Items</strong>
              <ul className="list-disc list-inside">
                <li>Gift cards</li>
                <li>Clearance items</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                {["firstName", "lastName"].map((field) => (
                  <div className="w-full" key={field}>
                    <label className="block text-gray-700 font-medium mb-2">
                      {field === "firstName" ? "First Name" : "Last Name"}
                    </label>
                    <input
                      type="text"
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={`Enter your ${
                        field === "firstName" ? "first" : "last"
                      } name`}
                      className={`w-full border ${
                        errors[field] ? "border-red-500" : "border-gray-300"
                      } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E9DE1]`}
                    />
                    {errors[field] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E9DE1]`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={`w-full border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E9DE1]`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block text-gray-700 font-medium mb-2">
                    Order Number
                  </label>
                  <input
                    type="number"
                    name="orderNumber"
                    value={formData.orderNumber}
                    onChange={handleChange}
                    placeholder="Enter your order number"
                    className={`w-full border ${
                      errors.orderNumber ? "border-red-500" : "border-gray-300"
                    } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E9DE1]`}
                  />
                  {errors.orderNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.orderNumber}
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label className="block text-gray-700 font-medium mb-2">
                    Date of Purchase
                  </label>
                  <input
                    type="date"
                    name="purchaseDate"
                    value={formData.purchaseDate}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors.purchaseDate ? "border-red-500" : "border-gray-300"
                    } px-4 py-3 rounded-md focus:outline-none text-gray-400 focus:ring-2 focus:ring-[#4E9DE1]`}
                  />
                  {errors.purchaseDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.purchaseDate}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter your description"
                  className={`w-full h-[130px] border ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  } px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4E9DE1]`}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description}
                  </p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#556EAF] text-white font-medium hover:bg-[#273771] transition rounded-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-center ps-10 md:ps-0">
        Need help? Email us at
        <span className="font-bold ps-1">support@magnetismo.com</span>
      </div>
    </div>
  );
};

export default MoneyBack;
