import React from 'react';
import Marquee from 'react-fast-marquee';

const data = [
    {
        review: "I was drowning in database issues, but Octa Tech's consultants were lifesavers! They not only optimized my system but also showed me how to extract valuable insights. Now my data is working for me.",
        name: 'A & Z Homes LLC',
        role: 'Business Owner',
        url: 'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/WhatsApp_Image_2024-04-13_at_11.50.23_PM.jpg?v=1713222997'
    },
    {
        review: "My dream app became a reality thanks to Octa Tech's developers. They listened to my vision and built a user-friendly app that's exceeding expectations. Highly recommend!",
        name: 'Cosmo lab',
        role: 'Business Owner',
        url: 'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/WhatsApp_Image_2024-04-09_at_3.00.12_PM.jpg?v=1712657822'
    },
    {
        review: "Before Octa Tech, IT headaches were a constant struggle. Now, they're my trusted advisors who simplify everything and keep my business running smoothly. They're true tech troubleshooters!",
        name: 'SRT',
        role: 'Marketing Director',
        url: 'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/IMG_2440.png?v=1713226079'
    },
    {
        review: "Octa Tech has been a game-changer for my business. Their around-the-clock support saved me when my website crashed before a major launch. I must say their technicians were calm and efficient and got everything back in no time. Highly recommended.",
        name: 'Ammedia',
        role: 'Marketing Director',
        url: 'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Untitled_design__1_-removebg-preview.png?v=1713916983'
    },
    {
        review: "We partnered with Octa Tech to develop a custom app for our sales team. They took the time to understand our unique needs and made a user-friendly app that our team loved. Thanks, Octa Tech!",
        name: 'Emran Akthar',
        role: 'Ceo Ammar Forte',
        url: 'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/IMG_2438.png?v=1713225555'
    },
    {
        review: "As a small business owner, I don't have the time or resources to deal with complex IT issues. They handle everything from network security to software updates, allowing me to focus on what I do best - running my business.",
        name: 'HR Mortage',
        role: 'Marketing Director',
        url: 'https://cdn.shopify.com/s/files/1/0704/6378/2946/files/WhatsApp_Image_2024-04-24_at_3.26.57_AM.jpg?v=1713912777'
    },
];

const Testimonial = () => {
    return (
        <>
            <section className='py-5 px-0'>
                <div className='max-w-full mx-auto px-2 sm:px-0'>
                    {/* HEADER */}
                    <div className='header text-center'>
                        <h3 className="text-md uppercase tracking-wider font-semibold text-blue-600 lg:text-md">
                            Testimonials
                        </h3>
                        <h2 className="mt-2 baloo text-2xl font-semibold capitalize text-black lg:text-4xl">
                            Our Client's Feedback
                        </h2>
                        <h2 className="mt-1 text-sm tracking-wide font-normal text-black mx-auto w-[90%] lg:w-[40%]">
                            We are leading technology solutions providing company all over the
                            world.
                        </h2>
                    </div>
                </div>


                {/* BODY */}
                <Marquee
                    direction='left'
                    // gradient
                    // gradientWidth={100}
                    className='testimonial_marquee mt-5'>
                    {data.map((data, i) => (
                        <article className='group mx-10 py-10' key={i}>
                            <div className='box bg-white text-sm leading-relaxed tracking-wide review_Shadow max-w-[23rem] p-6 text-gray-700 rounded-xl'>
                                {data.review}
                            </div>

                            <div className='p-4 flex justify-start items-center gap-3'>
                                <div className="img w-10">
                                    <img className='rounded-full w-full' src={data.url} alt="" />
                                </div>

                                <div className='profile'>
                                    <h3 className='text-lg font-medium text-gray-900'>{data.name}</h3>
                                    <p className='-mt-1 line-clamp-3 text-xs text-gray-500'>
                                        {data.role}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </Marquee>
            </section>
        </>
    );
};

export default Testimonial;
