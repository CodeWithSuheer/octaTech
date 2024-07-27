const Stats = () => {
  return (
    <>
      <section className="py-8 px-3 sm:px-10 lg:px-14 xl:px-0 lg:min-h-[75vh] lg:pb-32">
        {/* GRADIENT EFFECT */}
        <div className="relative mx-auto max-w-2xl py-3 sm:py-20 lg:py-12">
          <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
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
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-2 sm:px-0">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
            <div className="h-32 pl-3 pr-2.5 rounded-lg bg-blue-600 text-white flex justify-center items-center gap-3">
              <div className="number">
                <h2 className="baloo text-4xl font-semibold tracking-wider">
                  24/7
                </h2>
              </div>
              <div className="data">
                <h3 className="text-md font-semibold tracking-wider">
                  Peace of Mind
                </h3>
                <p className="text-xs mt-1">
                  We're available around the clock to tackle your tech issues so
                  you don't have to wait
                </p>
              </div>
            </div>

            <div className="h-32 pl-3 pr-2.5 rounded-lg bg-white text-black border-blue-500 border-2 flex justify-center items-center gap-3">
              <div className="number">
                <h2 className="baloo text-4xl font-semibold tracking-wider">
                  20+
                </h2>
              </div>
              <div className="data">
                <h3 className="text-md font-semibold tracking-wider">
                  Expert Solutions
                </h3>
                <p className="text-xs mt-1">
                  Our certified technicians are skilled to solve even the
                  trickiest problems
                </p>
              </div>
            </div>

            <div className="h-32 hidden xl:flex"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-2 sm:px-0 mt-6 lg:mt-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
            <div className="h-32 hidden xl:flex"></div>

            <div className="h-32 pl-3 pr-2.5 rounded-lg bg-white text-black border-blue-500 border-2 flex justify-center items-center gap-3">
              <div className="number">
                <h2 className="baloo text-4xl font-semibold tracking-wider">
                  100%
                </h2>
              </div>
              <div className="data">
                <h3 className="text-md font-semibold tracking-wider">
                  Focus on You
                </h3>
                <p className="text-xs mt-1">
                  We prioritize your needs and provide personalized support and
                  clear communication.
                </p>
              </div>
            </div>

            <div className="h-32 pl-3 pr-2.5 rounded-lg bg-white text-black border-blue-500 border-2 flex justify-center items-center gap-3">
              <div className="number">
                <h2 className="baloo text-4xl font-semibold tracking-wider">
                  20+
                </h2>
              </div>
              <div className="data">
                <h3 className="text-md font-semibold tracking-wider">
                  Empowering Success
                </h3>
                <p className="text-xs mt-1">
                  We go beyond fixing problems. We help you leverage technology
                  for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
