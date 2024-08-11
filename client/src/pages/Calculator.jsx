import React, { useState } from 'react';
import { CustomButton } from '../components';

const Calculator = () => {
    const [ethAmount, setEthAmount] = useState(0);
    const [selectedCurrency, setSelectedCurrency] = useState('INR');
    const [convertedAmount, setConvertedAmount] = useState(new Intl.NumberFormat('en-US',
        {
            style: 'currency',
            currency: selectedCurrency
        }).format(0));

    const fetchExchangeRate = async () => {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=${selectedCurrency.toLowerCase()}`);
            const data = await response.json();
            const exchangeRate = data.ethereum[selectedCurrency.toLowerCase()];
            setConvertedAmount(new Intl.NumberFormat('en-US',
                {
                    style: 'currency',
                    currency: selectedCurrency
                }).format(ethAmount * exchangeRate));
        } catch (error) {
            window.alert('Error fetching exchange rate');
        }
    };

    const handleEthChange = (event) => {
        setEthAmount(event.target.value);
    };

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    const handleSubmit = () => {
        fetchExchangeRate();
    };

    return (
        <div className='relative overflow-auto flex flex-col items-center text-primary-text w-full h-full p-4 mt-4 -z-10'>
            <h1 className='font-epilogue font-bold md:text-3xl sm:text-2xl text-md leading-[38px] text-white'>ETH Currency Converter</h1>
            <div className='md:w-[500px] w-full outline outline-sm outline-white rounded-xl bg-secondary-bg sm:text-xl text-primary-text text-lg sm:p-5 p-2 mt-10'>
                <h3 className='text-white text-center font-epilogue font-semibold sm:text-[25px] text-sm leading-[38px] mb-10'>Convert ETH to {selectedCurrency}</h3>
                <div className='flex flex-col gap-5 w-full'>
                    <div className='flex items-center'>
                        <p className='text-center font-epilogue sm:text-base text-xs'>
                            Enter ETH amount: &nbsp;
                        </p>
                        <input type="number" value={ethAmount} onChange={handleEthChange} className='py-[5px] sm:px-10px] px-[10px] outline-none border-[1px] border-primary-bg bg-tertiary-bg font-epilogue placeholder:text-secondary-text text-tertiary-text sm:text-[14px] text-sm rounded-[10px] md:w-[150px] w-[90px]' />
                    </div>
                    <div className='flex items-center'>
                        <p className='text-center font-epilogue sm:text-base text-xs'>
                            Select currency: &nbsp;
                        </p>
                        <select value={selectedCurrency} onChange={handleCurrencyChange} className='py-[5px] sm:px-10px] px-[10px] outline-none border-[1px] border-primary-bg bg-tertiary-bg font-epilogue placeholder:text-secondary-text text-tertiary-text sm:text-[14px] text-sm rounded-[10px] md:w-[150px] w-[90px]'>
                            <option value="INR">INR (₹)</option>
                            <option value="USD">USD ($)</option>
                            <option value="EUR">EUR (€)</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='text-center font-epilogue sm:text-base text-xs'>
                            Converted Amount:&nbsp;
                        </p>
                        <input value={convertedAmount} disabled className='py-[5px] sm:px-10px] px-[10px] outline-none border-[1px] border-primary-bg bg-tertiary-bg font-epilogue placeholder:text-secondary-text text-tertiary-text sm:text-[14px] text-sm rounded-[10px] md:w-[150px] w-[90px]' />
                    </div>
                </div>
                <div className="flex justify-center items-center mt-5">
                    <CustomButton
                        btnType="submit"
                        title="Convert"
                        styles="bg-tertiary-bg w-full sm:text-[14px] text-sm "
                        handleClick={handleSubmit}
                    />
                </div>

            </div>
        </div>
    );
};

export default Calculator;
