import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import mission from "../assets/howItswork/mission.png";
import howtouse from "../assets/howItswork/howTouse.png";
import JoinTheMagnetistmo from "../components/joinTheMagnetistmo";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FaqHowItWorks from "./FaqHowItWorks";
import { VITE_HOW_IT_WORKS_HERO_SECTION_VIDEO2_URL, VITE_HOW_IT_WORKS_HERO_SECTION_VIDEO_URL, VITE_PRICE_VIDEO_IN_INNOVATIVE_AND_HOW_IT_WORKS_PAGE } from "../enviroment";
function HowitsWork() {
  const videoSrc = VITE_PRICE_VIDEO_IN_INNOVATIVE_AND_HOW_IT_WORKS_PAGE;
  const [active, setActive] = useState("about");
  const location = useLocation();
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
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.substring(1);
      setActive(section);
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div className="  bg-gray-100">
      <section>
        <div className="relative  w-full lg:h-screen flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full shadow-lg object-cover"
          >
            <source
              src={VITE_HOW_IT_WORKS_HERO_SECTION_VIDEO_URL}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-2 md:px-4 ">
        <section className="flex flex-col justify-center items-center mt-12">
          <h1 className="text-[#273771] text-[20px] md:text-[35px] uppercase ">
            HOW MAGNETISMO WORKS
          </h1>
          <div className="text-start p-2 md:px-24">
            <p className="text-gray-800">
              Magnetismo clips onto your glasses at the temple area close to
              your eyes. The magnetic waves from Magnetismo gently reach the
              tiny blood vessels around your eyes, helping them relax and
              naturally expand. This magnetic therapy provides relief from eye
              strain, tension headaches, and migraines
            </p>
          </div>
        </section>

        <section>
          <div className="pt-10">
            <div className="flex justify-center md:space-x-6 space-x-3  border-b border-gray-300 pb-4 mb-4">
              {["About", "Mission", "How-To-Use", "Story", "FAQ'S"].map(
                (section) =>
                  section === "Story" ? (
                    <RouterLink
                      to="/how-it-works/story#story"
                      className={`cursor-pointer normal-case font-medium text-md transition-all pb-2 ${
                        active.toLowerCase() === "story"
                          ? "text-[#273771] border-b-2 border-[#273771]"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActive("story")}
                    >
                      Story
                    </RouterLink>
                  ) : (
                    <ScrollLink
                      key={section}
                      to={section.toLowerCase()}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      className={`cursor-pointer normal-case font-medium text-md transition-all pb-2 ${
                        active.toLowerCase() === section.toLowerCase()
                          ? "text-[#273771] border-b-2 border-[#273771]"
                          : "text-gray-500"
                      }`}
                      onClick={() => setActive(section.toLowerCase())}
                    >
                      {section.replace("-", " ")}
                    </ScrollLink>
                  )
              )}
            </div>
            <section id="faq">
              {active.toLowerCase() === "faq" && (
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                  <FaqHowItWorks />
                </div>
              )}
            </section>

            <section id="about" className="py-10 px-5">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
                <div className=" md:w-[700px] md:h-[400px] ">
                  <video
                    src={VITE_HOW_IT_WORKS_HERO_SECTION_VIDEO2_URL}
                    className=" mt-5 "
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  />
                </div>
                <div className="md:w-1/2 mt-4 ">
                  <h2 className="text-2xl font-bold text-[#273771] mb-6 text-center">
                    THE SCIENCE!
                  </h2>
                  <p className="text-gray-700 text-justify lg:text-lg ">
                    Earth itself is a massive magnet, maintaining balance and
                    harmony in its environment. Magnetismo harnesses this
                    natural phenomenon to help restore equilibrium in the human
                    body. Using neodymium magnets, the device creates a mild
                    magnetic field that induces small blood vessels to dilate or
                    constrict, thereby improving blood flow and reducing eye
                    strain headache relief. Frequent screen users—whether
                    working long hours on a computer screen or spending extended
                    time on mobile devices—often suffer from headaches caused by
                    screen time and strained eyes. Magnetismo enhances blood
                    circulation and oxygen levels, reducing inflammation and
                    preventing tissue damage that can lead to vision issues or
                    even headaches from computer monitors.
                  </p>
                </div>
              </div>
            </section>

            <section id="mission" className="md:py-10 md:mx-12 mx-5">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
                <div className="md:w-1/2 md:mt-24">
                  <h2 className="text-2xl font-bold text-[#273771] mb-6 text-center">
                    OUR MISSION
                  </h2>
                  <p className="text-gray-700 md:pl-10">
                    Our mission is to help individuals naturally find headache
                    relief and prevent frequent migraines using the innovative
                    power of Magnet Therapy. While this therapy works
                    progressively, consistent use of our migraine relief device
                    has been shown to significantly reduce headaches from screen
                    time by improving blood flow and oxygen levels around the
                    eyes
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src={mission}
                    alt="mission"
                    className="w-full max-w-sm md:max-w-md"
                  />
                </div>
              </div>
            </section>

            <section className="w-full">
              <div className="flex flex-col justify-center items-center mt-12 max-w-[900px] mx-auto text-center px-4">
                <h1 className="text-[#273771] text-[20px] md:text-[35px]">
                  Why MAGNETISMO WORKS
                </h1>
                <p className="mb-8 text-start">
                  Unlike conventional remedies, Magnetismo provides a
                  non-invasive headache solution for relieving eye strain
                  headaches and migraines caused by screen time. Whether you
                  need freelancer migraine relief, a wearable migraine device,
                  or a device to treat migraines naturally, Magnetismo has you
                  covered.
                </p>
              </div>
              <div className=" relative max-w-[1360px] w-full mx-auto ">
                {/* <img
                  src={whymegnitismo}
                  alt="Why Magnetismo Works"
                  className="w-full h-auto object-cover"
                /> */}
                <video
                  className=" w-full h-auto object-cover"
                  autoPlay
                  loop
                  muted
                  src={videoSrc}
                />
                <RouterLink to="/product#carrt">
                  <button className="md:w-36 lg:w-36 w-24 text-white mb-4  absolute lg:bottom-0 md:bottom-2 md:left-72 rounded-lg lg:left-[45%]  bg-[#4682B4] lg:px-2 lg:py-2 md:py-2 md:px-2  bottom-0 right-5 hover:bg-[#000080]  font-semibold ">
                    SHOP NOW
                  </button>
                </RouterLink>
                {/* <div className="absolute top-2 right-0">
                  <img
                    src={newprice}
                    className=" lg:w-[100px] lg:h-[100px] md:w-[50px] md:h-[50px] w-[50px] h-[50px] mix-blend-multiply"
                  />
                </div> */}
              </div>
            </section>

            <section id="how-to-use" className="py-10 px-6">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 relative">
                <div className="md:w-1/4 relative flex justify-center">
                  <img
                    src={howtouse}
                    alt="how to use"
                    className="w-auto max-w-[300px] md:max-w-[380px] "
                  />

                  {/* Overlay Text */}
                  <div className="absolute top-2 left-[50px] rotate-3 text-black text-md px-2 py-1 rounded ">
                    0.394 inches
                  </div>

                  <div className="absolute left-[170px] bottom-[140px] rotate-90  text-black text-md px-2 py-1 rounded">
                    1.5 inches
                  </div>
                </div>

                <div className="md:w-3/4">
                  <h2 className="text-2xl font-bold text-[#273771] mb-4 md:mb-6 text-center">
                    HOW TO USE
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Magnetismo is designed for effortless integration into your
                    daily routine, providing relief while you tackle tasks
                    requiring focus and attention, like working on digital
                    screens or reading.
                  </p>

                  <ol className="text-gray-700 space-y-2">
                    <li>
                      <span className="font-semibold">
                        1. Attaching the Device:
                      </span>{" "}
                      Clip the magnets onto the stems of your eyeglasses or
                      sunglasses.
                    </li>
                    <li>
                      <span className="font-semibold">
                        2. Optimal Placement:
                      </span>{" "}
                      Adjust the device to gently touch your temple area.
                    </li>
                    <li>
                      <span className="font-semibold">3. Preparation:</span> For
                      optimal results, each time you position the Magnetismo
                      device on your temples, close your eyes and gently massage
                      your earlobes for 20 to 30 seconds. This simple practice
                      enhances relaxation, promotes circulation, and maximizes
                      the benefits of your Magnetismo experience.
                    </li>
                    <li>
                      <span className="font-semibold">4. Consistent Use:</span>{" "}
                      Use Magnetismo as frequently as you're comfortable to
                      experience its full benefits, including relief from eye
                      strain headaches and improved focus.
                    </li>
                  </ol>

                  <p className="text-[#273771] font-semibold mt-6 uppercase text-sm md:text-base">
                    Join the Magnetismo movement towards natural headache
                    relief.
                    <br />
                    Because your well-being deserves more than just temporary
                    solutions.
                  </p>
                </div>
              </div>
            </section>
            <section
              id="experts"
              className="lg:h-[100px] h-[20px] w-full"
            ></section>
            <section className="w-full">
              <div className="flex flex-col justify-center items-center max-w-[900px] mx-auto text-center px-4">
                <h1 className="text-[#273771] text-[20px] md:text-[35px]">
                  KEY BENEFITS
                </h1>

                <ul className="list-disc list-inside text-left space-y-1">
                  <h3 className="text-left font-semibold">
                    Take a closer look and witness a new dimension of
                    technology.
                  </h3>
                  <li>Alleviates headaches due to too much screen time.</li>
                  <li>
                    Provides eye strain headache relief for those working long
                    hours on computer screens.
                  </li>
                  <li>
                    Acts as a natural migraine relief device without side
                    effects.
                  </li>
                  <li>Portable and Easy Store Point.</li>
                  <li>Safe Neodymium Therapy Magnet.</li>
                  <li>Flexible to Fit All Frame Sizes.</li>
                  <li>Easy to Clip-on.</li>
                  <li>Lightweight.</li>
                  <li>Easy to Store.</li>
                </ul>
              </div>
            </section>
            <section className="py-10 px-6"></section>

            <JoinTheMagnetistmo />
          </div>
        </section>
      </div>
    </div>
  );
}

export default HowitsWork;
