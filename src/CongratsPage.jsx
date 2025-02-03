import React from 'react'
import './App.css'
import logoMark from './images/logo-mark.svg'
import imageAvatar from './images/image-avatar.jpg'
import iconGitHub from './images/icon-github.svg'

function CongratsPage(){
    return (
        <div className='flex flex-col justify-center items-center text-center w-[344px] md:w-[786px] mb-9 md:mb-12'>
            <div className='mb-[70px]'>
                <h1 className='text-heading text-[28px] md:text-[58px] font-bold leading-[2rem] md:leading-[4rem] mb-6'>Congrats, Jonatan Kristof! Your ticket is ready.</h1>
                <p className='text-paragraph text-[19px] md:text-[23px] leading-[1.5rem]'>We've emailed your ticket to jonatan@mail.com and will sned updates in the run up to the event.</p>
            </div>
            <div className='bg-bg-ticket bg-no-repeat w-[344px] h-[164px]'>
                <div className='mt-3 ml-4'>
                    <div className='flex text-left mb-5'>
                        <img src={logoMark} alt="logo mark" className='w-[30px] h-[30px] mr-3 mt-2' />
                        <div>
                            <h2 className='text-heading text-[22px] font-bold mb-1'>Coding Conf</h2>
                            <p className='text-paragraph text-[14px]'>Jan 31, 2025 / Austin, TX</p>
                        </div>
                    </div>
                    <div className='flex text-left'>
                        <img src={imageAvatar} alt="image avatar" className='w-[45px] h-[45px] mr-3 mt-2 rounded-lg' />
                        <div>
                            <h2 className='text-heading text-[18px] mt-2'>Jonatan Kristof</h2>
                            <div className='flex items-center'>
                                <img src={iconGitHub} alt="icon GitHub" className='w-[16px] h-[16px] mr-1'/>
                                <p className='text-paragraph text-[14px]'>@jonatankristof0101</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CongratsPage
