import { TbTargetArrow } from "react-icons/tb";
import { MdRemoveRedEye } from "react-icons/md";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about my-[60px] sm:my-[70px]">
        <div className="py-12 sm:py-20 about_cont px-2.5 flex justify-center items-center flex-col">
          <h2 className="mb-2 text-white text-2xl sm:text-4xl font-semibold text-center max-w-xl">
            About Us
          </h2>
          <h2 className="mb-5 text-white text-md sm:text-md font-light text-center max-w-xl">
            Home / About Us
          </h2>
        </div>
      </section>

      {/* ----------- IMAGE & TEXT SECTION -----------  */}
      <section className="body-font">
        <div className="max-w-6xl mx-auto flex px-5 py-4 sm:py-20 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_72080.png?v=1712918877"
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 xl:pl-16 lg:pl-20 md:pl-16 flex flex-col text-left">
            <h1 className="mb-5 font-bold max-w-md text-3xl md:text-4xl text-[#272727]">
              About Octa Tech Solutions
            </h1>
            <p className="mb-6 leading-relaxed">
              Welcome to Octa Tech Solutions, your gateway to cutting-edge IT services! We are a dynamic company specializing in web development, app development, digital marketing, backup & recovery, and path management. Our mission is to empower businesses and organizations with innovative technological solutions tailored to their unique needs.
            </p>
            <p className="mb-6 leading-relaxed">
              At Octa Tech Solutions, we take pride in our commitment to excellence. Our team of experts combines creativity, technical prowess, and industry knowledge to deliver outstanding results. Whether you're looking to enhance your online presence, streamline your operations, or safeguard your data, we have the expertise to make it happen.
            </p>
          </div>
        </div>
      </section>

      {/* ----------- OUR MISSION & VISSION -----------  */}
      <section className="bg-[#1A73E8] text-white">
        <div className="py-5 sm:py-8 max-w-6xl mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          {/* LEFT BOX */}
          <div className="left_box text-center px-4 sm:px-10 py-12 border-0 md:border-r">
            <TbTargetArrow className="mx-auto" size={50} />
            <h2 className="mt-3 text-4xl font-semibold ">Our Mission</h2>
            <p className="mt-3 font-light">
              Octa Tech Solutions is dedicated to revolutionizing the digital landscape by providing cutting-edge IT solutions that empower businesses and individuals. Our mission is to exceed client expectations by delivering top-notch services in web development, app development, digital marketing, and more, all tailored to their unique needs. We are committed to being a trusted partner in our clients' success, fostering growth and innovation through technology.
            </p>
          </div>

          {/* RIGHT BOX */}
          <div className="right_box text-center px-4 sm:px-10 py-12 border-t md:border-0">
            <MdRemoveRedEye className="mx-auto" size={50} />
            <h2 className="mt-3 text-4xl font-semibold">Our Vision</h2>
            <p className="mt-3 font-light">
              Our vision at Octa Tech Solutions is to establish ourselves as a globally renowned leader in IT services, renowned for our innovation, reliability, and commitment to excellence. We envision a future where technology seamlessly integrates into every aspect of life, enhancing efficiency, connectivity, and growth opportunities. Through fostering a culture of continuous learning and collaboration, we aim to inspire positive change and make a meaningful impact on the world.
            </p>
          </div>
        </div>
      </section>

      {/* ----------- IMAGE & TEXT SECTION -----------  */}
      <section className="body-font">
        <div className="max-w-6xl mx-auto flex px-5 py-4 sm:py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 xl:pr-16 lg:pr-20 md:pr-16 flex flex-col text-left">
            <h1 className="mb-5 font-bold max-w-md text-3xl md:text-4xl text-[#272727]">
              About Octa Tech Solutions
            </h1>
            <p className="mb-6 leading-relaxed">
              At Octa Tech Solutions, our vision is to be the forefront of technological innovation, empowering businesses with scalable and reliable IT solutions. We strive to build long-term partnerships with our clients, understanding their goals and providing customized strategies to achieve success.
            </p>
            <p className="mb-6 leading-relaxed">
              Our core values drive everything we do. Integrity, professionalism, and customer satisfaction are at the heart of our business. We believe in transparent communication, honesty, and delivering results that exceed expectations. Octa Tech Solutions is not just a service provider; we are your trusted technology partner.
            </p>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/about_us.webp?v=1713817469"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
