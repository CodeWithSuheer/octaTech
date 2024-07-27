import Stats from "../../homepage/Stats";
import Testimonial from "../../homepage/Testimonial";
import Button from "../../../components/Button";

const RemoteMonitoring = () => {
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
                <h2 className="mt-3 w-[100%]  xl:w-[100%] text-4xl font-semibold capitalize text-black lg:text-5xl xl:text-5xl">
                  Remote Monitoring
                </h2>
                <h2 className="mt-4 text-md font-normal text-black md:w-[80%] lg:w-[96%]">
                  Enjoy peace of mind with our proactive remote monitoring
                  services. We identify potential issues before they escalate,
                  ensuring the smooth operation of your IT systems.
                </h2>

                <div className="hero_section_buttons flex items-start xs:items-center flex-col sm:flex-row gap-10 mt-6 mb-10 sm:mb-0 lg:mt-7">
                  <Button text="Let's Talk" />
                </div>
              </div>
            </div>

            <div className="user_select flex items-center justify-center px-0 sm:px-10 xl:px-0 w-full mt-16 lg:mt-10 lg:w-1/2">
              <img
                className="w-[20rem] h-full rounded-xl object-contain"
                src="https://res.cloudinary.com/dezi0bct4/image/upload/v1713220081/Untitled_design_-_8_dqiywd.png"
                alt="Services Image"
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
      <section className="my-16">
        <div className="px-5 sm:px-10 lg:px-0">
          <h2 className="baloo mb-3 text-black font-semibold text-4xl sm:text-4xl xl:text-5xl text-center">
            Branches of remote monitoring
          </h2>
          <p className="mb-5 text-black w-[100%] sm:w-[90%] md:w-[80%] xl:w-[70%] mx-auto font-medium text-sm sm:text-md lg:text-md xl:text-lg text-center">
            These branches of help desk support play a crucial role in providing
            timely assistance, resolving user issues, and ensuring smooth
            operation of IT services within organizations.
          </p>

          <div className="mt-20 max-w-7xl mx-auto flex justify-center items-center gap-8 flex-wrap">
            {/* CARD 1 */}
            <div className="my-3 relative min-h-[15rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                Network Monitoring
              </h2>
              <p className="mt-2 text-sm max-w-sm mx-auto sm:text-md">
                Our network monitoring services keep a watchful eye on your
                infrastructure remotely. We track performance, availability, and
                security, proactively identifying and resolving issues before
                they disrupt your workflow.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="my-3 relative min-h-[15rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">Server Monitoring</h2>
              <p className="mt-2 text-sm  max-w-sm mx-auto sm:text-md">
                Never worry about server downtime again. Our server monitoring
                solution meticulously tracks crucial resources like CPU usage,
                memory, and disk space remotely, ensuring your servers operate
                at peak efficiency.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="my-3 relative min-h-[15rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                Security Monitoring
              </h2>
              <p className="mt-2 text-sm  max-w-sm mx-auto sm:text-md">
                Monitoring our application diligently oversees application
                performance and availability remotely. Through the monitoring of
                response times, errors, and user interactions, we assure the
                smooth operation of your applications.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="my-3 relative min-h-[15rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                Application Monitoring
              </h2>
              <p className="mt-2 text-sm  max-w-sm mx-auto sm:text-md">
                Looking for professional security monitoring services to protect
                your systems and networks from potential threats? Our team is
                here to help, using cutting-edge intrusion detection, log
                monitoring, and incident response protocols to safeguard your
                data around the clock.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="my-3 relative min-h-[15rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">Cloud Monitoring</h2>
              <p className="mt-2 text-sm  max-w-sm mx-auto sm:text-md">
                Managing cloud resources remotely is effortless with our cloud
                monitoring solutions. We track cloud resource utilization,
                performance, and costs, ensuring you optimize your cloud
                environment and avoid unnecessary expenses.
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

export default RemoteMonitoring;
