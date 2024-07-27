import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const QueryDisplay = () => {
    const { id } = useParams();

    // GETTING QUERIES
    const { queries } = useSelector((state) => state.queries);

    const queryMessage = queries.find((data) => data._id == id);
    console.log('queryMessage', queryMessage);


    return (
        <>
            <section class="bg-gray-200 p-3 sm:p-5 min-h-screen">

                <div className="mx-auto max-w-screen-xl px-4 lg:px-3">
                    <div className="bg-white dark:bg-gray-800 relative px-7 py-5 shadow-md sm:rounded-lg overflow-hidden">
                        <h2 class="mb-4 text-3xl tracking-tight font-bold text-gray-900">{queryMessage.name}</h2>
                        <h2 class="mb-4 text-lg cursor-pointer font-medium underline underline-offset-4 text-blue-700">{queryMessage.email}</h2>
                        <p class="mb-4 text-md text-gray-700 font-light leading-6">{queryMessage.message}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default QueryDisplay
