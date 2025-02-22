import React from 'react'
import './App.css'
import logoMark from './images/logo-mark.svg'
import imageAvatar from './images/image-avatar.jpg'
import iconGitHub from './images/icon-github.svg'

function CongratsPage({name, email, username, avatar}){
    return (
        <div className='flex flex-col justify-center items-center text-center w-[344px] md:w-[786px] mb-9 md:mb-12'>
            <div className='flex flex-col items-center mb-[70px] md:mb-[110px]'>
                <h1 className='text-heading text-[28px] md:text-[58px] font-bold leading-[2rem] md:leading-[4rem] mb-6 md:mb-8'>Congrats, <span className='text-highlight'>{name}</span>! Your ticket is ready.</h1>
                <p className='text-paragraph text-[19px] md:text-[23px] leading-[1.5rem] md:leading-[1.8rem] md:w-[488px]'>We've emailed your ticket to <span className='text-highlight'>{email}</span> and will send updates in the run up to the event.</p>
            </div>
            <div className='bg-ticket-mobile md:bg-ticket-desktop bg-no-repeat w-[346px] h-[164px] md:w-[600px] md:h-[280px] flex justify-between mx-4 mb-60'>
                <div className='mt-3 md:mt-4'>
                    <div className='flex text-left mb-5 md:mb-16 ml-4 md:ml-6'>
                        <img src={logoMark} alt="logo mark" className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] mr-3 md:mr-5 md mt-2 md:mt-3' />
                        <div>
                            <h2 className='text-heading text-[22px] md:text-[38px] font-bold mb-1'>Coding Conf</h2>
                            <p className='text-paragraph text-[14px] md:text-[18px]'>Jan 31, 2025 / Austin, TX</p>
                        </div>
                    </div>
                    <div className='flex text-left ml-4 md:ml-6'>
                        <img src={avatar} alt="image avatar" className='w-[45px] h-[45px] md:w-[80px] md:h-[80px] mr-3 md:mr-5 mt-2 rounded-lg' />
                        <div>
                            <h2 className='text-heading text-[18px] md:text-[28px] mt-2 md:mt-4'>{name}</h2>
                            <div className='flex items-center'>
                                <img src={iconGitHub} alt="icon GitHub" className='w-[16px] h-[16px] md:w-[22px] md:h-[22px] mr-1'/>
                                <p className='text-paragraph text-[14px] md:text-[18px]'>{username}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rotate-90 w-[22px] h-[64px] md:w-[24px] md:h-[88px] text-border-box text-[20px] md:text-[28px] mt-7 mr-9 md:mt-[72px] md:mr-16'>#01609</div>
            </div>
        </div>
    )
}

export default CongratsPage
