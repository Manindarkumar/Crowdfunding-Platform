import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FundCard } from '../components'
import { loader } from '../assets'

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
    const navigate = useNavigate();

    const handleNavigate = (campaign) => {
        navigate(`/campaign-details/${campaign.title}`, { state: campaign })
    }

    return (
        <div className='relative overflow-y-auto w-full h-full pr-4 -z-10'>
            <h1 className='font-epilogue font-semibold text-[18px] px-3 py-3 bg-secondary-bg text-white md:text-left text-center rounded-xl'>{title} {"("}{campaigns.length}{")"}</h1>
            <div className=" sm:grid flex flex-wrap grid-cols-[repeat(auto-fill,minmax(250px,1fr))] mt-4 gap-[26px]">
                {
                    isLoading &&
                    <img src={loader} alt="loader" className='w-[200px] h-[200px] object-contain absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
                }
                {
                    !isLoading &&
                    campaigns.length === 0 &&
                    <p className="absolute font-epilogue font-semibold text-[14px] leading-[30px] p-2 text-secondary-text">
                        No Campaign Yet.
                    </p>
                }

                {
                    !isLoading &&
                    campaigns.length > 0 &&
                    campaigns.map((campaign, index) =>
                        <FundCard
                            key={index}
                            {...campaign}
                            handleClick={() => handleNavigate(campaign)
                            }
                        />
                    )
                }
            </div>

        </div>
    )
}

export default DisplayCampaigns