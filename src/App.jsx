import React, { useState } from 'react'
import './App.css'
import logoFull from './images/logo-full.svg'
import iconUpload from './images/icon-upload.svg'
import iconInfo from './images/icon-info.svg'

function App() {

  return (
    <div className='flex flex-col min-h-screen justify-center items-center  bg-bg-mobile bg-no-repeat text-[60px] text-red-500'>
      <div className='flex flex-col justify-center items-center text-center w-[344px] mb-10'>
        <img src={logoFull} alt="logo" className="w-[166px] h-[24px] mb-10"></img>
        <h1 className='text-heading text-[28px] font-bold leading-[2rem] mb-5'>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p className='text-paragraph text-[19px] leading-[1.5rem]'>Secure your spot at next year's biggest coding conference.</p>
      </div>
      <div className='flex flex-col justify-center w-[344px]'>
        <h2 className='text-heading text-[19px] text-left mb-2'>Upload Avatar</h2>
        <div className='flex flex-col justify-center items-center rounded-lg bg-bg-box bg-opacity-30 w-full h-[126px] border-[2px] border-paragraph border-dashed mb-3'>
          <div className='flex justify-center items-center rounded-lg bg-bg-box w-[50px] h-[50px] border-border-box bg-opacity-25 border-[1px] mb-3.5'>
            <img src={iconUpload} alt="upload" className='w-[29px] h-[29px]'/>
          </div>
          <p className='text-paragraph text-[18px]'>Drag and drop or click to upload</p>
        </div>
        <div className='flex'>
          <img src={iconInfo} alt="info" className='w-[17px] h-[17px] mr-2'/>
          <p className='text-paragraph text-[12px]'>Upload your photo &#40;JPG or PNG max size 500KB&#41;.</p>
        </div>
      </div>
    </div>
  )
}

export default App
