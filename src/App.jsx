import React, { useState } from 'react'
import './App.css'
import logoFull from './images/logo-full.svg'

function App() {

  return (
    <div className='flex flex-col min-h-screen justify-center items-center  bg-bg-mobile bg-no-repeat text-[60px] text-red-500'>
      <div className='flex flex-col justify-center items-center text-center'>
        <img className="w-[166px] h-[24px]" src={logoFull} alt="logo"></img>
        <h1 className='text-heading text-[28px] font-bold leading-[2rem]'>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p className='text-paragraph text-[19px] leading-[1.5rem]'>Secure your spot at next year's biggest coding conference.</p>
      </div>
    </div>
  )
}

export default App
