import React from 'react'
import Image from 'next/image'
import logo from '../components/circle-logo.png'

const Navbar = () => {
  return (
    <>
    <div className='navbar h-24 w-full bg-teal-100 flex justify-between items-center'>
      <Image src={logo} alt='logo' height={100} className='ml-20'/>
      <div className='text-center'>
        <strong className='text-3xl'>HAPKIDO BOXING NATIONAL FEDERATION HARYANA</strong><br/>
        <p className='font-bold'>Affiliated - Hapkido boxing asia association </p>
        <p className='font-bold'>Member - Hapkido boxing international organisation</p>

      </div>
      <Image src={logo} alt='logo' height={100} className='mr-20'/>
    </div>
    <div className='h-12 w-full bg-teal-100 flex justify-center items-center'>

      <ul className='flex gap-5 text-xl text-gray-400 '>
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
