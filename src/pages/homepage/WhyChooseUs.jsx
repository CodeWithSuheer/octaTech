import Button from "../../components/Button";
import { Fade } from "react-awesome-reveal";

const WhyChooseUs = () => {
  return (
    <>
      <section className="slider_back">
        <div className="max-w-6xl xl:max-w-7xl mx-auto flex px-4 sm:px-6 py-10 lg:py-14 md:flex-row flex-col">
          <div className="flex justify-center lg:justify-end items-center lg:max-w-lg lg:w-full md:w-1/2 w-full mb-6 md:mb-0">
            <img
              alt="hero"
              className="object-contain h-full w-full xl:h-full xl:w-full sm:px-10"
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2210.png?v=1711134978"
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-3 flex flex-col md:items-start md:text-left">
            <Fade top duration={2000}>
              <div className="lg:max-w-xl pt-10">
                <h3 className="text-md uppercase font-semibold text-blue-600 lg:text-md">
                  Why Choose Us
                </h3>
                <h2 className="baloo my-2.5 text-2xl font-semibold capitalize text-black lg:text-3xl  xl:text-4xl">
                  Why Octa Tech Seems A Perfect Match?
                </h2>
                <h2 className="text-sm font-normal text-black">
                  Tech shouldn't be a headache. We believe in making technology
                  simple, reliable, and empowering. Here's why Octa Tech is your
                  perfect partner:
                </h2>

                <div className="mission_bar grid grid-cols-1 gap-6 lg:grid-cols-1 xl:grid-cols-2 lg:gap-2 my-7 lg:my-5">
                  <div className="sec_1 flex items-center">
                    <div className="icon w-20 rounded-full">
                      <img
                        className="max-w-16"
                        src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2211.png?v=1711136644"
                        alt=""
                      />
                    </div>
                    <div className="data ml-2">
                      <h3 className="baloo text-xl text-black font-semibold">
                        Business Growth
                      </h3>
                      <h3 className="text-sm">
                        Take your brand to new heights through strategic
                        business growth
                      </h3>
                    </div>
                  </div>

                  <div className="sec_1 flex items-center">
                    <div className="icon w-20 rounded-full">
                      <img
                        className="max-w-16"
                        src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2211_1.png?v=17111366441"
                        alt=""
                      />
                    </div>
                    <div className="data ml-2">
                      <h3 className="baloo text-xl text-black font-semibold">
                        Bespoke Solutions
                      </h3>
                      <h3 className="text-sm">
                        Our technicians deliver customized solutions that fit
                        your specific goals.
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="hero_section_buttons flex items-start xs:items-center flex-col-reverse sm:flex-row gap-5 lg:gap-10 mt-10">
                  <Button text="Contact Us" />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
