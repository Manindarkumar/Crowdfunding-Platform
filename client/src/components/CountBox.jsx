import React from 'react'

const CountBox = ({ title, value }) => {
    return (
        <div className='flex flex-col items-center md:w-[200px] sm:w-[170px] w-[120px] overflow-hidden'>
            <h4 className='font-epilogue font-bold sm:text-[30px] text-[10px] text-tertiary-text p-3 bg-secondary-text rounded-t-md w-full text-center truncate'>{value}</h4>
            <p className='font-epilogue font-normal sm:text-[16px] text-[9px] text-primary-text bg-tertiary-text px-3 py-2 w-full rounded-b-md text-center'>{title}</p>
        </div>
    )
}

export default CountBox