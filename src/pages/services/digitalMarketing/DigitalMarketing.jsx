import Stats from "../../homepage/Stats";
import Testimonial from "../../homepage/Testimonial";
import Button from "../../../components/Button";

const DigitalMarketing = () => {
  return (
    <>
      <section className="relative pt-3 lg:pt-20 lg:pb-12 bg-gray-50">
        {/* GRADIENT */}
        <div className="absolute inset-x-0 bottom-0 z-0 transform-gpu overflow-hidden blur-3xl">
          <svg
            className="h-[21.1875rem] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5c55d9" />
                <stop offset={1} stopColor="#e8c8d5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-6xl px-4 z-50 sm:px-6 pt-16 pb-2 lg:pt-0 lg:pb-0 mx-auto">
          <div className="items-center lg:flex lg:min-h-[60vh]">
            <div className="w-full pt-3 sm:pt-0 lg:w-1/2">
              <div className="lg:max-w-xl">
                <h2 className="mt-3 w-[100%]  xl:w-[90%] text-4xl font-semibold capitalize text-black lg:text-5xl xl:text-5xl">
                  Digital Marketing Services
                </h2>
                <h2 className="mt-4 text-md font-normal text-black md:w-[80%] lg:w-[80%]">
                  At Octa Tech, be assured that your business/website to strive
                  and flourish in the digital space with our digital marketing
                  services.
                </h2>

                <div className="hero_section_buttons flex items-start xs:items-center flex-col sm:flex-row gap-10 mt-6 mb-10 sm:mb-0 lg:mt-7">
                  <Button text="Let's Talk" />
                </div>
              </div>
            </div>

            <div className="user_select flex items-center justify-center px-0 sm:px-10 xl:px-0 w-full mt-16 lg:mt-10 lg:w-1/2">
              <img
                className="w-[20rem] h-full rounded-xl object-contain"
                src="https://res.cloudinary.com/dezi0bct4/image/upload/v1713220080/Untitled_design_-_5_rdtmwc.png"
                alt="Service_image.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------- BOLD TEXT -----------  */}
      <section className="bg-blue-700 flex justify-center items-center">
        <h2 className="baloo text-white text-center text-md md:text-xl xl:text-2xl py-3 tracking-wider lg:tracking-widest">
          Innovative IT solutions for a dynamic world - Octa Tech leads the way
        </h2>
      </section>

      {/* ----------- DETAILS -----------  */}
      <section className="my-10 sm:my-16">
        <div className="px-5 sm:px-10 lg:px-0">
          <h2 className="baloo mb-3 text-black font-semibold text-4xl sm:text-4xl xl:text-5xl text-center">
            Thrive’s Digital Marketing Services
          </h2>
          <p className="mb-5 text-black w-[100%] sm:w-[90%] md:w-[80%] xl:w-[70%] mx-auto font-medium text-sm sm:text-md lg:text-md xl:text-lg text-center">
            Build Brand Recognition as an Industry Leader and Increase
            Profitabilityz
          </p>

          <div className="mt-20 max-w-7xl mx-auto flex justify-center items-center gap-8 flex-wrap">
            {/* CARD 1 */}
            <div className="my-3 relative min-h-[17.5rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                Pay Per Click (PPC)
              </h2>
              <p className="mt-2 text-sm px-4 sm:text-md">
                Skyrocket your digital visibility and generate qualified leads
                with our PPC advertising services at Octa Tech. PPC advertising
                services basically incorporate adverts and, henceforth, advert
                revenue, gaining more exposure with every ad click. We aim to
                target ad campaigns across various digital platforms.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="my-3 relative min-h-[17.5rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl px-4 font-semibold">
                Search Engine Optimization (SEO)
              </h2>
              <p className="mt-2 text-sm px-4 sm:text-md">
                Through our SEO strategies at Octa Tech, you can capture more
                visibility and drive organic traffic to your website in no time.
                Octa Tech's SEO strategies increase website visibility and drive
                organic traffic. We optimize website structure, content, and
                performance for higher search engine rankings.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="my-3 relative min-h-[17.5rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                Social Media Marketing
              </h2>
              <p className="mt-2 text-sm px-4 sm:text-md">
                Social media marketing involves translating audiences to
                customers and strengthening your business relationship with
                them. To boost your brand awareness and traffic, and also enable
                meaningful engagements, we develop your business-centric social
                media marketing techniques to do so.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="my-3 relative min-h-[17.5rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">Content Writing</h2>
              <p className="mt-2 text-sm px-4 sm:text-md">
                Another effective digital marketing technique is to produce
                valuable, relevant, and consistent content that resonates with
                your audience and enables action. Creative blog posts,
                conversational articles, guiding videos, and infographics, are
                all part of the content marketing services that allow you to
                hook, educate, and convert prospects into loyal customers.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="my-3 relative min-h-[17.5rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">Email Marketing</h2>
              <p className="mt-2 text-sm px-4 sm:text-md">
                Stay ahead of the curve with your audience and nurture leads
                through the use of targeted email marketing campaigns as our
                popular marketing service. Here, our goal is to produce,
                automate, and optimize email sequences just enough so they don't
                come off as spamming mail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- WHY YOUR BUSSINESS -----------  */}

      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-0">
          <h2 className="baloo mb-3 text-black font-semibold text-4xl sm:text-4xl xl:text-4xl text-start sm:text-center">
            Why Your Business Should Be Using Digital Marketing Service
          </h2>
          <p className="mb-5 text-black w-[100%] sm:w-[90%] md:w-[80%] xl:w-[70%] mx-auto font-medium text-md sm:text-md lg:text-md xl:text-lg text-start sm:text-center">
            Engage More Clients And Rank High On Seacrch Results
          </p>

          <div className="mt-4 sm:mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 place-items-center lg:gap-8">
            <div className="">
              <p className="my-3 text-md sm:text-lg font-medium">
                <span className="text-blue-600 mr-2 font-semibold">01</span>
                Promote greater consumer engagement
              </p>
              <p className="my-3 text-md sm:text-lg font-medium">
                <span className="text-blue-600 mr-2 font-semibold">02</span>
                Adjust your strategies based on analytics and data
              </p>
              <p className="my-3 text-md sm:text-lg font-medium">
                <span className="text-blue-600 mr-2 font-semibold">03</span>
                Drive profitable long-term growth
              </p>
              <p className="my-3 text-md sm:text-lg font-medium">
                <span className="text-blue-600 mr-2 font-semibold">04</span>
                Leverage precise audience targeting
              </p>
              <p className="my-3 text-md sm:text-lg font-medium">
                <span className="text-blue-600 mr-2 font-semibold">05</span>
                Improve your conversion rates
              </p>
            </div>
            <div className="">
              <p className="my-3 text-md sm:text-lg font-medium">
                <span className="text-blue-600 mr-2 font-semibold">06</span>Save
                time, money and resources
              </p>
              <p className="my-3 text-md sm:text-lg font-medium">
                <span className="text-blue-600 mr-2 font-semibold">07</span>
                Build your brand reputation across online channels
              </p>
              <p className="my-3 text-md sm:text-lg font-medium">
                <span className="text-blue-600 mr-2 font-semibold">08</span>
                Acquire huge ROI
              </p>
              <p className="my-3 text-md sm:text-lg font-medium">
                <span className="text-blue-600 mr-2 font-semibold">09</span>
                Maximize various customer touchpoints
              </p>
              <p className="my-3 text-md sm:text-lg font-medium">
                <span className="text-blue-600 mr-2 font-semibold">10</span>
                Track your campaign results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- COMPANY STATS -----------  */}
      <Stats />

      {/* ----------- CONTENT SECION -----------  */}
      <Testimonial />
    </>
  );
};

export default DigitalMarketing;
