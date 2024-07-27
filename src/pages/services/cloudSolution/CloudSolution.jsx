import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ChooseServices from "../remoteMonitoring/ChooseServices";
import Stats from "../../homepage/Stats";

const CloudSolution = () => {
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

        <div className="max-w-6xl px-4 sm:px-6 pt-24 pb-2 lg:pt-0 lg:pb-0 mx-auto">
          <div className="items-center lg:flex lg:min-h-[60vh]">
            <div className="w-full pt-3 sm:pt-0 lg:w-1/2">
              <div className="lg:max-w-xl">
                <h3 className="text-sm uppercase font-semibold text-blue-600 lg:text-md">
                  Home.. Services
                </h3>
                <h2 className="mt-3 baloo w-[100%]  xl:w-[90%] text-4xl font-semibold capitalize text-black lg:text-5xl xl:text-6xl">
                  Cloud Solution
                </h2>
                <h2 className="mt-1.5 text-sm sm:text-md font-normal text-black md:w-[80%] lg:w-[80%]">
                  We are leading technology solutions providing company. We have
                  a wide range of cloud solutions
                </h2>

                <div className="hero_section_buttons flex items-start xs:items-center flex-col sm:flex-row gap-10 mt-6 mb-10 sm:mb-0 lg:mt-10">
                  <button className="max-w-40 flex items-center gap-2 px-5 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    Let's talk <FaLocationArrow />
                  </button>
                </div>
              </div>
            </div>

            <div className="user_select flex items-center justify-center w-full mt-16 lg:mt-10 lg:w-1/2">
              <img
                className="w-[20rem] h-full rounded-xl object-contain"
                src="https://res.cloudinary.com/dezi0bct4/image/upload/v1713220081/Untitled_design_-_10_htpcdi.png"
                alt="Services Image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------- BOLD TEXT -----------  */}
      {/* <section className='bg-blue-700 flex justify-center items-center'>
                <h2 className='baloo text-white text-center text-md md:text-xl xl:text-3xl py-3 tracking-wider lg:tracking-widest'>It is a long established fact that a reader will be distracte</h2>
            </section> */}

      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold uppercase">Coming Soon</h2>
      </section>

      {/* ----------- MAIN HEADING SECION -----------  */}
      {/* <section className='flex justify-center px-4 sm:px-2 items-center pt-14 pb-7'>
                <div class="max-w-5xl overflow-hidden bg-white rounded-xl shadow-lg dark:bg-gray-800">
                    <img class="object-cover w-full h-64" src="https://res.cloudinary.com/dgsnff8tg/image/upload/v1711397085/Rectangle_1037_7_syfdjt.png" alt="Article" />

                    <div class="relative px-6 pb-8 pt-4 flex justify-start">
                        <div className="absolute -top-10 img w-[20rem]">
                            <img className='h-16 w-16 sm:h-20 sm:w-20' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2236.png?v=1711398214" alt="" />
                        </div>
                        <div className="ml-2 sm:ml-24 text_data">
                            <div>
                                <h3 class="mt-2 sm:mt-0 block text-3xl sm:text-4xl font-semibold text-black">Website Development</h3>
                                <p class="mt-2.5 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequuntur unde quidem? Officiis fugit similique asperiores non sunt magnam minus voluptatibus accusamus natus dolores? Enim et quos cum exercitationem expedita cumque dolorem id dolorum ad ut fuga fugiat molestias ab, repellat a? Optio tenetur vel dolor nulla consectetur facere porro!</p>
                            </div>

                            <div class="mt-4">
                                <Link to="/remote-monitoring" onClick={() => window.scroll(0, 0)} className="mt-1 flex items-center hover:underline hover:underline-offset-4 text-lg font-semibold">
                                    <span>Read More</span>
                                    <img className="pt-1 ml-1 h-6 w-5" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Vector_2.png?v=1711393867" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

      {/* ----------- COMPANY STATS -----------  */}
      <Stats />
    </>
  );
};

export default CloudSolution;
