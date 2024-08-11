import React from 'react'

import { logo, noImage } from '../assets'
import { daysLeft } from '../utils';


const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
    const remainingDays = daysLeft(deadline)

    return (
        <div className='sm:w-auto w-full rounded-[15px] bg-primary-bg text-primary-text cursor-pointer' onClick={handleClick}>
            <div className='m-4 rounded-xl h-[158px] overflow-hidden'>
                {image ? <img src={image} alt="fund" className='w-full h-full object-cover' />
                    : <img src={noImage} alt="No Image" className='w-full h-full object-cover' />
                }
            </div>
            <div className="flex flex-col gap-3 px-4 pb-4">
                <div className="block">
                    <h3 className='font-epilogue font-semibold text-[16px] text-left leading-[26px] truncate'>{title}
                    </h3>
                    <p className=' font-epilogue font-normal text-left leading-[18px] truncate'>
                        {description}
                    </p>
                </div>

                <div className='flex justify-between flex-wrap gap-2 text-[14px]'>
                    <div className='flex items-center gap-1'>
                        <h4 className='font-epilogue font-semibold  leading-[22px]'> {amountCollected} </h4>
                        <p className='font-epilogue font-normal leading-[18px] sm:max-w-[120px] truncate'> of {target} ETH</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <h4 className='font-epilogue font-bold  leading-[22px]'>{remainingDays}
                        </h4>
                        <p className='font-epilogue  leading-[18px] sm:max-w-[120px] truncate'>Days left </p>
                    </div>
                </div>
                <div className="flex items-center gap-[12px]">
                    <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-primary-bg overflow-hidden'>
                        <img src={logo} alt="user" />
                    </div>
                    <p className='flex-1 font-epilogue font-normal text-[12px] text-primary-text truncate'>by <span className='text-primary-text'>{owner}</span></p>
                </div>
            </div>
        </div>
    )
}

export default FundCard