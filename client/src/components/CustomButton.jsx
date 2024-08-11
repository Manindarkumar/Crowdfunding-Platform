import React from "react"

const CustomButton = ({ btnType, title, styles, handleClick }) => {
    return (
        <button
            type={btnType} className={`flex justify-center items-center font-epilogue font-semibold px-2 md:py-4 py-2 rounded-xl text-white hover:shadow-glass-hover shadow-glass transition-all ${styles}`} onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default CustomButton