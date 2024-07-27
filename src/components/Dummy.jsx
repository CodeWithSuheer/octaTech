<footer className="bg-[#1d215f]">
          <div className="upperFooter bg-[#ECECFB]">
            <div className="px-5 sm:px-10 pt-12 sm:pb-10 pb-10 mx-auto">
              {/* DETAILS */}
              <div className="pt-16 pb-14 px-4 md:px-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
                {/* LOGO & HEADING */}
                <div className="sm:col-span-2">
                  <h1 className="max-w-lg flex items-center text-xl font-semibold tracking-tight text-black xl:text-2xl">
                    <img
                      className="-ml-3 w-12"
                      src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/aaa.png?v=1713875658"
                      alt="logo"
                    />
                    Study Stello
                  </h1>
                  <p className="max-w-md text-[1rem] mt-3">
                    Study Stello is providing help to students as academic
                    consultants, to resolve their queries, helping them by
                    providing sufficient help in assignments and exams. There
                    are a vast variety of subjects offered by Study Stello
                    through experts.
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

                {/* PRODUCT & CATEGORIES */}
                <div>
                  <p className="text-xl font-semibold text-black">Services</p>
                  <div className="flex flex-col items-start mt-3 space-y-2">
                    <Link
                      to="/online-classes"
                      className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                    >
                      Online Class
                    </Link>
                    <Link
                      to="/exams"
                      className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                    >
                      Exams
                    </Link>
                    <Link
                      to="/assignments"
                      className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                    >
                      Assignments
                    </Link>
                  </div>
                </div>

                {/* PRODUCT & CATEGORIES */}
                <div>
                  <p className="text-xl font-semibold text-black">
                    Contact Info
                  </p>
                  <div className="flex flex-col items-start mt-3 space-y-2">
                    {/* PHONE NUMBER */}
                    <a
                      href="tel:+1-716-374-9747"
                      className="flex items-center gap-2"
                    >
                      <FaPhone /> +1 (716) 374-9747
                    </a>

                    {/* SOCIAL LINKS */}
                    <div className="links pt-2 flex items-center justify-start gap-2.5">
                      <a href="#" className="">
                        <FaFacebookF className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" />
                      </a>
                      <a href="#" className="">
                        <FaInstagram className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" />
                      </a>
                      <a href="#" className="">
                        <FaLinkedinIn className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" />
                      </a>
                      <a href="#" className="">
                        <FaTiktok className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" />
                      </a>
                    </div>

                    {/* PAYMENT METHOLDS */}
                    <div className="paymentMethods pt-2 flex items-center justify-start gap-2">
                      <img
                        className="w-8"
                        src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Paypal_logo.png?v=1713217299"
                        alt=""
                      />
                      <img
                        className="w-8"
                        src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/MasterCard_Logo_svg.png?v=1713215530"
                        alt=""
                      />
                      <img
                        className="w-8"
                        src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/visa.png?v=1713215529"
                        alt=""
                      />
                      <img
                        className="w-8"
                        src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/American_Express.png?v=1713215529"
                        alt=""
                      />
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
                    className="w-[4rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/American_Express.png?v=1713215529"
                    alt=""
                  />
                </a>

                <a href="https://pk.visamiddleeast.com/" target="_blank">
                  <img
                    className="w-[4rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/visa.png?v=1713215529"
                    alt=""
                  />
                </a>

                <a href="https://www.mastercard.us/en-us.html" target="_blank">
                  <img
                    className="w-[4rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/MasterCard_Logo_svg.png?v=1713215530"
                    alt=""
                  />
                </a>

                <a href="https://www.discover.com/" target="_blank">
                  <img
                    className="w-[4rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Discover-logo.png?v=1713215529"
                    alt=""
                  />
                </a>

                <a href="https://www.zellepay.com/" target="_blank">
                  <img
                    className="w-[4rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Zelle_logo.png?v=1713215528"
                    alt=""
                  />
                </a>

                <a href="https://www.paypal.com/pk/home" target="_blank">
                  <img
                    className="w-[5rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Paypal_logo.png?v=1713217299"
                    alt=""
                  />
                </a>

                <a href="https://venmo.com/" target="_blank">
                  <img
                    className="w-[4rem]"
                    src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Venmo-Logo.png?v=1713215529"
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