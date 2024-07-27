import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import product from './SliderData';
import { TiMediaPlayReverse } from "react-icons/ti";
import { TiMediaPlay } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import data from "../services/ServicesData";

const ITServicesSlider = () => {
  const [slidesToShow] = useState(3);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNavigate = (url) => {
    navigate(`/${url}`);
    window.scroll(0, 0);
  };

  return (
    <>
      <section className="pt-12 pb-16 px-4 xl:px-0 slider_back">
        <div className="max-w-5xl xl:max-w-6xl mx-auto">
          <div className="flex justify-between items-center px-1 sm:px-8 flex-col sm:flex-row gap-7 sm:gap-5">
            <div className="slider_text">
              <h3 className="text-md uppercase font-semibold text-blue-600 lg:text-md">
                IT Services
              </h3>
              <h2 className="baloo my-2 lg:my-2.5 text-2xl font-semibold w-[100%] xl:w-[60%] capitalize text-black lg:text-4xl">
                We Solve IT Problems With Technology
              </h2>
              <h2 className="text-sm font-normal text-black w-[100%] md:w-[70%] xl:w-[70%]">
                We are leading technology solutions providing company all over
                the world.
              </h2>
            </div>
            <div className="slider_button flex flex-row">
              <button
                onClick={previous}
                className="mx-1.5 inline-block rounded-full border bg-[#3485fd] text-white p-2.5 focus:outline-none"
              >
                <TiMediaPlayReverse size={19} />
              </button>

              <button
                onClick={next}
                className="mx-1.5 inline-block rounded-full border bg-[#3485fd] text-white p-2.5 focus:outline-none"
              >
                <TiMediaPlay size={19} />
              </button>
            </div>
          </div>

          <div className="mt-4 mx-2 px-0 sm:px-0">
            <Slider ref={sliderRef} {...settings}>
              {data.map((data, index) => (
                <div
                  key={index}
                  className="relative flex px-3 flex-col justify-center overflow-hidden py-6 sm:py-8"
                >
                  {/* CARD */}
                  <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-2xl sm:px-6">
                    <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#3485fd] transition-all duration-300 group-hover:scale-[10]"></span>
                    <div className="relative z-10 mx-auto max-w-md">
                      <span className="grid h-20 w-20 place-items-center rounded-full bg-[#3485fd] transition-all duration-300 group-hover:bg-sky-400">
                        {data?.icon}
                      </span>

                      <h2 className="pt-5 text-xl transition-all duration-300 group-hover:text-white">
                        {data?.service}
                      </h2>
                      <div className="space-y-6 pt-2 text-base leading-6 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                        <p>{data.desc.split(" ").slice(0, 8).join(" ")} ...</p>
                      </div>
                      <div className="pt-5 text-base font-semibold leading-7">
                        <p>
                          <button
                            onClick={() => handleNavigate(data.url)}
                            className="text-[#3485fd] transition-all duration-300 group-hover:text-white"
                          >
                            Read more &rarr;
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITServicesSlider;
