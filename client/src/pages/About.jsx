import React from 'react'
import { TechCard } from './../components';

const About = () => {
    return (
        <div className='relative flex flex-col gap-10 text-white overflow-y-auto w-full h-full sm:px-10 px-2 pt-2 -z-10'>
            <div className='flex flex-col gap-4'>
                <h1 className='md:text-4xl sm:text-2xl text-xl text-center font-semibold'>Blockchain Based Crowdfunding Platform</h1>
                <p className='md:text-2xl sm:text-lg text-sm text-justify'>
                    This is a crowdfunding platform which uses the etherium blockchain where you can create campaigns and fund to other campaigns using ETH cryptocurrency. To create or fund campaigns you need metamask wallet. You can connect your wallet using the Connect button provided in the site. You can view all campaigns, create campaigns and also view your personal campaigns.
                </p>
            </div>
            <div className='flex sm:flex-row flex-col justify-between gap-5'>
                <div className='flex flex-col gap-4 text-center' >
                    <h1 className='md:text-4xl sm:text-2xl text-xl font-semibold'>Team Members</h1>
                    <div className='text- md:text-2xl sm:text-lg text-sm'>
                        <p>Manindar Kumar Singh (1AJ20CS037)</p>
                        <p>Rohan Paul (1AJ20CS065)</p>
                        <p>Watsal Kumar (1AJ20CS084)</p>

                    </div>
                </div>
                <div className='flex flex-col gap-4 text-center'>
                    <h1 className='md:text-4xl sm:text-2xl text-xl font-semibold'>Guide</h1>
                    <div className='md:text-2xl sm:text-lg text-sm text-center'>
                        <p>Dr. Kavitha C</p>
                        <p>H.O.D, CSE</p>
                        <p>CITNC</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col text-center gap-10 '>
                <h1 className='md:text-4xl sm:text-2xl text-xl  font-semibold '>Technologies Used</h1>
                <div className='md:text-2xl text-lg flex flex-wrap justify-center gap-10'>
                    <TechCard item="ReactJS" />
                    <TechCard item="Tailwind CSS" />
                    <TechCard item="Solidity" />
                    <TechCard item="ThirdWeb" />
                    <TechCard item="VS Code" />
                    <TechCard item="Netlify" />
                </div>
            </div>
        </div >
    )
}

export default About