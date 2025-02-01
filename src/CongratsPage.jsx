import React from 'react'
import './App.css'
import ticketImg from './images/pattern-ticket.svg'

function CongratsPage(){
    return (
        <div className='flex flex-col justify-center items-center text-center w-[344px] md:w-[786px] mb-9 md:mb-12'>
            <div className='mb-[74px]'>
                <h1 className='text-heading text-[28px] md:text-[58px] font-bold leading-[2rem] md:leading-[4rem] mb-6'>Congrats, Jonatan Kristof! Your ticket is ready.</h1>
                <p className='text-paragraph text-[19px] md:text-[23px] leading-[1.5rem]'>We've emailed your ticket to jonatan@mail.com and will sned updates in the run up to the event.</p>
            </div>
            <div>
                <img src={ticketImg} alt="ticket" className="w-[344px] h-[160px] md:w-[209px] md:h-[30px] mb-48 md:mb-[62px]"></img>
            </div>
        </div>
    )
}

export default CongratsPage
