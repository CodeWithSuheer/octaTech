import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const CTASection = () => {
    return (
        <>
            <section className='flex justify-center items-center px-5 sm:px-10 bg-white py-16 sm:py-24'>
                <div className="max-w-6xl mx-auto">
                    <Fade top duration={2000}>

                        <div className="group transition-all duration-300 hover:scale-[1.01] relative box_shadow bg-gradient-to-r from-purple-600 to-pink-600 py-6 sm:py-16 px-5 sm:px-6 rounded-xl grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">

                            <div className="rounded-lg pl-0 sm:pl-4">
                                <h2 className="baloo my-3 text-2xl font-semibold capitalize text-white lg:text-4xl">Tired of tech troubles? Request A Free Quote Now!</h2>
                                <h2 className="my-2 text-sm font-normal text-white">
                                    Don't waste another minute wrestling with frustrating technical issues. Get your FREE quote today and experience the Octa Tech difference. We help you focus on what truly matters
                                </h2>
                                <button onClick={() => { Tawk_API.toggle(); }} className="mt-3 text-white  tracking-wider underline underline-offset-4 flex justify-start items-center text-lg font-semibold">
                                    <span>Let's Talk</span>
                                    <MdOutlineKeyboardArrowRight size={22} className='mt-1.5' />
                                </button>
                            </div>


                            <div className="hidden lg:flex">
                                <img className='absolute z-40 right-10 -top-[8.2rem] w-[20rem]' src="https://res.cloudinary.com/dezi0bct4/image/upload/v1713219216/All%20Latest%20Images/rw4qcri6mx8sunyk6m6a.png" alt="" />
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}

export default CTASection
