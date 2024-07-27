import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import data from "./IndustriesData";
import Button from '../../components/Button';

const Industries = () => {
    return (
        <>
            {/* ----------- HEADER -----------  */}
            <section className='relative pt-3 lg:pt-20 lg:pb-12 bg-gray-50'>
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
                                <h2 className="mt-3 w-[100%] xl:w-[90%] text-4xl leading-5 font-semibold capitalize text-black lg:text-5xl xl:text-5xl">Industries</h2>
                                <h2 className="mt-4 pt-2 text-sm sm:text-[1.08rem] font-normal leading-6 text-black md:w-[80%] lg:w-[90%]">
                                    With a focus on industries like healthcare and finance, our solutions are industry-specific.
                                </h2>

                                <div className="hero_section_buttons flex items-start xs:items-center flex-col sm:flex-row gap-10 mt-6 mb-10 sm:mb-0 lg:mt-7">
                                    <Button text="Let's Talk" />
                                </div>
                            </div>
                        </div>

                        <div className="user_select flex items-center justify-center px-0 sm:px-10 lg:px-0 w-full mt-14 lg:mt-10 lg:w-1/2">
                            <img className="w-full h-full rounded-xl object-contain" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_1144_3.png?v=1711998172" alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------- BOLD TEXT -----------  */}
            <section className='bg-blue-700 relative flex justify-center items-center'>
                <h2 className='baloo text-white text-center text-md md:text-xl xl:text-2xl py-3 tracking-wider lg:tracking-widest'>
                    We serve a wide range of industries including healthcare, finance, and more
                </h2>
            </section>


            {/* ----------- INDUSTRIES -----------  */}
            <section className='my-16'>
                <div className="max-w-5xl mx-auto px-5 sm:px-10 xl:px-0">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                        {data.map((data, index) => (
                            <div key={index} className="cacrd_up_hover group overflow-hidden rounded-lg shadow transition hover:shadow-lg my-1">
                                <img
                                    alt=""
                                    src={data.img}
                                    className="h-56 w-full object-cover"
                                />

                                {/* CARD - DATA */}
                                <div className="relative bg-white p-4 sm:px-4 sm:py-4 text-center flex justify-center items-center flex-col">
                                    <h2 className="text-lg font-semibold tracking-wide">{data.name}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </>
    )
}

export default Industries;