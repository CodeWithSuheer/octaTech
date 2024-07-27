import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createQueryAsync } from "../../features/queriesSlice";
import toast from "react-hot-toast";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const Contact = () => {
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { createLoading } = useSelector((state) => state.queries);

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    if (formdata.message) {
      dispatch(createQueryAsync(formdata)).then(() =>
        setFormdata({
          name: "",
          email: "",
          message: "",
        })
      );
    } else {
      toast.error("Oops! Please fill in all fields.");
    }
  };

  return (
    <>
      <section className="max-w-full bg-gray-100">
        <div className="max-w-7xl px-3 sm:px-6 py-20 mx-auto min-h-screen">
          <div className="lg:flex lg:items-center">
            <div className="lg:w-1/2 px-2 lg:mx-6">
              <h3 className="text-sm uppercase font-semibold text-blue-600 lg:text-md">
                Contact Details
              </h3>
              <h2 className="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                GET IN TOUCH
              </h2>
              <p className="mt-4 text-sm w-[100%] sm:w-[90%]">
                Questions or projects? Reach out to us today! Use the form or
                contact details, and we'll respond quickly.
              </p>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <svg
                    className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mx-2 text-gray-700 truncate w-72 text-wrap">
                    Katy TX 77493 USA
                  </span>
                </p>
                <p className="flex items-start -mx-2">
                  <svg
                    className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a
                    href="tel:+1-281-607-5120"
                    className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400"
                  >
                    +1 (281) 607-5120
                  </a>
                </p>
                <p className="flex items-start -mx-2">
                  <svg
                    className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                    <a href="mailto:info@octatechsolution.com" target="_blank">
                      info@octatechsolution.com
                    </a>
                  </span>
                </p>
              </div>

              <div className="mt-6 md:mt-8">
                <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>
                <div className="flex mt-4 -mx-1.5">
                  <a
                    href="https://www.linkedin.com/company/octa-tech-solutionn"
                    target="_blank"
                  >
                    <FaLinkedin
                      size={22}
                      className="mr-5 cursor-pointer text-gray-500 hover:text-gray-800"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/octatechsolutions"
                    target="_blank"
                  >
                    <BsInstagram
                      size={22}
                      className="mr-5 cursor-pointer text-gray-500 hover:text-gray-800"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61557758687079"
                    target="_blank"
                  >
                    <FaFacebookF
                      size={22}
                      className="mr-5 cursor-pointer text-gray-500 hover:text-gray-800"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@octatechsolution"
                    target="_blank"
                  >
                    <IoLogoYoutube
                      size={22}
                      className="mr-5 cursor-pointer text-gray-500 hover:text-gray-800"
                    />
                  </a>
                  <a
                    href="https://www.snapchat.com/add/octatech8?sender_web_id=3a7b0b34-1a0c-4ff4-bc43-6a838fb2b918&device_type=desktop&is_copy_url=true"
                    target="_blank"
                  >
                    <FaSnapchatGhost
                      size={22}
                      className="mr-5 cursor-pointer text-gray-500 hover:text-gray-800"
                    />
                  </a>
                  <a href="https://www.tiktok.com/@octatech3" target="_blank">
                    <FaTiktok
                      size={22}
                      className="mr-5 cursor-pointer text-gray-500 hover:text-gray-800"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6 ">
              <div className="w-full px-4 sm:px-8 py-10 mx-auto overflow-hidden bg-blue-600 rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50 ">
                <h2 className="text-lg font-medium text-white">LET'S TALK</h2>
                <h2 className="mt-2 text-2xl font-semibold tracking-wider text-white">
                  READY TO GET STARTED?
                </h2>
                <p className="mt-2 text-white">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                {/* FORM */}
                <form className="mt-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:gap-4 xl:gap-6">
                    <div className="full_name">
                      <label className="block mb-2 text-sm text-white">
                        Full Name *
                      </label>
                      <input
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Enter Full Name"
                        type="text"
                        value={formdata.name}
                        onChange={(e) =>
                          setFormdata({ ...formdata, name: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="email_address">
                      <label className="block mb-2 text-sm text-white">
                        Email address *
                      </label>
                      <input
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Enter Your Email"
                        type="email"
                        value={formdata.email}
                        onChange={(e) =>
                          setFormdata({ ...formdata, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-white">
                      Message *
                    </label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-36 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Enter Your Message"
                      value={formdata.message}
                      onChange={(e) =>
                        setFormdata({ ...formdata, message: e.target.value })
                      }
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <button
                      disabled={createLoading}
                      type="submit"
                      className="w-36 px-4 py-2.5 mt-6 text-md font-medium tracking-wide text-blue-600 capitalize transition-colors duration-300 transform bg-white hover:bg-blue-500 hover:text-white border hover-border-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
