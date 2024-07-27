import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import '../Services.css';

const ChooseServices = () => {
    return (
        <>
            <section className='py-10 px-4 sm:px-0'>
                <div className="max-w-4xl mx-auto">
                    <h2 className='text-center text-2xl sm:text-4xl tracking-wider font-bold '>Choose Your Services</h2>

                    <div className="service mt-10 flex justify-center items-center flex-wrap gap-12">
                        <div className="logos w-40 text-center flex flex-col items-center justify-items-start hover_up">
                            <img className='my-4 h-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2254.png?v=1711399694" alt="" />
                            <h4 className='font-semibold tracking-wide text-lg'>Infrastructure Management</h4>
                        </div>
                        <div className="logos w-40 text-center flex flex-col items-center justify-items-start hover_up">
                            <img className='my-4 h-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2245.png?v=1711400621" alt="" />
                            <h4 className='font-semibold tracking-wide text-lg'>Vendor Management</h4>
                        </div>
                        <div className="logos w-40 text-center flex flex-col items-center justify-items-start hover_up">
                            <img className='my-4 h-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2236_1.png?v=1711399696" alt="" />
                            <h4 className='font-semibold tracking-wide text-lg'>Security Management</h4>
                        </div>
                        <div className="logos w-40 text-center flex flex-col items-center justify-items-start hover_up">
                            <img className='my-4 h-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2236_2.png?v=1711399695" alt="" />
                            <h4 className='font-semibold tracking-wide text-lg'>Path Management</h4>
                        </div>
                        <div className="logos w-40 text-center flex flex-col items-center justify-items-start hover_up">
                            <img className='my-4 h-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235_1.png?v=1711399694" alt="" />
                            <h4 className='font-semibold tracking-wide text-lg'>Desk Support</h4>
                        </div>
                        <div className="logos w-40 text-center flex flex-col items-center justify-items-start hover_up">
                            <img className='my-4 h-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2247.png?v=1711399695" alt="" />
                            <h4 className='font-semibold tracking-wide text-lg'>IT Consulting</h4>
                        </div>
                        <div className="logos w-40 text-center flex flex-col items-center justify-items-start hover_up">
                            <img className='my-4 h-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235_2.png?v=1711399694" alt="" />
                            <h4 className='font-semibold tracking-wide text-lg'>Backup <br /> & Recovery</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChooseServices
