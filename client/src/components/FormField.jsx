import React from 'react'

const FormField = ({ lableName, placeholder, inputType, isTextArea, value, handleChange }) => {
    return (
        <label className='flex-1 w-full flex flex-col'>
            {lableName && (
                <span className="font-epilogue font-mdedium text-[14px] text-primary-text leading-[22px] mb-[10px] ">
                    {lableName}
                </span>
            )}
            {isTextArea
                ?
                (<textarea required value={value} onChange={handleChange} rows={10} placeholder={placeholder}
                    className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-primary-bg bg-tertiary-bg font-epilogue placeholder:text-secondary-text text-tertiary-text text-[14px] rounded-[10px] sm:min-w-[300px] '
                />)
                :
                (<input required value={value} onChange={handleChange} type={inputType} step="0.1" placeholder={placeholder}
                    className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-primary-bg bg-tertiary-bg font-epilogue placeholder:text-secondary-text text-tertiary-text text-[14px] rounded-[10px] sm:min-w-[300px] '
                />)}

        </label >
    )
}

export default FormField