import React from 'react'

import { netlify, react, solidity, tailwind, thirdweb, vscode } from '../assets'

const TechCard = ({ item }) => {
    const items = {
        "ReactJS": react,
        "Tailwind CSS": tailwind,
        "Solidity": solidity,
        "ThirdWeb": thirdweb,
        "VS Code": vscode,
        "Netlify": netlify,
    }
    console.log(items["ThirdWeb"]);

    return (
        <div className='flex items-center gap-3 ms:p-5 p-3 rounded-full bg-primary-bg text-primary-text'>
            <div className='md:w-10 w-5'>
                <img src={items[item]} alt={item} className='w-full h-full' />
            </div>
            <p className='font-serif md:text-2xl text-lg'>{item}</p>
        </div>
    )
}

export default TechCard