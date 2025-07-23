import React, { useEffect, useRef, useState } from "react";
import FirstOrder from "../components/firstOrder";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoimg from "../assets/home/logo2.png";
import { ArrowRight } from "lucide-react";
import "./home.css";
import storyimage from "../assets/home/story.png";
import slide1 from "../assets/home/img4.jpeg";
import slide33 from "../assets/images/slide33.jpg";
import slide22 from "../assets/images/slide22.jpg";
import slide4 from "../assets/home/img4.3.png";
import slide5 from "../assets/home/img4.4.png";
import InnovativeRelief from "./InnovativeRelief";
import QualityInnovative from "./QualityInnovative";
import benefitts from "../assets/images/benefitts.jpg";
import { useChatBotContext } from "../context/ChatBotContext";
import bookconsultant from "../assets/images/bookconsultant.png";
import twentyfourhour from "../assets/images/twentyfourhour.png";
import slide1new from "../assets/images/slide1new.png";
import slide2new from "../assets/images/slide2new.png";
import slide3new from "../assets/images/slide3new.png";
import {
  VITE_HOME_HERO_SECTION_VIDEO2_URL,
  VITE_HOME_HERO_SECTION_VIDEO_URL,
  VITE_TESTIMONIALS_SECTION_JACK_VIDEO_URL,
  VITE_TESTIMONIALS_SECTION_JESSICA_VIDEO_URL,
  VITE_TESTIMONIALS_SECTION_ZACK_VIDEO_URL,
  VITE_VIDEO_IN_HOME_SCREENTIME_SECTION,
} from "../enviroment";

const slides = [
  {
    image: slide22,
    text: " Too Much Screen Time? Eyes Tired All Day? Experience instant relief from screen stress with Magnetismo – your eyes will thank you.",
  },
  {
    image: slide33,
    text: "Say Goodbye to Headaches & Eye Burn!Specially made for those who spend hours in front of screens – feel the difference in just days.",
  },
  {
    image: slide1,
    text: "Recommended by Long-Time Screen Users! Writers, gamers, coders – anyone who lives online loves the calming power of Magnetismo.",
  },
  {
    image: slide4,
    text: "Feel the Calm. Enjoy the Screen Again. No more tension or screen stress – Magnetismo restores your natural balance.",
  },
  {
    image: slide5,
    text: "Get Back to Work – Without the Pain! Join thousands who have found comfort, clarity, and relief with Magnetismo. Try it today.",
  },
];

// Banner slides array
const bannerSlides = [
  { image: slide1new },
  { image: slide2new },
  { image: slide3new },
];

const testimonials = [
  {
    name: "Jessica",
    position: "",
    text: "Magnetismo changed my life! I used to struggle with weak eyesight and stress from screen time until I found this amazing product. Now, I feel more relaxed and less tired, and my vision has improved!",
    video: VITE_TESTIMONIALS_SECTION_JESSICA_VIDEO_URL,
  },
  {
    name: "Zack",
    position: "New York City",
    text: "Magnetismo is a real game-changer! As a screen-heavy professional, it helped me stay focused, eased migraines, and improved my well-being. I highly recommend it for anyone facing digital fatigue!",
    video: VITE_TESTIMONIALS_SECTION_ZACK_VIDEO_URL,
  },
  {
    name: "Martin ",
    position: " San Antonio",
    text: "Magnetismo helped my mom—and now me too! It relieved her sinus pressure and eye strain and worked wonders for me as well. Highly recommended for anyone facing screen fatigue or sinus issues!",
    video: VITE_TESTIMONIALS_SECTION_JACK_VIDEO_URL,
  },
];

const Home = () => {
  const bgImage = "../src/assets/home/logo2.png";
  const navigate = useNavigate();
  const videoRefs = useRef([]);
  const videoReftwo = useRef(null);
  const sliderRef = useRef(null);
  const { setShowPopup } = useChatBotContext();
  const [isVisible, setIsVisible] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [currentBannerSlide, setCurrentBannerSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 const bannerIntervalRef = useRef(null);

useEffect(() => {
  startBannerInterval();
  return () => clearBannerInterval();
}, []);

const startBannerInterval = () => {
  clearBannerInterval();
  bannerIntervalRef.current = setInterval(() => {
    setCurrentBannerSlide((prev) => (prev + 1) % bannerSlides.length);
  }, 10000);
};

const clearBannerInterval = () => {
  if (bannerIntervalRef.current) {
    clearInterval(bannerIntervalRef.current);
    bannerIntervalRef.current = null;
  }
};

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoReftwo.current) {
      observer.observe(videoReftwo.current);
    }

    return () => {
      if (videoReftwo.current) {
        observer.unobserve(videoReftwo.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoReftwo.current) {
      if (isVisible) {
        videoReftwo.current.play();
      } else {
        videoReftwo.current.pause();
      }
    }
  }, [isVisible]);

  const handleMouseEnter = () => {
    videoReftwo.current?.play();
  };

  const handleMouseLeave = () => {
    videoReftwo.current?.pause();
  };

  // Slider hover handlers
  const handleSliderMouseEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const handleSliderMouseLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const [activeDot, setActiveDot] = useState(0);
  const settingss = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    beforeChange: (current, next) => setActiveDot(next),
    customPaging: (i) => (
      <div
        className={`w-2 h-2 absolute bottom-24 rounded-full cursor-pointer transition duration-300 ${
          i === activeDot ? "bg-blue-500" : "bg-gray-500"
        }`}
      ></div>
    ),
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleClick = () => {
    navigate("/how-it-works/#experts");
  };

  const handleShop = () => {
    navigate("/product#carrt");
  };

  const handlepopup = () => {
    setShowPopup((prev) => !prev);
  };

  const handleDiscover = () => {
    navigate("/how-it-works");
  };

  // Function to handle dot click for banner slideshow
  const handleBannerDotClick = (index) => {
    setCurrentBannerSlide(index);
  };

  return (
    <div className="">
      <section className="relative flex items-center justify-center md:h-screen h-[250px] ">
        <video
          autoPlay
          muted
          playsInline
          loop
          src={VITE_HOME_HERO_SECTION_VIDEO_URL}
          className="w-full h-full object-cover "
        />

        <div className="absolute inset-0 "></div>

        <button
          onClick={handleShop}
          className="absolute md:bottom-40 bottom-3  flex items-center gap-2 bg-[#4682B4] backdrop-blur-md border border-white/20 hover:bg-[#000080] transition px-6 py-2 rounded-full"
        >
          <span className="text-white text-lg font-medium">SHOP NOW</span>
          <ArrowRight className="text-white size-5" />
        </button>
      </section>

      <section>
        <QualityInnovative />
      </section>

      <section className="mt-5 relative ">
        <div>
          <div className="">
            <video
              ref={videoReftwo}
              src={VITE_HOME_HERO_SECTION_VIDEO2_URL}
              loop
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className=""
            />
          </div>
        </div>
        <div className="absolute md:bottom-32 bottom-32 md:left-64 ps-2  font-bold">
          <span className="bg-gray-50 md:px-3 px-1  text-sm md:text-2xl ">
            {" "}
            CLIP ON MAGNETISMO TO YOUR GLASSES FOR EFFECTIVE RELIEF
          </span>
        </div>
      </section>

      <section>
        <div>
          <InnovativeRelief />
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-2 md:px-4">
        <section className="py-5 ">
          {/* <h2 className="text-[30px] md:text-[40px] font-bold mb-10 ml-10 text-center md:text-start uppercase">
            HOW <span className="text-[#273771]">Magnetismo</span> WORKS?
          </h2> */}
          <div className="lg:flex lg:ps-10 ">
            <div className="lg:w-1/2 mt-10 ">
              <video
                src={VITE_VIDEO_IN_HOME_SCREENTIME_SECTION}
                className=" lg:h-[300px] object-cover rounded-md "
                loop
                muted
                autoPlay
              />
            </div>

            <div className="md:w-1/2 text-center md:text-start lg:justify-start md:justify-center lg:mx-start md:mx-auto">
              <h1 className=" text-[#273771] text-2xl my-5 font-bold">
                From Screen Fatigue to Soothing Relief
              </h1>
              <p className="text-gray-700">
                From Digital strain to natural ease
              </p>

              <p className="text-gray-700 pt-3">
                Magnetismo clip-on is your must-have accessory for natural
                headache relief and stress-free screen time.
              </p>
              <p className="mt-4 text-gray-700">
                Recommended by ophthalmologists, optometrists, and opticians.
              </p>
              <div className="relative md:w-[300px] md:h-[300px] items-center mt-6 space-x-4 px-8 md:px-0">
                <div className="relative">
                  <img
                    src={logoimg}
                    alt="Logo"
                    className="md:w-300 md:h-300  mt-3 rounded-md object-cover"
                  />
                  <div
                    onClick={handleDiscover}
                    className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center  gap-4 p-4"
                  >
                    <div>
                      <p className="text-gray-700 md:text-[16px] text-[14px]">
                        DISCOVER MORE
                      </p>
                    </div>
                    <div>
                      <button className="bg-[#273771] px-2 py-1 rounded-full text-white">
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* Banner Slideshow Section */}
          <section className="relative overflow-hidden">
            <div
              className="relative lg:h-[700px] md:h-[400px] xs:h-[170px] xsm:h-[200px] smm:h-[230px] overflow-hidden"
              onMouseEnter={clearBannerInterval}
              onMouseLeave={startBannerInterval}
            >
              {/* Banner Images */}
              {bannerSlides.map((banner, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentBannerSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={banner.image}
                    alt={`Banner ${index + 1}`}
                    className="w-full md:h-full md:object-cover"
                  />
                </div>
              ))}

              {/* Dots Navigation */}
              <div className="absolute md:bottom-4 bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-8">
                {bannerSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleBannerDotClick(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentBannerSlide
                        ? "bg-blue-900 scale-110"
                        : "bg-blue-800 hover:bg-blue-700"
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>
        </section>

        <div className="md:flex justify-evenly items-center mb-5 p-5 bg-gray-100">
          <div className=" md:ms-0 lg:ms-0 xs:ms-0 xsm:ms-0 smm:ms-7  ">
            <div>
              <img
                src={bookconsultant}
                alt=""
                className="w-[300px] h-[200px] object-contain xs:ms-0 xsm:ms-3 smm:ms-5 lg:ms-0 md:ms-0"
              />
              <div className="h-[35px] lg:hidden block"></div>
              <div className="text-3xl flex-col font-bold  lg:ps-4 md:ps-2 smm:pe-10 xs:pe-0 lg:pe-0  md:pe-0 md:text-center lg:text-start text-start flex mx-auto w-[120px]">
                <span className="xs:ms-5 smm:w-[220px] text-start">Book a</span>{" "}
                <span>Consultant</span>
              </div>
            </div>
            <div className="mt-3 flex justify-center md:ms-12 ms-0">
              <a
                href="https://calendly.com/wasayal-talent-network/30min?month=2025-04"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-36 md:py-2 md:px-2 py-2 px-3 flex justify-center uppercase bg-[#277AB1] text-center text-white font-semibold hover:bg-[#273D73] transition duration-300 rounded-full"
              >
                Book
              </a>
            </div>
          </div>
          <div
            className="md:w-[300px] w-[220px] h-[220px] md:block hidden md:h-[300px] md:ms-0 xs:ms-4 xsm:ms-12 smm:ms-20  "
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="mt-2 md:ms-7 xs:ms-10  xsm:ms-16 smm:ms-24  ">
            <div>
              <img
                src={twentyfourhour}
                alt=""
                className="w-[200px] h-[200px]  object-contain "
              />

              <h1 className="text-3xl font-bold md:text-center md:ps-0 xs:ps-14  ">
                24/7
              </h1>
              <h4 className="text-3xl font-bold md:w-full   w-[220px] md:ps-10 lg:ps-0 xs:ps-5  xsm:ps-5">
                Toll-Free-Helpline
              </h4>
            </div>
            <div className="mt-3 flex md:justify-center xs:ms-8">
              <button
                onClick={handlepopup}
                className="md:py-2 md:px-2 py-2 px-3 bg-[#277AB1] md:w-36 flex justify-center uppercase text-white font-semibold hover:bg-[#273D73] transition duration-300 rounded-full"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 border-r border-gray-400 md:h-[200px]"></div>

        <section 
          className="relative w-full overflow-visible"
          onMouseEnter={handleSliderMouseEnter}
          onMouseLeave={handleSliderMouseLeave}
        >
          <Slider ref={sliderRef} {...settingss}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative md:h-[600px] h-[400px] w-full"
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-center items-center text-center px-6">
                  <p className="text-gray-200 text-lg mt-2 max-w-2xl">
                    {slide.text}
                  </p>
                  <Link to="/product#carrt">
                    <button className="mt-4 bg-[#4682B4] text-white px-6 py-2  border border-white shadow-md hover:bg-[#000080] transition rounded-full">
                      SHOP NOW
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        <section className="w-full relative mt-0 p-0">
          <div className="flex flex-col md:flex-row">
            <div
              className="relative w-full md:w-1/2 group cursor-pointer"
              onClick={() => navigate("/story")}
            >
              <img
                src={storyimage}
                alt="Magnetismo Journey"
                className="md:h-[500px] h-[350px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#293E75] opacity-0 group-hover:opacity-90 transition-all duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center z-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-white text-center text-2xl md:text-4xl font-bold px-4 md:px-10">
                  The Birth of Magnetismo: A Personal Journey of Innovation
                  Toward Relief
                </h2>
              </div>
              <span className="absolute md:bottom-48  md:left-36 top-52 left-24  text-white -z-0 text-[35px] font-bold origin-bottom-left rotate-[-90deg] transition-colors duration-300 group-hover:text-white/10">
                Our Story
              </span>
            </div>
            <div
              className="relative w-full md:w-1/2 group cursor-pointer"
              onClick={handleClick}
            >
              <img
                src={benefitts}
                alt="benefits_image"
                className="md:h-[500px] h-[350px] w-full object-cover"
              />
              <div className="absolute top-52 -left-16 text-justify rotate-[-90deg]">
                {" "}
                <span className="text-white md:text-[39px] text-2xl font-bold">
                  Magnetismo Benefits
                </span>
              </div>
              <div className="absolute inset-0 bg-[#293E75] opacity-0 group-hover:opacity-90 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="text-4xl font-bold text-white text-center px-4">
                  Recommended By Experts
                </h1>
              </div>
            </div>
          </div>
        </section>

        <FirstOrder />

        <section className=" md:py-12 py-6 w-full lg:px-24 md:px-4 px-0 mx-auto text-center overflow-hidden bg-[#F8F8F8]">
          <ul className="py-4"></ul>
          <h2 className="text-2xl md:text-3xl text-center md:text-start px-4 font-semibold text-gray-800">
            WHY PEOPLE <span className="text-[#273771]">LIKE MAGNETISMO?</span>
          </h2>
          <div className="mt-8 ">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-1">
                  <div className="relative group w-full md:w-full lg:w-full  lg:h-[350px] h-[200px] md:h-[250px] overflow-hidden rounded-md shadow-md">
                    <div
                      className={`
              absolute inset-0 z-10 bg-gray-100 p-6 border-r border-gray-300
              ${
                testimonial.video
                  ? "group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
                  : ""
              }
            `}
                    >
                      <FaQuoteLeft className="text-4xl text-gray-300" />
                      <p className="mt-4 text-gray-600 text-start line-clamp-5">
                        {testimonial.text}
                      </p>
                      <div className="mt-6 flex flex-row items-center">
                        <div className="flex flex-col   lg:w-[300px] md:w-[300px]  justify-center items-center ">
                          <h4 className="mt-2 font-semibold text-gray-800 ">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-sm">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>

                    {testimonial.video && (
                      <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <video
                          controls
                          ref={(el) => (videoRefs.current[index] = el)}
                          src={testimonial.video}
                          className="  lg:w-full lg:h-full mx-auto  md:w-full md:h-full w-[220px] h-[220px] object-contain"
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Slider> 
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;