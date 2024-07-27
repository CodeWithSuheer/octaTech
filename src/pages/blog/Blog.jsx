const Blog = () => {
    return (
        <>
            <section className='min-h-screen flex justify-center items-center pt-16 pb-10'>
                <div key="1" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-14 lg:py-14 mx-auto">
                    {/* ------------- HEADERS ------------- */}
                    <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Discover Our Insights</h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400">Explore the latest trends, strategies, and success stories from industry leaders leveraging Preline to drive innovation and customer satisfaction.</p>
                    </div>

                    {/* ------------- BLOG SECTION ------------- */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        <a className="group flex flex-col h-full border border-gray-200 hover:shadow-xl hover:bg-blue-600 transition-all duration-300 rounded-xl p-5 cursor-pointer">
                            <div className="aspect-w-16 aspect-h-11">
                                <img
                                    alt="Image Description"
                                    className="w-full object-cover rounded-xl"
                                    src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                />
                            </div>
                            <div className="my-6">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                                    Announcing a free plan for small teams
                                </h3>
                                <p className="mt-5 text-gray-600 group-hover:text-white">
                                    At Wake, our mission has always been focused on bringing openness.
                                </p>
                            </div>
                            <div className="mt-auto flex items-center gap-x-3">
                                <img
                                    alt="Image Description"
                                    className="size-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                />
                                <div>
                                    <h5 className="text-sm text-gray-800 group-hover:text-white">
                                        By Lauren Waller
                                    </h5>
                                </div>
                            </div>
                        </a>

                        <a className="group flex flex-col h-full border border-gray-200 hover:shadow-xl hover:bg-blue-600 transition-all duration-300 rounded-xl p-5 cursor-pointer"
                        >
                            <div className="aspect-w-16 aspect-h-11">
                                <img
                                    alt="Image Description"
                                    className="w-full object-cover rounded-xl"
                                    src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
                                />
                            </div>
                            <div className="my-6">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                                    How Google Assistant now helps you record stories for kids
                                </h3>
                                <p className="mt-5 text-gray-600 group-hover:text-white">
                                    Google is constantly updating its consumer AI, Google Assistant, with new features.
                                </p>
                            </div>
                            <div className="mt-auto flex items-center gap-x-3">
                                <img
                                    alt="Image Description"
                                    className="size-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                />
                                <div>
                                    <h5 className="text-sm text-gray-800 group-hover:text-white">
                                        By Aaron Larsson
                                    </h5>
                                </div>
                            </div>
                        </a>

                        <a className="group flex flex-col h-full border border-gray-200 hover:shadow-xl hover:bg-blue-600 transition-all duration-300 rounded-xl p-5 cursor-pointer"
                            href="#"
                        >
                            <div className="aspect-w-16 aspect-h-11">
                                <img
                                    alt="Image Description"
                                    className="w-full object-cover rounded-xl"
                                    src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
                                />
                            </div>
                            <div className="my-6">
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                                    Front accounts - let's work together
                                </h3>
                                <p className="mt-5 text-gray-600 group-hover:text-white">
                                    Are you an accountant? Are you a company formation advisor?
                                </p>
                            </div>
                            <div className="mt-auto flex items-center gap-x-3">
                                <img
                                    alt="Image Description"
                                    className="size-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                />
                                <div>
                                    <h5 className="text-sm text-gray-800 group-hover:text-white ">
                                        By Lauren Waller
                                    </h5>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
