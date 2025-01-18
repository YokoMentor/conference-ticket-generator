import React, { useState } from 'react'
import './App.css'
import logoFull from './images/logo-full.svg'
import iconUpload from './images/icon-upload.svg'
import iconInfo from './images/icon-info.svg'

function App() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setEmailError(false);
    validateEmail(email);
  }

  function handleEmailChange(event){
    event.preventDefault();
    setEmail(event.target.value);
  }

  function validateEmail(value) {
    if (value.length == 0 || !isEmailValid(value)) {
      setEmailError(true);
    }
  }

  function isEmailValid(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email); 
  }

  return (
    <div className='flex flex-col min-h-screen justify-center items-center bg-bg-mobile md:bg-bg-desktop bg-no-repeat text-[60px] text-red-500'>
      <div className='flex flex-col justify-center items-center text-center w-[344px] md:w-[786px] mb-9 md:mb-12 mt-7 md:mt-10'>
        <img src={logoFull} alt="logo" className="w-[166px] h-[24px] md:w-[209px] md:h-[30px] mb-10 md:mb-[62px]"></img>
        <h1 className='text-heading text-[28px] md:text-[58px] font-bold leading-[2rem] md:leading-[4rem] mb-6'>Your Journey to Coding Conf 2025 Starts Here!</h1>
        <p className='text-paragraph text-[19px] md:text-[23px] leading-[1.5rem]'>Secure your spot at next year's biggest coding conference.</p>
      </div>
      <div className='flex flex-col justify-center w-[344px] md:w-[460px]'>
        <h2 className='text-heading text-[19px] text-left mb-2.5'>Upload Avatar</h2>
        <div className='flex flex-col justify-center items-center rounded-lg bg-bg-box bg-opacity-30 w-full h-[126px] border-[1px] border-border-box border-dashed mb-3'>
          <div className='flex justify-center items-center rounded-lg bg-bg-box w-[50px] h-[50px] border-border-box bg-opacity-25 border-[1px] mb-4 mt-1'>
            <img src={iconUpload} alt="upload" className='w-[29px] h-[29px]'/>
          </div>
          <p className='text-paragraph text-[18px]'>Drag and drop or click to upload</p>
        </div>
        <div className='flex'>
          <img src={iconInfo} alt="info" className='w-[17px] h-[17px] mr-2'/>
          <p className='text-paragraph text-[12px]'>Upload your photo &#40;JPG or PNG, max size: 500KB&#41;.</p>
        </div>
      </div>
      <form className='mt-5' onSubmit={handleSubmit}>
        <div className='flex flex-col w-[344px] md:w-[460px]'>
          <label htmlFor="name" className='text-heading text-[19px] mb-2'>Full Name</label>
          <input type="text" id="name" className='w-full h-[54px] rounded-xl bg-bg-box bg-opacity-30 border-[1px] border-border-box border-solid'/>
          <label htmlFor="email" className='text-heading text-[19px] mb-2 mt-6'>Email Address</label>
          <input type="text" id="email" placeholder='example@email.com'
            className='w-full  h-[54px] rounded-xl bg-bg-box bg-opacity-30 border-[1px] border-border-box border-solid text-[18px] text-paragraph pl-4' 
            onChange={handleEmailChange}/>
            {emailError && <div className='flex text-error text-[16px]'><img src={iconInfo} alt="Email error" className='mr-2 fill-error'/><p>Please enter a valid email address.</p></div>}
          <label htmlFor="username" className='text-heading text-[19px] mb-2 mt-6'>GitHub Username</label>
          <input type="text" id="username" placeholder='@yourusername' className='w-full md:w-[460px] h-[54px] rounded-xl bg-bg-box bg-opacity-30 border-[1px] border-border-box border-solid text-[18px] text-paragraph pl-4'/>
          <input type="submit" value="Generate My Ticket" className='w-full h-[54px] rounded-xl bg-btn text-[20px] text-btn-txt font-extrabold mt-6 mb-28'/>
        </div>
      </form>
    </div>
  )
}

export default App
