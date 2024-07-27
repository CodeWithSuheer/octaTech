import React from 'react'
import { Link } from 'react-router-dom'

const Article = () => {

    const handleToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <>
            <section className="py-20 px-5 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* HEADER */}
                    <div className="header text-center">
                        <h3 className="text-md uppercase tracking-wider font-semibold text-blue-600 lg:text-md">Article</h3>
                        <h2 className="mt-2 baloo text-2xl font-semibold capitalize text-black lg:text-4xl">Read Our Latest Blog</h2>
                        <p className="mt-1 text-sm font-normal text-black mx-auto w-[90%] lg:w-[40%]">Discover our latest tech blogs for expert insights and trends.</p>

                    </div>

                    {/* BODY */}
                    <div className="article_body mt-10">
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 xl:gap-8">
                            {/* FIRST CARD */}
                            <div className="card bg-white px-2 py-3 box_shadow rounded-2xl">
                                <img className='h-48 mx-auto w-full object-cover rounded-xl' src="https://res.cloudinary.com/dezi0bct4/image/upload/v1712505292/latestImages/Rectangle_6_y7srbk.png" alt="" />
                                <div className="card_details px-2 py-2.5">
                                    <h3 className='mt-1.5 text-lg text-gray-800 font-semibold tracking-wide'>Coming Soon...</h3>
                                    <p className='mt-1.5 text-sm w-full'>Stay tuned for our upcoming blogs!</p>
                                    <Link to="/blog" onClick={handleToTop} className='pt-2 text-sm text-blue-500 font-semibold tracking-wide hover:underline hover:underline-offset-4'>View More</Link>
                                </div>
                            </div>
                            {/* SECOND CARD */}
                            <div className="card bg-white px-2 py-3 box_shadow rounded-2xl">
                                <img className='h-48 mx-auto w-full object-cover rounded-xl' src="https://res.cloudinary.com/dezi0bct4/image/upload/v1712505293/latestImages/Rectangle_8_w0irkl.png" alt="" />
                                <div className="card_details px-2 py-2.5">
                                    <h3 className='mt-1.5 text-lg text-gray-800 font-semibold tracking-wide'>Coming Soon...</h3>
                                    <p className='mt-1.5 text-sm w-full'>Stay tuned for our upcoming blogs!</p>
                                    <Link to="/blog" onClick={handleToTop} className='pt-2 text-sm text-blue-500 font-semibold tracking-wide hover:underline hover:underline-offset-4'>View More</Link>
                                </div>
                            </div>
                            {/* THIRD CARD */}
                            <div className="card bg-white px-2 py-3 box_shadow rounded-2xl">
                                <img className='h-48 mx-auto w-full object-cover rounded-xl' src="https://res.cloudinary.com/dezi0bct4/image/upload/v1712505291/latestImages/Rectangle_6-1_on8ndm.png" alt="" />
                                <div className="card_details px-2 py-2.5">
                                    <h3 className='mt-1.5 text-lg text-gray-800 font-semibold tracking-wide'>Coming Soon...</h3>
                                    <p className='mt-1.5 text-sm w-full'>Stay tuned for our upcoming blogs!</p>
                                    <Link to="/blog" onClick={handleToTop} className='pt-2 text-sm text-blue-500 font-semibold tracking-wide hover:underline hover:underline-offset-4'>View More</Link>
                                </div>
                            </div>
                            {/* FORTH CARD */}
                            <div className="card bg-white px-2 py-3 box_shadow rounded-2xl">
                                <img className='h-48 mx-auto w-full object-cover rounded-xl' src="https://res.cloudinary.com/dezi0bct4/image/upload/v1712505293/latestImages/Rectangle_8_w0irkl.png" alt="" />
                                <div className="card_details px-2 py-2.5">
                                    <h3 className='mt-1.5 text-lg text-gray-800 font-semibold tracking-wide'>Coming Soon...</h3>
                                    <p className='mt-1.5 text-sm w-full'>Stay tuned for our upcoming blogs!</p>
                                    <Link to="/blog" onClick={handleToTop} className='pt-2 text-sm text-blue-500 font-semibold tracking-wide hover:underline hover:underline-offset-4'>View More</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Article
