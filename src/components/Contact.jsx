import React from 'react'
import background from "../../public/bg1.png"
function Contact() {
  return (
    <div className='p-2 w-full'>
      <h1 className='font-bold text-3xl font-serif text-center'>Contact us</h1>
      <div className='h-96 bg-gray-500 w-full contact-main flex flex-col justify-center items-center'>
        <h1 className='text-xl text-white font-bold'>Welcome to</h1>
        <h1 className='text-4xl text-white font-bold'>HAPKIDO BOXING NATIONAL FEDERATION HARYANA</h1>
        <button class="cbutton m-8 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
        </svg>

  
  <div class="ctext m-5 font-medium ">
    contact us
  </div>

</button>
      </div>
    </div>
  )
}

export default Contact
