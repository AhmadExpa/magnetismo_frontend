import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";
import vidio1 from "../assets/howItswork/V1.mp4";
import pen from "../assets/images/pen.jpg";
import benefits from "../assets/howItswork/benifits.gif";
import { useLocation } from "react-router-dom";
import FirstOrder from "../components/firstOrder";
import { VITE_STORY_HERO_SECTION_VIDEO_URL } from "../enviroment";

const Story = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 590);
  }, []);

  return (
    <>
    <div
      className="max-w-[1360px] mx-auto bg-gray-100 
     "
    >
      <section>
        <div className="relative  mb-12 w-full md:h-[700px] h-[300px] flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full shadow-lg object-cover"
          >
            <source src={VITE_STORY_HERO_SECTION_VIDEO_URL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Navigation Section */}
      <section>
        <section className="flex flex-col mb-12 justify-center items-center">
          <h1 className="text-[#273771] text-[20px] md:text-[35px]">
            HOW WE WORK
          </h1>
          <p className="text-gray-800 md:px-0 px-4 text-center">
            We are a global leader in the design, manufacture, and distribution
            of ophthalmic lenses, frames, and sunglasses.
          </p>
        </section>

        <nav className="flex justify-center space-x-4 md:space-x-8 mx-4 md:mx-0 text-gray-500 text-sm md:text-md border-b pb-3">
          <RouterLink
            to="/how-it-works#about"
            className="hover:text-[#273771] first-letter:uppercase md:uppercase"
          >
            about
          </RouterLink>
          <RouterLink
            to="/how-it-works#mission"
            className="hover:text-[#273771] first-letter:uppercase md:uppercase"
          >
            our mission
          </RouterLink>
          <RouterLink
            to="/how-it-works#how-to-use"
            className="hover:text-[#273771] first-letter:uppercase md:uppercase"
          >
            how to use
          </RouterLink>
          <RouterLink
            to="/how-it-works/story#story"
            className="text-[#273771] border-b-2 border-[#273771] first-letter:uppercase md:uppercase"
          >
            story
          </RouterLink>
          <RouterLink
            to="/faq"
            className="hover:text-[#273771] first-letter:uppercase md:uppercase"
          >
            Faq
          </RouterLink>
        </nav>
      </section>
      <section
        id="story-section"
        className="bg-gray-100  py-5 px-4 md:px-20 text-gray-800"
      >
        <h1 className="text-center text-[#273771] text-3xl font-bold mt-6">
          OUR STORY
        </h1>
        <img src={pen} alt="" className="mx-auto"/>

        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4 mt-3">
            The Birth of Magnetismo:
            <span className="text-blue-500">
              {" "}
              A Personal Journey of Innovation Toward Relief
            </span>
          </h3>
        </div>
        <div className="flex justify-between md:flex-row flex-col">
          <div className="text-md text-gray-700 leading-relaxed">
            <p className="lg:mb-6">
              As the age-old adage goes: "Necessity is the mother of invention."
            </p>
            <p className="lg:mb-6">
              For most of my life, I had suffered from debilitating migraine
              attacks that left me sensitive to both light and sound; nauseous
              and completely incapacitated. Migraine is recognized in medical
              science as the second most excruciating ailment after child labour
              pain and sadly its exact cause and cure remains elusive.
            </p>
            <p className="lg:mb-6">
              For those who endure migraine attacks, this distress is all too
              familiar. They often occur when tiny blood vessels in the brain
              either dilate or constrict due to strain and stress. Understanding
              this process led me to explore a unique approach in helping to
              alleviate migraine attacks. I was cognizant that blood contains
              iron (in the form of ferrous oxide) and that magnets have the
              ability to interact positively with iron.
            </p>
            <p className="mb-6 ">
              Driven by personal need, I delved into years of deep research,
              poring over studies from renowned institutions and conducting
              countless experiments. My ultimate goal was to create a solution
              that worked exponentially, effectively and safely without side
              effects. After extensive trial and error, I developed Magnetismo
              which incorporates precisely intense magnets that work
              effortlessly and effectively.
            </p>
          </div>
          <div className="text-md text-gray-700 ml-0 md:ml-7 ">
            <p className="lg:mb-6">
              After using Magnetismo for a year, I can honestly vouch that my
              headaches from looking at screens and my migraine attacks have
              disappeared 99 per cent. Tasks that once seemed impossible,
              especially working long hours on my computer or phone, are now
              manageable whereby I can maintain focus and general productivity
              like never before. As someone who personally benefited from the
              impactful and life-altering effects of this device, I opted to
              introduce it directly into the market.
            </p>
            <p className="lg:mb-6">
              Rather than sell the idea to corporate giants for commercial gain,
              I want to ensure this innovation swiftly reaches those who need it
              most so that they can also experience the same natural headache
              relief without side effects.
            </p>
            <p className="lg:mb-6 ">
              With Magnetismo, our mission is simple: To empower individuals to
              thrive amid focused and pain-free lives. Whether you’re a gamer,
              designer, or remote worker dealing with eye strain from working at
              home, <br />
              <span className="text-[#273771]">
                Magnetismo is the solution you’ve been waiting for.
              </span>
            </p>
            <p className="font-semibold text-[#273771] mt-3 md:mt-0">
              Let us help you, relieve your eyes and energize your mind. <br />
              With Magnetismo, a bright and focused future awaits you.
            </p>
          </div>
        </div>
      </section>

     

      {/* <div className="w-screen ml-[calc(-50vw+50%)]">
        <img
          src={benefits}
          alt="Key Benefits"
          className="w-full h-[500px] border-2 border-yellow-300 object-cover"
        />
      </div> */}
      {/* <JoinTheMagnetistmo /> */}
    </div>
     {/* <FirstOrder /> */}
    </>
  );
};

export default Story;
