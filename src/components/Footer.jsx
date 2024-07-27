import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const Footer = () => {
  const { user } = useSelector((state) => state.auth);

  const handleMoveToTop = () => {
    window.scroll(0, 0);
  };

  return (
    <>
      {!user ? (
        <footer className="bg-[#1d215f]">
          <div className="upperFooter bg-[#ECECFB]">
            <div className="px-4 sm:px-10 pt-2 sm:pb-0 pb-10 mx-auto">
              {/* DETAILS */}
              <div className="pt-10 pb-10 px-2 md:px-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
                {/* LOGO & HEADING */}
                <div className="sm:col-span-2">
                  <h1 className="max-w-lg flex items-center text-xl font-semibold tracking-tight text-black xl:text-2xl">
                    <img
                      className="mr-2 w-8"
                      src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Untitled_design.png?v=1713204274"
                      alt="logo"
                    />
                    Octa Tech Solutions
                  </h1>
                  <p className="max-w-md text-[1rem] mt-3">
                    Octa Tech Solutions is your go-to destination for
                    cutting-edge IT solutions, including infrastructure,
                    software development, cloud services, cybersecurity, and
                    digital transformation. Our team's expertise and commitment
                    to client success make us the ideal partner for your
                    technology needs.
                  </p>
                </div>

                {/* QUICK LINKS */}
                <div>
                  <p className="text-xl font-semibold text-black">Quick Link</p>
                  <div className="flex flex-col items-start mt-3 space-y-2">
                    <Link
                      to="/"
                      onClick={handleMoveToTop}
                      className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      onClick={handleMoveToTop}
                      className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact"
                      onClick={handleMoveToTop}
                      className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                    >
                      Contact Us
                    </Link>
                    <Link
                      to="/privacy-policy"
                      onClick={handleMoveToTop}
                      className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                </div>

                {/* OUR SERVICES */}
                <div>
                  <p className="text-xl font-semibold text-black">Services</p>
                  <div className="flex flex-col items-start mt-3 space-y-2">
                    <Link
                      to="/website-development"
                      onClick={handleMoveToTop}
                      className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                    >
                      Website Development
                    </Link>
                    <Link
                      to="/digital-marketing"
                      onClick={handleMoveToTop}
                      className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                    >
                      Digital Marketing
                    </Link>
                    <Link
                      to="/IT-consulting"
                      onClick={handleMoveToTop}
                      className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                    >
                      IT Strategy & Consulting
                    </Link>
                    <Link
                      to="/security"
                      onClick={handleMoveToTop}
                      className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                    >
                      Security Management
                    </Link>
                  </div>
                </div>

                {/* CONTACT */}
                <div>
                  <p className="text-xl font-semibold text-black">
                    Contact Info
                  </p>
                  <div className="flex flex-col items-start mt-3 space-y-2">
                    {/* PHONE NUMBER */}
                    <a
                      href="tel:+1-281-607-5120"
                      className="flex items-center gap-2"
                    >
                      <FaPhone /> +1 (281) 607-5120
                    </a>

                    {/* SOCIAL LINKS */}
                    <div className="links pt-2 w-44 flex items-center justify-start flex-wrap gap-2.5">
                      <a
                        href="https://www.facebook.com/profile.php?id=61557758687079"
                        target="_blank"
                        className=""
                      >
                        <FaFacebookF className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" />
                      </a>
                      <a
                        href="https://www.instagram.com/octatechsolutions"
                        target="_blank"
                        className=""
                      >
                        <FaInstagram className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/octa-tech-solutionn"
                        target="_blank"
                        className=""
                      >
                        <FaLinkedinIn className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" />
                      </a>
                      <a
                        href="https://www.youtube.com/@octatechsolution"
                        target="_blank"
                        className=""
                      >
                        <FaYoutube className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" />
                      </a>
                      <a
                        href="https://www.snapchat.com/add/octatech8?sender_web_id=3a7b0b34-1a0c-4ff4-bc43-6a838fb2b918&device_type=desktop&is_copy_url=true"
                        target="_blank"
                        className=""
                      >
                        <FaSnapchatGhost className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" />
                      </a>
                      <a
                        href="https://www.tiktok.com/@octatech3"
                        target="_blank"
                        className=""
                      >
                        <FaTiktok className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <span className="relative bg-[#ECECFB] flex justify-center">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

            <span className="relative z-10 bg-white px-6"></span>
          </span>

          {/* PAYMENT METHODS */}
          <div className="pt-6 text-sm px-3 bg-[#ECECFB] text-center text-gray-800">
            <h2 className="text-center text-2xl font-semibold uppercase">
              Payment Mehtods
            </h2>
            <div className="cont ">
              <div className="images_container py-8 max-w-5xl mx-auto flex justify-center flex-wrap items-center gap-12">
                <a href="https://www.americanexpress.com/" target="_blank">
                  <img
                    className="w-[4rem] sm:w-[4rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/American_Express.png?v=1713215529"
                    alt=""
                  />
                </a>

                <a href="https://pk.visamiddleeast.com/" target="_blank">
                  <img
                    className="w-[4rem] sm:w-[4rem]"
                    src="https://www.freepnglogos.com/uploads/visa-logo-png-image-4.png"
                    alt=""
                  />
                </a>

                <a href="https://www.mastercard.us/en-us.html" target="_blank">
                  <img
                    className="w-[4rem] sm:w-[4rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/MasterCard_Logo_svg.png?v=1713215530"
                    alt=""
                  />
                </a>

                <a href="https://www.discover.com/" target="_blank">
                  <img
                    className="w-[4rem] sm:w-[4rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Discover-logo.png?v=1713215529"
                    alt=""
                  />
                </a>

                <a href="https://www.zellepay.com/" target="_blank">
                  <img
                    className="w-[4rem] sm:w-[4rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Zelle_logo.png?v=1713215528"
                    alt=""
                  />
                </a>

                <a href="https://www.paypal.com/pk/home" target="_blank">
                  <img
                    className="w-[4rem] sm:w-[5rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Paypal_logo.png?v=1713217299"
                    alt=""
                  />
                </a>

                <a href="https://venmo.com/" target="_blank">
                  <img
                    className="w-[4rem] sm:w-[4rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Venmo-Logo.png?v=1713215529"
                    alt=""
                  />
                </a>
                <a href="https://pay.google.com/about/" target="_blank">
                  <img
                    className="w-[4rem] sm:w-[4rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Google_Pay_Logo_svg.png?v=1713911497"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          {/* COPY RIGHT */}
          <div className="text-sm py-8 px-3 border-t text-center bg-blue-700 text-white">
            <p>
              Copyrights © 2024 All Rights Reserved by Octa Tech Solutions LLC
            </p>
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default Footer;
