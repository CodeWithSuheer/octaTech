import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

const Button = ({ text }) => {
    return (
        <>
            <button onClick={() => { Tawk_API.toggle(); }} className="max-w-40 flex items-center gap-2 px-5 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                {text} <FaLocationArrow />
            </button>
        </>
    )
}

export default Button
