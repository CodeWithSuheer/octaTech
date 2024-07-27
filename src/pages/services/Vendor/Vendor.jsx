import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import Stats from "../../homepage/Stats";

const Vendor = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

        <div className="max-w-6xl px-4 z-50 sm:px-3 pt-24 pb-2 lg:pt-0 lg:pb-0 mx-auto">
          <div className="items-center lg:flex lg:min-h-[60vh]">
            <div className="w-full pt-3 sm:pt-0 lg:w-1/2">
              <div className="lg:max-w-xl">
                <h2 className="mt-3 baloo w-[100%]  xl:w-[90%] text-4xl font-semibold capitalize text-black lg:text-5xl xl:text-6xl">
                  Vendor Management
                </h2>
                <h2 className="mt-1.5 text-sm sm:text-lg font-normal text-black md:w-[80%] lg:w-[100%]">
                  Whether customers connect via voice or email, chat or social
                  channels or even forging connections in immersive environments
                  in the metaverse ensure your CX
                </h2>

                <div className="hero_section_buttons flex items-start xs:items-center flex-col sm:flex-row gap-10 mt-6 mb-10 sm:mb-0 lg:mt-7">
                  <button className="max-w-40 flex items-center gap-2 px-5 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    Let's Talk <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>

            <div className="user_select flex items-center justify-center w-full mt-16 lg:mt-10 lg:w-1/2">
              <img
                className="w-full h-full rounded-xl object-contain"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_1144_2.png?v=1711653491"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------- BOLD TEXT -----------  */}
      <section className="bg-blue-700 flex justify-center items-center">
        <h2 className="baloo text-white text-center text-md md:text-xl xl:text-2xl py-3 tracking-wider lg:tracking-widest">
          It is a long established fact that a reader will be distracte
        </h2>
      </section>

      {/* ----------- MAIN HEADING SECION -----------  */}
      <section className="flex justify-center px-4 sm:px-2 items-center pt-14 pb-7">
        <div className="max-w-5xl overflow-hidden bg-white rounded-xl shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-64"
            src="https://res.cloudinary.com/dgsnff8tg/image/upload/v1711397085/Rectangle_1037_7_syfdjt.png"
            alt="Article"
          />

          <div className="relative px-6 pb-8 pt-4 flex justify-start">
            <div className="absolute -top-10 img w-[20rem]">
              <img
                className="h-16 w-16 sm:h-20 sm:w-20"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2236.png?v=1711398214"
                alt=""
              />
            </div>
            <div className="ml-2 sm:ml-24 text_data">
              <div>
                <h3 className="mt-2 sm:mt-0 block text-3xl sm:text-4xl font-semibold text-black">
                  Website Development
                </h3>
                <p className="mt-2.5 text-sm text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus consequuntur unde quidem? Officiis fugit similique
                  asperiores non sunt magnam minus voluptatibus accusamus natus
                  dolores? Enim et quos cum exercitationem expedita cumque
                  dolorem id dolorum ad ut fuga fugiat molestias ab, repellat a?
                  Optio tenetur vel dolor nulla consectetur facere porro!
                </p>
              </div>

              <div className="mt-4">
                <Link
                  to="/remote-monitoring"
                  onClick={() => window.scroll(0, 0)}
                  className="mt-1 flex items-center hover:underline hover:underline-offset-4 text-lg font-semibold"
                >
                  <span>Read More</span>
                  <img
                    className="pt-1 ml-1 h-6 w-5"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Vector_2.png?v=1711393867"
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- CONTENT SECION -----------  */}
      <section className="pt-5 pb-10 px-5 sm:px-0">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {/* --------- LEFT SIDE ---------  */}
          <div className="bg-white lg:col-span-2">
            <div className="upper_img ">
              <img
                className="rounded-lg"
                src="https://res.cloudinary.com/dgsnff8tg/image/upload/v1711397085/Rectangle_1037_7_syfdjt.png"
                alt=""
              />
            </div>

            <div className="text mt-5">
              <p>
                acus sed pretium pretium justo. Integer vitae venenatis lorem.
                Maecenas lacinia turpis the in nunc quam hendrerit scelerisque
                at finibus enim sagittis. Aliquam erat is volutpat nam nec purus
                at is orci volutpat is semper vel id turpis In a malesuada arcu
                ac.connect via voice or email, chat or social channels or even
                forging connections in immersive environments in the metaverse
                ensure your CX strategy is prepared to engage seamlessly and
                continue.
              </p>
            </div>

            <div className="lower_text mt-6">
              <h3 className="mb-2 text-2xl font-semibold ">Ipsum Dolor Sit</h3>
              <p>
                acus sed pretium pretium justo. Integer vitae venenatis lorem.
                Maecenas lacinia turpis the in nunc quam hendrerit scelerisque
                at finibus enim sagittis. Aliquam erat is volutpat nam nec purus
                at is orci volutpat is semper vel id turpis In a malesuada arcu
                ac.connect via voice or email, chat or social channels or even
                forging connections in immersive environments in the metaverse
                ensure your CX strategy is prepared to engage seamlessly and
                continue.
              </p>
            </div>

            <div className="lower_img mt-5">
              <img
                className="rounded-lg"
                src="https://res.cloudinary.com/dgsnff8tg/image/upload/v1711397085/Rectangle_1037_7_syfdjt.png"
                alt=""
              />
            </div>
          </div>

          {/* --------- LEFT SIDE ---------  */}
          <div className="rounded-lg">
            {/* CALL HERE BOX  */}
            <div className="group overflow-hidden border border-gray-300 rounded-lg shadow-lg transition hover:shadow-xl">
              <img
                alt=""
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_1141.png?v=1711644337"
                className=" w-full object-cover"
              />

              {/* CARD - DATA */}
              <div className="relative bg-white p-4 sm:px-4 sm:py-6 text-center flex justify-center items-center flex-col">
                <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                  <img
                    className="mid_img h-16 w-16"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                    alt=""
                  />
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-wide">
                  Need Help?
                </h2>
                <p className="mt-2 text-xl font-medium tracking-wide">
                  Call Here
                </p>
                <p className="mt-2 text-md font-medium tracking-wide">
                  +112 443 3478
                </p>

                {/* <button className="mt-2 max-w-40 flex items-center gap-2 px-5 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    Get Started <FaLocationArrow />
                                </button> */}
              </div>
            </div>

            {/* OTHER SERVICES  */}
            <div className="other_services mt-6 border border-gray-300 rounded-lg shadow-lg transition hover:shadow-2xl py-6 flex justify-center items-center">
              <div className="other_links flex flex-col">
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  Other Services
                </h3>
                <Link
                  to="/website-development"
                  onClick={handleScroll}
                  className="py-1.5 flex items-center"
                >
                  <FaLocationArrow
                    size={12}
                    className="text-blue-600 mr-2.5 mt-1"
                  />
                  <span className="hover:underline hover:underline-offset-4">
                    Website Development
                  </span>
                </Link>
                <Link
                  to="/remote-monitoring"
                  onClick={handleScroll}
                  className="py-1.5 flex items-center"
                >
                  <FaLocationArrow
                    size={12}
                    className="text-blue-600 mr-2.5 mt-1"
                  />
                  <span className="hover:underline hover:underline-offset-4">
                    Remote Monitoring
                  </span>
                </Link>
                <Link
                  to="/desk-support"
                  onClick={handleScroll}
                  className="py-1.5 flex items-center"
                >
                  <FaLocationArrow
                    size={12}
                    className="text-blue-600 mr-2.5 mt-1"
                  />
                  <span className="hover:underline hover:underline-offset-4">
                    Desk Support
                  </span>
                </Link>
                <Link
                  to="/infrastructure"
                  onClick={handleScroll}
                  className="py-1.5 flex items-center"
                >
                  <FaLocationArrow
                    size={12}
                    className="text-blue-600 mr-2.5 mt-1"
                  />
                  <span className="hover:underline hover:underline-offset-4">
                    Infrastructure
                  </span>
                </Link>
                <Link
                  to="/security"
                  onClick={handleScroll}
                  className="py-1.5 flex items-center"
                >
                  <FaLocationArrow
                    size={12}
                    className="text-blue-600 mr-2.5 mt-1"
                  />
                  <span className="hover:underline hover:underline-offset-4">
                    Security Management
                  </span>
                </Link>
                <Link
                  to="/backup-and-recovery"
                  onClick={handleScroll}
                  className="py-1.5 flex items-center"
                >
                  <FaLocationArrow
                    size={12}
                    className="text-blue-600 mr-2.5 mt-1"
                  />
                  <span className="hover:underline hover:underline-offset-4">
                    Backup & Recovery
                  </span>
                </Link>
                <Link
                  to="/path-management"
                  onClick={handleScroll}
                  className="py-1.5 flex items-center"
                >
                  <FaLocationArrow
                    size={12}
                    className="text-blue-600 mr-2.5 mt-1"
                  />
                  <span className="hover:underline hover:underline-offset-4">
                    Path Management
                  </span>
                </Link>
                <Link
                  to="/IT-consulting"
                  onClick={handleScroll}
                  className="py-1.5 flex items-center"
                >
                  <FaLocationArrow
                    size={12}
                    className="text-blue-600 mr-2.5 mt-1"
                  />
                  <span className="hover:underline hover:underline-offset-4">
                    IT Consulting
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- COMPANY STATS -----------  */}
      <Stats />
    </>
  );
};

export default Vendor;
