import data from "./ServicesData";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  // HANDLE NAVIGATE
  const handleNavigate = (url) => {
    navigate(`/${url}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="relative pt-5 lg:pt-20 lg:pb-12 bg-gray-50">
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

        <div className="max-w-6xl px-4 z-50 sm:px-6 lg:px-10 xl:px-0 pt-14 pb-10 sm:pt-20 lg:pt-0 lg:pb-0 mx-auto">
          <div className="items-center lg:flex lg:min-h-[60vh]">
            <div className="w-full pt-3 sm:pt-0 lg:w-1/2">
              <div className="lg:max-w-xl">
                <h2 className="mt-3 w-[100%] xl:w-[90%] text-4xl leading-5 font-semibold capitalize text-black lg:text-5xl xl:text-5xl">
                  All Services
                </h2>
                <p className="mt-4 pt-2 text-sm sm:text-[1.08rem] font-normal leading-6 text-black md:w-[80%] lg:w-[90%]">
                  Explore our diverse services designed to simplify your tech
                  experience. From software solutions to IT support, we're here
                  for you.
                </p>

                <div className="hero_section_buttons flex items-start xs:items-center flex-col sm:flex-row gap-10 mt-6 mb-10 sm:mb-0 lg:mt-7">
                  <Button text=" Let's Talk" />
                </div>
              </div>
            </div>

            <div className="user_select flex items-center justify-center w-full mt-14 lg:mt-10 lg:w-1/2">
              <img
                className="w-full h-full rounded-xl object-contain"
                src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_1144.png?v=1711652757"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------- HERO SECTION -----------  */}
      <section className="bg-blue-700 relative flex justify-center items-center">
        <h2 className="baloo text-white text-center text-md md:text-xl xl:text-2xl py-3 tracking-wider lg:tracking-widest">
          Optimize your tech journey with us. Software, support, and more.
        </h2>
      </section>

      {/* ----------- ALL SERVICES -----------  */}
      <section className="my-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-0">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 place-items-center lg:gap-8">
            {data.map((data, index) => (
              <div
                key={index}
                onClick={() => handleNavigate(data.url)}
                className="card_up_hover group cursor-pointer overflow-hidden rounded-lg shadow transition hover:shadow-lg my-1"
              >
                <img
                  alt=""
                  src={data.img}
                  className="h-56 w-full object-cover"
                />

                {/* CARD - DATA */}
                <div className="relative bg-white group-hover:bg-blue-600 group-hover:text-white p-4 sm:px-4 sm:py-6 text-center flex justify-center items-center flex-col">
                  <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                    <img
                      className="mid_img h-16 w-16 object-fill"
                      src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                      alt=""
                    />
                  </div>
                  <h2 className="mt-3 text-xl font-semibold tracking-wide">
                    {data.service}
                  </h2>
                  <p className="text-sm my-1.5 w-[95%] md:w-[90%]">
                    {data.desc}
                  </p>
                  <button className="mt-1 flex justify-center items-center group-hover:underline group-hover:underline-offset-4 text-sm font-semibold">
                    <span>Read More</span>
                    <MdOutlineKeyboardArrowRight size={22} className="mt-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
