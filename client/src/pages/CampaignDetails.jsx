import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useStateContext } from '../context'
import { CustomButton, CountBox, Loader } from '../components'
import { calculateBarPercentage, daysLeft } from '../utils'
import { logo, noImage } from '../assets'

const CampaignDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { donate, getDontations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState('')
  const [donators, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);
  const fetchDonators = async () => {
    const data = await getDontations(state.pId)
    setDonators(data);
  }

  useEffect(() => {
    if (contract) fetchDonators();
  }, [contract, address])

  const handleDonate = async () => {
    setIsLoading(true);
    await (donate(state.pId, amount));
    navigate('/')
    setIsLoading(false);
  }



  return (
    <div className='w-full h-full overflow-auto text-primary-text pr-4'>
      {isLoading && <Loader />}
      <div className="w-full flex flex-col">
        <div className="relative">
          {state.image ? <img src={state.image} alt="campaign" className='w-full sm:h-[410px] h-[250px] object-cover rounded-xl' />
            : <img src={noImage} alt="No Image" className='w-full sm:h-[410px] h-[250px] object-cover rounded-xl' />
          }
          <div className='absolute right-2 md:bottom-2 sm:bottom-3 bottom-2 flex flex-col sm:gap-[30px] gap-4 overflow-hidden'>
            <CountBox title="Days Left" value={remainingDays} />
            <CountBox title={`Raised of ${state.target} ETH`} value={state.amountCollected} />
            <CountBox title="Total Backers" value={donators.length} />
          </div>
        </div>
        <h1 className='font-epilogue font-semibold text-[18px] mt-5 uppercase'>Progress</h1>
        <div className="relative w-full h-[5px] bg-secondary-blue mt-2 rounded-xl">
          <div className="absolute h-full bg-primary-blue rounded-xl" style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth: '100%' }}>
          </div>
        </div>
      </div>

      <div className="mt-5 flex md:flex-row flex-col justify-between gap-5">
        <div className="flex-[2] flex flex-col gap-5">
          <div>
            <h4 className='font-epilogue font-semibold text-[18px] uppercase'>Creator</h4>

            <div className='mt-2 flex flex-row flex-wrap items-center gap-2'>
              <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-primary-bg  cursor-pointer overflow-hidden">
                <img className='w-full h-full object-cover' src={logo} alt="user" />
              </div>
              <div className="">
                <h4 className='text-primary-text font-epilogue font-semibold text-[14px] break-all'>{state.owner}</h4>
              </div>
            </div>
          </div>

          <div >
            <h4 className='font-epilogue font-semibold text-[18px] uppercase'>Title</h4>
            <p className='font-epilogue font-normal text-[16px] text-primary-text leading--[26px] text-justify my-2'>{state.title}</p>
            <h4 className='font-epilogue font-semibold text-[18px] uppercase'>Story</h4>
            <p className='font-epilogue font-normal text-[16px] text-primary-text leading--[26px] text-justify mt-2'>{state.description}</p>
          </div>

          <div>
            <h4 className='font-epilogue font-semibold text-[18px] uppercase'>Latest Donations (Overall: {donators.length})</h4>

            <div className="mt-[20px] flex flex-col flex-wrap gap-4">
              {
                donators.length > 0 ?
                  donators.slice(-5).map((item, index) => (
                    <div key={`${item.donator} - ${index}`} className='flex flex-wrap items.center gap-4'>
                      <p className='md:w-[300px] w-[200px] whitespace-nowrap overflow-hidden text-ellipsis font-epilogue font-normal text-[16px] text-primary-text leading-[26px]'>
                        {index + 1}.  {item.donator}
                      </p>
                      -
                      <p className='font-epilogue font-normat text-[16px] text-primary-text leading-[26px]'>
                        {item.donation} ETH
                      </p>
                    </div>
                  ))
                  :
                  <p className='font-epilogue font-normal text-[16px] text-primary-text leading--[26px] text-justify'>No donations yet</p>
              }
            </div>
          </div>
        </div>


        <div className="md:w-[300px] wd-full">
          <div className="flex flex-col p-4 bg-primary-bg rounded-[10px]">
            <p className="font-epilogue font-medium text-2xl leading-[30px] text-center text-primary-text">
              Fund the Campaign
            </p>
            <div className="mt-[30px] flex flex-col items-center">
              <input type="number" placeholder='Ex: ETH 0.1' step="0.01" className='w-full py-[10px] sm:px-[20px] px-[15px] outline-none border-[1px] border-primary-bg bg-tertiary-bg text-primary-text font-epilogue text-[18px] leading-[30px] placeholder:text-secondary-text rounded-[10px]'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <CustomButton
                btnType="button"
                title="Fund"
                styles="mt-5 w-full bg-tertiary-bg text-primary-text"
                handleClick={handleDonate}
              />

            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default CampaignDetails