import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Stats from "./Stats";
import Article from "./Article";
import WorkWith from "./WorkWith";
import CTASection from "./CTASection";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";
import Button from "../../components/Button";
import ITServicesSlider from "./ITServicesSlider";
import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ----------- HERO SECTION -----------  */}
      <section className={isLargeScreen ? "background_img" : "bg-[#F1F5FD]"}>
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl px-4 sm:px-16 lg:px-14 xl:px-0 pt-24 pb-0 lg:pt-7 lg:pb-0 mx-auto">
          <div className="items-center lg:flex lg:min-h-screen">
            <div className="w-full pt-3 sm:pt-0 lg:w-1/2">
              <Fade top duration={2000}>
                <div className="lg:max-w-xl">
                  <h3 className="text-sm uppercase font-semibold text-blue-600 lg:text-md">
                    We are leading technology solutions provider
                  </h3>
                  <h2 className="Commissioner mt-3 w-[100%]  xl:w-[90%] text-2xl sm:text-4xl font-medium capitalize text-black lg:text-4xl xl:text-5xl">
                    Octa Tech Solutions- 24/7 Support for a Seamless Digital
                    World.
                  </h2>
                  <h2 className="Commissioner mt-2.5 text-sm sm:text-md font-normal text-black md:w-[80%] lg:w-[90%]">
                    Are tech problems slowing you down? We're your one-stop shop
                    for expert technical support, available 24/7.
                  </h2>

                  <div className="hero_section_buttons flex items-start xs:items-center sm:flex-row gap-4 sm:gap-6 mt-6 mb-10 sm:mb-0 lg:mt-7">
                    <Button text="Let's Talk" />
                  </div>
                </div>
              </Fade>
            </div>

            <div className="lg:hidden flex items-center justify-center w-full sm:max-w-md lg:max-w-full mx-auto pb-0 mb-0 mt-16 lg:mt-10 lg:w-1/2">
              <img
                className="w-full h-full object-contain"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Layer_4.png?v=1711140172"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------- HERO SECTION -----------  */}
      <section className="bg-blue-700 flex justify-center items-center">
        <h2 className="baloo text-white text-center text-md md:text-xl xl:text-2xl py-3 tracking-wider lg:tracking-widest">
          Experience Boundless Potential For Exponential Business Growth.
        </h2>
      </section>

      {/* ----------- ABOUT SECTION -----------  */}
      <section id="about_section" className="text-gray-600 body-font">
        <div className="max-w-7xl mx-auto flex px-4 sm:px-6 py-10 lg:pt-16 lg:py-10 md:flex-row flex-col">
          <div className="flex justify-center lg:justify-end items-center px-0 sm:px-6 lg:px-10 xl:px-0 lg:max-w-lg lg:w-full md:w-1/2 w-full mb-6 md:mb-0">
            <img
              alt="hero"
              className="object-contain h-[100%] w-[100%] xl:h-[90%] xl:w-[90%]"
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/IMG_2578.png?v=1713555109"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-3 flex flex-col md:items-start md:text-left">
            <Fade top duration={2000}>
              <div className="lg:max-w-xl pt-10">
                <h3 className="text-md uppercase font-semibold text-blue-600 lg:text-md">
                  About Us
                </h3>
                <h2 className="baloo my-2.5 text-2xl font-semibold capitalize text-black lg:text-4xl">
                  Get To Know Octa Tech
                </h2>
                <h2 className="text-sm font-normal text-black">
                  Octa Tech is a leading provider of comprehensive technical
                  support services. We're passionate about empowering
                  individuals and businesses with the tools and knowledge they
                  need to thrive in today's digital landscape.
                </h2>

                <div className="mission_bar grid grid-cols-1 gap-6 lg:grid-cols-1 xl:grid-cols-2 lg:gap-8 my-7 lg:my-5">
                  <div className="sec_1 flex items-center gap-4">
                    <div className="icon bg-blue-600 p-3 rounded-full">
                      <img
                        className="w-14"
                        src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/icon-park-solid_circular-connection.png?v=1711047761"
                        alt=""
                      />
                    </div>
                    <div className="data">
                      <h3 className="baloo text-lg text-black font-semibold">
                        Skilled Team
                      </h3>
                      <h3 className="text-sm text-black">
                        Our dedicated team ensures exceptional service.
                      </h3>
                    </div>
                  </div>

                  <div className="sec_1 flex items-center gap-4">
                    <div className="icon bg-blue-600 p-2 rounded-full">
                      <img
                        className="w-20"
                        src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/octicon_goal-16.png?v=1711047761"
                        alt=""
                      />
                    </div>
                    <div className="data">
                      <h3 className="baloo text-lg text-black font-semibold">
                        Transparency
                      </h3>
                      <h3 className="text-sm text-black">
                        We're committed to being your trusted tech partner for
                        the long haul.
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="hero_section_buttons flex items-start xs:items-center flex-col-reverse sm:flex-row gap-5 lg:gap-10 mt-8">
                  <Link
                    onClick={() => {
                      Tawk_API.toggle();
                    }}
                    className="ml-0 sm:ml-2 hero_about_btn text-center cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ----------- IT SERVICES -----------  */}
      <ITServicesSlider />

      <span className="relative flex justify-center">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span className="relative z-10 bg-white px-6"></span>
      </span>

      {/* ----------- COMPANY STATS -----------  */}
      <Stats />

      {/* ----------- CTA SECTION -----------  */}
      <CTASection />

      {/* ----------- TESTIMONIAL -----------  */}
      <Testimonial />

      {/* ----------- ARTICLE -----------  */}
      <Article />

      {/* ----------- ARTICLE -----------  */}
      <WhyChooseUs />

      {/* ----------- WORK WITH -----------  */}
      <WorkWith />
    </>
  );
};

export default HomePage;
