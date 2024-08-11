import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';


const CreateCampaign = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { createCampaign } = useStateContext();
    const { connect, address } = useStateContext();

    const [form, setForm] = useState({
        name: '',
        title: '',
        description: '',
        target: '',
        deadline: '',
        image: ''
    })

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        checkIfImage(form.image, async (exists) => {
            if (exists) {
                setIsLoading(true)
                await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18) })
                setIsLoading(false)
                navigate('/')
            }
            else {
                alert('Provide valid image URL')
                setForm({ ...form, image: '' })
            }
        })
    }


    return (

        <div className="overflow-y-auto w-full h-full p-4 flex justify-center items-center flex-col rounded-lg " >
            {isLoading && <Loader />}
            <div className={address ? "hidden" : 'flex flex-col gap-5'}>
                <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-primary-text'>
                    To create a campaign you need to connect your Metamask Wallet .
                </h1>
                <CustomButton btnType="button" title={address ? 'Create a campaign' : 'Connect'}
                    styles={address ? 'hidden' : 'text-sm bg-secondary-bg text-secondary-text'} handleClick={() => {
                        if (!address) {
                            connect();
                        }
                    }} />
            </div>
            <form onSubmit={handleSubmit} className={!address ? "hidden" : 'w-full h-full flex flex-col gap-[30px]'}>
                <h1 className='text-center font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>
                    Create a new Campaign
                </h1>
                <div className="flex flex-wrap gap-[40px]">
                    <FormField
                        lableName="Your Name *"
                        placeholder="John Doe"
                        inputType="text"
                        value={form.name}
                        handleChange={(e) => handleFormFieldChange('name', e)}
                    />

                    <FormField
                        lableName="Campaign Title *"
                        placeholder="Write a title"
                        inputType="text"
                        value={form.title}
                        handleChange={(e) => handleFormFieldChange('title', e)}

                    />

                </div>
                <FormField
                    lableName="Campaign Story *"
                    placeholder="Write your story"
                    isTextArea
                    value={form.description}
                    handleChange={(e) => handleFormFieldChange('description', e)}

                />
                <div className="flex flex-wrap gap-[40px]">
                    <FormField
                        lableName="Goal Amount *"
                        placeholder="ETH 0.50"
                        inputType="text"
                        value={form.target}
                        handleChange={(e) => handleFormFieldChange('target', e)}

                    />

                    <FormField
                        lableName="End Date *"
                        placeholder="dd-mm-yy"
                        inputType="date"
                        value={form.deadline}
                        handleChange={(e) => handleFormFieldChange('deadline', e)}

                    />
                </div>
                <FormField
                    lableName="Campaign image *"
                    placeholder="Place image URL of your campaign"
                    inputType="url"
                    value={form.image}
                    handleChange={(e) => handleFormFieldChange('image', e)}

                />
                <div className="flex justify-center items-center">
                    <CustomButton
                        btnType="submit"
                        title="Submit new campaign"
                        styles="bg-tertiary-bg"
                    />
                </div>
            </form>
        </div >
    )
}

export default CreateCampaign