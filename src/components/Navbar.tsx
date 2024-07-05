import React from 'react'
import Image from 'next/image'
import logo from '../components/circle-logo.png'

const Navbar = () => {
  return (
    <>
    <div className='navbar h-auto w-full  gap-0 flex justify-between items-center pt-1 pb-1'>
      <Image src={logo} alt='logo' className='md:ml-20 size-12 md:size-28'/>
      <div className='text-center'>
        <strong className='md:text-3xl text-[10px] w-full'>HAPKIDO BOXING NATIONAL FEDERATION HARYANA</strong><br/>
        <p className='font-bold text-[8px] md:text-xs'>Affiliated - Hapkido boxing asia association </p>
        <p className='font-bold text-[8px] md:text-xs'>Member - Hapkido boxing international organisation</p>

      </div>
      <Image src={logo} alt='logo' className='md:ml-20 size-12 md:size-28'/>
    </div>
    <hr  className='h-[1.2px] bg-black' />
    <div className='h-12 w-full  md:flex justify-center items-center hidden'>

      <ul className='md:flex gap-5 text-xl text-gray-400'>
        <li className='active'>Home</li>
        <li>About</li>
        <li>Member</li>
        <li>Commission</li>
        <li>History</li>
        <li>News</li>
        <li>Events</li>
        <li>Refree list</li>
        <li>Result</li>
        <li>Rules</li>
        <li>Gallery</li>
      </ul>

    </div>
    </>
  )
}

export default Navbar
