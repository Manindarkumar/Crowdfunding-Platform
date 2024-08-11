import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { useStateContext } from '../context';
import { light, dark, system, logo, home, add, profile, about, calc } from '../assets'
import CustomButton from './CustomButton';




const Sidebar = () => {
    const { connect, address } = useStateContext();
    const [showList, setShowList] = useState(false);
    const [theme, setTheme] = useState(localStorage.theme ? localStorage.theme : "Light");
    document.documentElement.dataset.theme = theme;

    const themes = [
        {
            value: 'Light',
            src: light
        },
        {
            value: 'Dark',
            src: dark
        }, {
            value: 'System',
            src: system
        },
    ]

    const changeTheme = (themeColor) => {
        setShowList({ showList: false })
        setTheme(themeColor)
        localStorage.theme = themeColor;
        document.documentElement.dataset.theme = themeColor;
    }
    return (
        <div className="relative md:w-[100px] w-full flex md:flex-col flex-row items-center justify-center rounded-xl backdrop-blur-sm text-tertiary-text md:py-4 px-4 py-2 md:text-lg sm:text-[10px] text-[7px]">
            <Link to="/" className='md:mb-auto md:mr-0 mr-auto mb-0' >
                <img src={logo} alt="Logo" className='md:w-12 sm:w-7 w-6 rounded-full outline-2 outline-double outline-white' />
            </Link>
            <div className="absolute md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2  flex md:flex-col flex-row items-center justify-center md:gap-10 sm:gap-5 gap-2">
                <Link to="/" className='nav-link'>
                    <img src={home} alt='Home' className='md:w-16 sm:w-5 w-4' />
                </Link>
                <Link to="/create-campaign" className='nav-link' >
                    <img src={add} alt='Home' className='md:w-16 sm:w-5 w-4' />
                </Link>
                <Link to="/profile" className='nav-link' >
                    <img src={profile} alt='Home' className='md:w-16 sm:w-5 w-4' />
                </Link>
                <Link to="/calculator" className='nav-link' >
                    <img src={calc} alt='Home' className='md:w-16 sm:w-5 w-4' />
                </Link>
            </div >
            <div className='flex items-center justify-center md:flex-col flex-row md:gap-2 gap-1'>
                <div className='sm:relative absolute flex items-center sm:left-0 left-12' onClick={() => { setShowList(value => !value) }}>
                    <div className='hover:bg-primary-bg rounded-full sm:p-2 p-0' >
                        <img className='cursor-pointer md:w-10 sm:w-7 w-5' src={(themes.filter((obj) => (obj.value === theme))).map((obj) => obj.src)} alt={theme + ' Theme'} />
                    </div>

                    <div className={`${!showList ? 'hidden' : ''} absolute w-max md:left-[100%] sm:-left-[200%] left-[100%] bg-tertiary-text backdrop-blur-sm p-2 rounded-lg`}>
                        {themes.map((item, key) =>
                            <div key={key} className='w-full flex gap-1 items-center text-primary-text hover:bg-tertiary-bg p-2 rounded-lg cursor-pointer' onClick={() => changeTheme(item.value)}>
                                <img className='sm:w-5 w-3' src={item.src} alt="Light theme" />
                                <p className='text-primary-text'>{item.value}</p>
                            </div>
                        )}
                    </div>
                </div>
                <Link to="/about" className='hover:bg-primary-bg rounded-full md:p-2 p-0'>
                    <img src={about} alt="About" className='md:w-10 sm:w-7 w-5' />
                </Link>
                <CustomButton btnType="button" title={address ? 'Create a campaign' : 'Connect'}
                    styles={address ? 'hidden' : 'sm:text-sm text-xm'} handleClick={() => {
                        if (!address) {
                            connect();
                        }
                    }} />
            </div>
        </div >
    )
}

export default Sidebar