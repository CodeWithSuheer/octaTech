import Stats from "../../homepage/Stats";
import { FaLocationArrow } from "react-icons/fa";
import Testimonial from "../../homepage/Testimonial";
import Button from "../../../components/Button";

const WebsiteDevelopment = () => {
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
                  Website Development
                </h2>
                <h2 className="mt-4 text-md font-normal text-black md:w-[80%] lg:w-[96%]">
                  Tap into the power of the web with our custom web development
                  services. We specialize in crafting modern, scalable, and
                  adaptable web applications that align seamlessly with your
                  individual business requirements.
                </h2>

                <div className="hero_section_buttons flex items-start xs:items-center flex-col sm:flex-row gap-10 mt-6 mb-10 sm:mb-0 lg:mt-7">
                  <Button text="Let's Talk" />
                </div>
              </div>
            </div>

            <div className="user_select flex items-center justify-center px-0 sm:px-10 xl:px-0 w-full mt-16 lg:mt-10 lg:w-1/2">
              <img
                className="w-[20rem] h-full rounded-xl object-contain"
                src="https://res.cloudinary.com/dezi0bct4/image/upload/v1713220081/Untitled_design_-_2_cpyxha.png"
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
      <section className="my-10 sm:my-20">
        <div className="px-5 sm:px-10 lg:px-0">
          <h2 className="baloo mb-3 text-black font-semibold text-4xl sm:text-4xl xl:text-5xl text-center">
            Our Website Developers Expertise
          </h2>
          <p className="mb-5 text-black w-[100%] sm:w-[90%] md:w-[80%] xl:w-[70%] mx-auto font-medium text-sm sm:text-md lg:text-md xl:text-lg text-center">
            Tap into the power of the web with our custom web development
            services. We specialize in crafting modern, scalable, and adaptable
            web applications that align seamlessly with your individual business
            requirements. At Octa Tech, we deliver a comprehensive suite of web
            development services designed to empower your business and captivate
            your audience. We leverage a wide range of technologies and
            frameworks to craft the perfect solution for you, ensuring:
          </p>

          <div className="mt-20 max-w-7xl mx-auto flex justify-center items-center gap-8 flex-wrap">
            {/* CARD 1 */}
            <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                Enterprise Solutions
              </h2>
              <p className="mt-2 text-sm sm:text-md">
                Octa Tech tackles complex challenges with innovative
                enterprise-grade solutions. Our team crafts robust and
                feature-rich applications tailored to your specific needs and
                organization scalability. We leverage cutting-edge technologies
                and a team of passionate experts to deliver exceptional results.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                E-Commerce Development
              </h2>
              <p className="mt-2 text-sm sm:text-md">
                Turn your e-commerce vision into a thriving online store. We
                create user-friendly and high-performing e-commerce applications
                with features that streamline the shopping experience, maximize
                sales, and seamlessly integrate with your existing systems. Get
                the best ecommerce web development services now.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                Seamless Integration & Migration
              </h2>
              <p className="mt-2 text-sm sm:text-md">
                If you have existing business systems in place, we can integrate
                your e-commerce application to ensure smooth data flow and
                operational efficiency. Modernize your existing systems with our
                effortless integration and migration services. Book your trusted
                web design and development services today.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                Mobile Backend & APIs
              </h2>
              <p className="mt-2 text-sm sm:text-md">
                Build a robust foundation for your mobile apps. Our skilled
                developers craft powerful backend solutions and APIs that ensure
                efficient data management, seamless communication, and a smooth
                user experience across all platforms.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                Content Management System (CMS)
              </h2>
              <p className="mt-2 text-sm sm:text-md">
                Empower your team to manage your web content effortlessly. Octa
                Tech implements user-friendly CMS solutions tailored to your
                specific needs, giving you complete control over your website's
                content and ensuring a fresh and engaging online presence.
              </p>
            </div>

            {/* CARD 6 */}
            <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
              <div className="absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto">
                <img
                  className="mid_img h-16 w-16"
                  src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864"
                  alt=""
                />
              </div>
              <h2 className="mt-3 text-2xl font-semibold">
                Custom Web Development
              </h2>
              <p className="mt-2 text-sm sm:text-md">
                Don't settle for a cookie-cutter website. We design and develop
                custom websites & applications. Our custom web development
                services perfectly align with your unique vision and business
                objectives. Our focus is on modern design, seamless user
                experience, and solutions that scale with your growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------- WHY CHOOSE US -----------  */}
      {/* <section className="my-10 sm:my-16">
        <div className="px-5 sm:px-10 lg:px-0">
          <h2 className="baloo mb-3 text-black font-semibold mx-auto  w-[100%] sm:w-[70%] text-3xl sm:text-4xl xl:text-4xl text-start sm:text-center">
            Why Choose Us As Your Trusted Partner for Web Design & Development
            Services
          </h2>
          <p className="mb-5 text-black w-[100%] sm:w-[90%] md:w-[80%] xl:w-[70%] mx-auto font-medium text-sm sm:text-md lg:text-md xl:text-lg text-start sm:text-center">
            Having a strong online presence is no longer optional. It's the
            cornerstone of effective marketing, customer engagement, and
            business growth. But with so many web development firms out there,
            how do you choose the right one? Here's why Octa Tech stands out as
            your ideal partner:
          </p>

          <div className="max-w-4xl mx-auto mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="px-4 xl:px-10">
              <p className="py-1 text-lg font-medium flex items-center">
                <FaLocationArrow
                  className="mr-3 mt-1 text-blue-700"
                  size={14}
                />{" "}
                Seasoned web developers
              </p>
              <p className="py-1 text-lg font-medium flex items-center">
                <FaLocationArrow
                  className="mr-3 mt-1 text-blue-700"
                  size={14}
                />{" "}
                Exceptional Creativity
              </p>
              <p className="py-1 text-lg font-medium flex items-center">
                <FaLocationArrow
                  className="mr-3 mt-1 text-blue-700"
                  size={14}
                />{" "}
                Secure web solutions
              </p>
              <p className="py-1 text-lg font-medium flex items-center">
                <FaLocationArrow
                  className="mr-3 mt-1 text-blue-700"
                  size={14}
                />{" "}
                Commitment
              </p>
              <p className="py-1 text-lg font-medium flex items-center">
                <FaLocationArrow
                  className="mr-3 mt-1 text-blue-700"
                  size={14}
                />{" "}
                Data drive strategic approach
              </p>
              <p className="py-1 text-lg font-medium flex items-center">
                <FaLocationArrow
                  className="mr-3 mt-1 text-blue-700"
                  size={14}
                />{" "}
                Feature-rich web applications
              </p>
              <p className="py-1 text-lg font-medium flex items-center">
                <FaLocationArrow
                  className="mr-3 mt-1 text-blue-700"
                  size={14}
                />{" "}
                Long-Term Partnership
              </p>
            </div>

            <div className="h-full w-full rounded-lg">
              <img
                src="https://s3-alpha-sig.figma.com/img/07ab/b0b8/04c3c64e412f0675e86e0290c565c61d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NK7KOEAOwjPVEMMKqMcV8F-GEJ-AKdMpwgjLy9OHAJK3vqvlEIsXZ6dOiNgVo2LNxUVOWoTkI779cxWByWy2uGIjIbFmsSDHcGdo6y6VUPReV~Srg2WblN9VDOdkTGInjaAdd1zAmx5X8UDk~ewunVHtXPbhE6PE3~p202dlMsrm5JHhwzIs9EvaPl8LGWXqKvNOb46n-7Q8GQyThRPblA0kHL0jcUfbeVIqvu3x6Fo0v06hMi-ALDkKMgztYgsH9u7SdQZjeHh6lENt8TzpNIyKa8A0rMieWF6yqCNPvwWXzYMuKl7m7l~ZzO3TebdwVo~xD4Rt-1KcJXdKNdc6oA__"
                alt=""
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* ----------- SECTION -----------  */}
      <section className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <svg
                  className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="13.5" cy="6.5" r=".5" />
                  <circle cx="17.5" cy="10.5" r=".5" />
                  <circle cx="8.5" cy="7.5" r=".5" />
                  <circle cx="6.5" cy="12.5" r=".5" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
              </div>
              <div className="flex-shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Build your portfolio
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              The simplest way to keep your portfolio always up-to-date.
            </p>
          </div>
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <svg
                  className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3h20" />
                  <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                  <path d="m7 21 5-5 5 5" />
                </svg>
              </div>
              <div className="flex-shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Get freelance work
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              New design projects delivered to your inbox each morning.
            </p>
          </div>
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <svg
                  className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                  <path d="M2 7h20" />
                  <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
                </svg>
              </div>
              <div className="flex-shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Sell your goods
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Get your goods in front of millions of potential customers with
              ease.
            </p>
          </div>
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <svg
                  className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                  <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                  <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                  <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
                </svg>
              </div>
              <div className="flex-shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Get freelance work
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              New design projects delivered to your inbox each morning.
            </p>
          </div>
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <svg
                  className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
                  <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
                  <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
                </svg>
              </div>
              <div className="flex-shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Sell your goods
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Get your goods in front of millions of potential customers with
              ease.
            </p>
          </div>
          <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                <svg
                  className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
                  <rect height="7" rx="1" width="7" x="3" y="14" />
                  <circle cx="17.5" cy="17.5" r="3.5" />
                </svg>
              </div>
              <div className="flex-shrink-0">
                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                  Build your portfolio
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              The simplest way to keep your portfolio always up-to-date.
            </p>
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

export default WebsiteDevelopment;
