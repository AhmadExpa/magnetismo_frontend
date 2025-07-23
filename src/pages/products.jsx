"use-client";
import React, { useState, useRef, useEffect } from "react";
import Reviews from "../components/reviews";
import Toast from "../pages/Toast";
import hdpen from "../assets/images/hdpen.jpg";
import bookkeep from "../assets/images/bookkeep.jpg";
import shipping from "../assets/product/shipping.png";
import Warning from "../assets/product/warning.png";
import logo from "../assets/home/Magnetismo_Logo.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/features/cartSlice";
import { useGetProductQuery } from "../store/useRtkQuery";
import FirstOrder from "../components/firstOrder";
import { useLocation } from "react-router-dom";
import spinner from "../assets/images/spinner.jpg";
import { FaCheck } from "react-icons/fa";
import newforproduct from "../assets/images/newforproduct.jpg";
import newforproducttwo from "../assets/images/newforproducttwo.jpg";
import newforproductthree from "../assets/images/newforproductthree.jpg";
import { VITE_PRODUCT_HERO_SECTION_VIDEO_URL, VITE_PRODUCT_ID } from "../enviroment";

const images = [
  newforproductthree,
  newforproduct,
  bookkeep,
  hdpen,
  spinner,
  newforproducttwo,
];

const tabs = [
  {
    name: "GALLERY",
    content: `
      <p>The device is designed to optimize the widely acceptable form of therapy using static magnet.
A mild magnetic field is created to induce small blood vessels to  dilate or constrict and thereby, increase blood flow which is critical  in reducing stiffness, inflammation and overall pain. Device is  extremely  helpful for those that spend extended amount of time in front of time in front of screens and get frequent headaches due to poor  blood circulation around eyes.
Frequent use of the device should help supply proper blood flow and  oxygen levels, preventing tissue damage that results in poor eyesight  and/or vision loss.</p>
      <ul class="list-disc pl-3 mt-4">
        <li><strong>Migraine Relief With Magnetic Therapy</strong> – Effortlessly attaches to your glasses, delivering relief in seconds.</li>
        <li><strong>Ease the Strain, Sharpen Your Focus</strong> – Naturally reduces headaches and strain, helping you stay focused and relaxed without medication.</li>
        <li><strong>Stress-free Screen Time</strong> – Protects against digital fatigue so you can work, game, or read with ease.</li>
        <li><strong>Light as Air, Strong in Relief</strong> – Designed for comfort without pressure, so you feel the benefits without even noticing it's there.</li>
        <li><strong>Crafted for Wellness & Durability</strong> – Made with premium, skin-friendly materials to support your well-being for the long haul.</li>
        <li><strong>Relief, Anytime, Anywhere</strong> – No charging, no fuss—just on-the-go comfort whenever you need it most.</li>
        <p>Feel better focus longer, and take control of your screen time with Magnetismo.</p>
      </ul>
    `,
  },
  {
    name: "INSTRUCTIONS",
    content: `Place the device gently over your eyes, ensuring a comfortable fit without excessive pressure. Use it for 15-30 minutes per session, ideally 2-3 times a day, especially after prolonged screen exposure. Regular use helps improve blood circulation, reducing headaches and eye strain. Avoid use if you have metal implants, pacemakers, or serious eye conditions without consulting a doctor.
      <li class='mt-2' >Magnetismo is designed for effortless integration into your daily routine, providing relief while you tackle tasks requiring focus and attention, like working on digital screens or reading.</li><li class='mt-2'>Attaching the Device: Clip the magnets onto the stems of your eyeglasses or sunglasses.</li> 
      <li class='mt-2'> Optimal Placement: Adjust the device to gently touch your temple area.</li>
      <li class='mt-2'> Preparation: For optimal results, each time you position the Magnetismo device on your temples, close your eyes and gently massage your earlobes for 20 to 30 seconds. This simple practice enhances relaxation, promotes circulation, and maximizes the benefits of your Magnetismo experience.</li>
      <li class='mt-2'> Consistent Use: Use Magnetismo as frequently as you're comfortable to experience its full benefits, including relief from eye strain headaches and improved focus.</li>`,
  },
  {
    name: "REVIEWS",
    content: "",
  },
  {
    name: "WARNING",
    content: "Safety & Usage Guidelines",
    image: Warning,
    points: `
      Magnetismo is designed to enhance visual comfort, but please follow these precautions for safe use: <br/> <br/>
      <b>Not a Medical Device:</b> Magnetismo is not intended to diagnose, treat, cure, or prevent any medical condition. Consult an eye care professional for any vision-related concerns. <br/> <br/>
      <b>Pacemakers & Medical Implants:</b> This product contains magnets. If you have a pacemaker, defibrillator, or any other medical implant that may be affected by magnets, consult your doctor before using Magnetismo. <br/> <br/>
      <b>Pregnancy Precaution:</b> If you are pregnant or have any medical conditions that could be affected by magnetic fields, seek medical advice before using Magnetismo.
 <br/> <br/>
      <b>Proper Attachment:</b> * Proper Attachment: Ensure Magnetismo is securely attached to your eyewear before use to prevent accidental detachment.<br/> <br/>
      <b>Use as Directed: </b>Do not modify or tamper with the product, as this may affect its functionality and safety.<br/> <br/>
      <b>Keep Away from Small Children:</b> Small parts may pose a choking hazard. Keep out of reach of young children.<br/> <br/>
      <b>Note: Magnetismo is not a toy. It is not recommended for children under the age of 14.</b><br> <br/>

      <b>Avoid Extreme Conditions: </b> Do not expose Magnetismo to excessive heat, moisture, or strong magnetic fields, as this may damage the product.<br/> <br/>
      <b>Discontinue Use if Discomfort Occurs:</b> If you experience discomfort, irritation, dizziness, or any unusual symptoms while using Magnetismo, stop using it and consult a healthcare professional. <br/> <br/>
      For any questions or concerns, contact [support contact].
    `,
  },
  {
    name: "WARRANTY",
    content: `
      <h2 class="text-lg font-semibold text-gray-900">Magnetismo One-Year Limited Warranty</h2>
      <p class="mt-2">At Magnetismo, we stand behind the quality of our product. We offer a one-year limited warranty from the date of purchase, covering defects in materials and workmanship under normal use.</p>

      <h3 class="mt-4 font-medium text-gray-900">Warranty Coverage:</h3>
      <ul class="list-none mt-2 space-y-2">
        <li class="flex items-center">
          <span class="text-green-600 text-lg mr-2">✔</span> <strong>Manufacturing defects</strong>.
        </li>
        <li class="flex items-center">
          <span class="text-green-600 text-lg mr-2">✔</span> <strong>Faulty materials or workmanship</strong>.
        </li>
        <li class="flex items-center">
          <span class="text-green-600 text-lg mr-2">✔</span> <strong>Malfunctions occurring under normal usage</strong>.
        </li>
      </ul>

      <h3 class="mt-4 font-medium text-gray-900">What's Not Covered?</h3>
      <ul class="list-none mt-2 space-y-2">
        <li class="flex items-center">
          <span class="text-red-600 text-lg mr-2">✘</span> Damage caused by <strong>misuse, neglect, or accidents</strong>.
        </li>
        <li class="flex items-center">
          <span class="text-red-600 text-lg mr-2">✘</span> Unauthorized modifications or repairs.
        </li>
        <li class="flex items-center">
          <span class="text-red-600 text-lg mr-2">✘</span> Normal wear and tear (scratches, discoloration, etc.).
        </li>
        <li class="flex items-center">
          <span class="text-red-600 text-lg mr-2">✘</span> Loss or theft of the product.
        </li>
      </ul>

      <h3 class="mt-4 font-medium text-gray-900">Warranty Claim Process:</h3>
      <ol class="list-decimal pl-6 mt-2 space-y-2">
        <li>Contact our support team at <strong>help@themagnetismo.com | support@themagnetismo.com</strong> with your order details and a description of the issue.</li>
        <li>Provide clear photos or videos of the defect for assessment.</li>
        <li>If your claim is approved, we will offer a replacement or repair at no additional cost.</li>
      </ol>

      <h3 class="mt-4 font-medium text-gray-900">Limitations of Liability:</h3>
      <p class="mt-2">Magnetismo is not responsible for incidental or consequential damages arising from the use of the product. The warranty is valid only for the original purchaser and is non-transferable.</p>

      <p class="mt-4">For any warranty-related inquiries, please reach out to <strong>+1(833)000-000</strong>.</p>
    `,
  },
];

const Products = () => {
  const location = useLocation();
  const policyTabRef = useRef(null);
  const reviewRef = useRef(null);
  const [activeTab, setActiveTab] = useState(
    location.state?.activeTab || "DESCRIPTION"
  );

  // Toast state
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location]);

  const [productDetail, setProductDetail] = useState({
    title: "",
    description: "",
    price: "",
    images: [],
    discount: "",
  });

  const productId = VITE_PRODUCT_ID;
  const { data } = useGetProductQuery(productId);

  console.log("Product Data:", data);
  console.log("Product Detail:", productId);

  useEffect(() => {
    if (data?.data?.product) {
      const product = data.data.product;
      const imageUrls = product.images.edges.map((edge) => edge.node.url);
      setProductDetail({
        title: product.title,
        description: product.description,
        price: product.priceRange.minVariantPrice.amount,
        images: imageUrls,
      });
    }
  }, [data]);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (location?.state?.scrollTo === "reviews") {
      setTimeout(() => {
        reviewRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
    window.scrollTo(0, 0);
  }, []);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Updated handleAddToCart function with toast
  const handleAddToCart = () => {
    if (data?.data?.product) {
      const product = data.data.product;
      const variantId = product.variants.edges[0].node.id;

      dispatch(
        addToCart({
          id: variantId,
          name: product.title,
          price: parseFloat(product.priceRange.minVariantPrice.amount),
          quantity,
        })
      );

      // Show success toast
      setToast({
        isVisible: true,
        message: `${quantity} item${
          quantity > 1 ? "s" : ""
        } added to cart successfully!`,
        type: "success",
      });
    }
  };

  // Function to close toast
  const closeToast = () => {
    setToast((prev) => ({
      ...prev,
      isVisible: false,
    }));
  };

  const [selectedImage, setSelectedImage] = useState(newforproductthree);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const ww = document.getElementById(id);
      if (ww) {
        setTimeout(() => {
          ww.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className=" bg-gray-100">
      {/* Toast Component */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />

      <section className="">
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full shadow-lg object-cover md:h-screen "
          >
            <source
              src={VITE_PRODUCT_HERO_SECTION_VIDEO_URL}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section>
        <div className="flex flex-col max-w-4xl mx-auto md:p-12 p-4">
          <div className="flex md:gap-4 flex-col md:flex-row justify-center items-center md:mb-3">
            <img src={logo} alt="" />
            <h1 className="text-center text-[35px] md:text-[55px] text-[#273771]">
              MAGNETISMO
            </h1>
          </div>

          <p className="text-center">
            With a portfolio of proprietary and licensed brands that cover a
            wide range of market segments.
          </p>
        </div>
      </section>

      <section id="carrt" className="w-full md:h-100px]"></section>

      <section className="px-4 md:px-10 lg:px-20 xl:px-52 md:pb-3">
        <div className="flex flex-col md:flex-row gap-10 ">
          <div className="grid grid-cols-4 md:mt-6 mt-3 md:flex md:flex-col gap-3 md:mx-0 lg:mx-0 mx-auto justify-center md:justify-start">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-14 h-14 md:w-12 md:h-12 cursor-pointer rounded-lg border-2 ${
                  selectedImage === img ? "border-[#556EAF]" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-6 w-full ">
            <img
              src={selectedImage}
              alt="Main Product"
              className="w-full lg:w-[450px] lg:h-[400px] md:w-[300px] md:h-[400px] md:mt-6 rounded-lg  mx-auto"
            />
            <div className="flex flex-col gap-3 md:m-4 text-center md:text-left">
              <h2 className="text-2xl  font-semibold">
                Magnetismo -{" "}
                <span className="text-[#293E75]">
                  Magnetic eye therapy for a digital world!
                </span>
              </h2>
              <ul className="list-none space-y-3">
                <li className="flex items-start gap-2">
                  <span className="flex justify-center items-center rounded-full  bg-gray-300 text-[#293E75] flex-shrink-0 mt-0.5">
                    <FaCheck className="text-sm" />
                  </span>
                  <span className="text-gray-600 text-sm ">
                    Migraine Relief With Magnetic Therapy
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex justify-center items-center rounded-full  bg-gray-300 text-[#293E75] flex-shrink-0 mt-0.5">
                    <FaCheck className="text-sm" />
                  </span>
                  <span className="text-gray-600  text-sm">
                    The pursuit of definitive headache freedom
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex justify-center items-center rounded-full  bg-gray-300 text-[#293E75] flex-shrink-0 mt-0.5">
                    <FaCheck className="text-sm" />
                  </span>
                  <span className="text-gray-600  text-sm">
                    Ease the Strain, Sharpen Your Focus
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex justify-center items-center rounded-full  bg-gray-300 text-[#293E75] flex-shrink-0 mt-0.5">
                    <FaCheck className="text-sm" />
                  </span>
                  <span className="text-gray-600  text-sm">
                    Stress-free Screen Time
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex justify-center items-center rounded-full  bg-gray-300 text-[#293E75] flex-shrink-0 mt-0.5">
                    <FaCheck className="text-sm" />
                  </span>
                  <span className="text-gray-600 text-sm">
                    Light as Air, Strong in Relief
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex justify-center items-center rounded-full  bg-gray-300 text-[#293E75] flex-shrink-0 mt-0.5">
                    <FaCheck className="text-sm" />
                  </span>
                  <span className="text-gray-600  text-sm">
                    Crafted for Wellness & Durability
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex justify-center items-center rounded-full  bg-gray-300 text-[#293E75] flex-shrink-0 mt-0.5">
                    <FaCheck className="text-sm" />
                  </span>
                  <span className="text-gray-600 text-sm">
                    Relief, Anytime, Anywhere.
                  </span>
                </li>
              </ul>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-lg md:text-xl font-bold">$18.99</span>
              </div>

              <div className="flex items-center justify-center md:justify-start">
                ⭐⭐⭐⭐⭐{" "}
                <span className="ml-2 text-gray-600 text-sm">
                  5 Customer Reviews
                </span>
              </div>

              <div className="flex items-center gap-2 justify-center md:justify-start">
                <img
                  src={shipping}
                  alt="Shipping"
                  className="w-5 md:w-8 h-auto"
                />
                <span className="text-[#293E75] text-lg md:text-[20px] font-medium">
                  Free Carrying Case
                </span>
              </div>
              <div className="flex items-center mx-auto md:mx-0 space-x-3">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 md:px-4 py-1 md:py-2 border border-gray-300 rounded-lg"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-3 md:px-4 py-1 md:py-2 border border-gray-300 rounded-lg"
                >
                  +
                </button>

                <button
                  onClick={handleAddToCart}
                  className="bg-[#556EAF] hover:bg-[#293E75] text-white px-2 py-2 md:px-1 md:py-0 lg:px-4 lg:py-2 rounded-sm "
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1360px] mx-auto">
        <div className="mt-12">
          <div className="md:p-0 px-3 overflow-x-auto scrollbar-hide">
            <div className="flex md:justify-center gap-4 md:gap-10 border-b-2  md:px-0 whitespace-nowrap">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`cursor-pointer pb-2 text-sm sm:text-md md:text-lg font-medium md:font-semibold capitalize md:uppercase ${
                    activeTab === tab.name
                      ? "border-b-4 border-[#273771] text-[#273771]"
                      : "text-gray-600"
                  }`}
                >
                  {tab.name.toLowerCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="sm:px-2  w-full   ">
            <div
              className="py-2 px-6  mt-4 text-[16px] text-gray-700 overflow-auto"
              ref={reviewRef}
            >
              {activeTab === "REVIEWS" ? (
                <Reviews />
              ) : activeTab === "WARNING" ? (
                <div>
                  <div className="flex items-center gap-4  ">
                    <img
                      src={tabs.find((tab) => tab.name === "WARNING")?.image}
                      alt="Warning Icon"
                      className="w-16 h-16"
                    />
                    <p>{tabs.find((tab) => tab.name === "WARNING")?.content}</p>
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: tabs.find((tab) => tab.name === "WARNING")
                        ?.points,
                    }}
                  ></p>
                </div>
              ) : (
                <div
                  className="w-full "
                  dangerouslySetInnerHTML={{
                    __html: tabs.find((tab) => tab.name === activeTab)?.content,
                  }}
                ></div>
              )}
            </div>
          </div>
        </div>
      </section>

      <FirstOrder />
    </div>
  );
};

export default Products;
