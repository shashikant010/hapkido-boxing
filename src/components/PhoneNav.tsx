import React from 'react'
import ThemeToggle from "./ThemeToggle"
import Link from 'next/link'

function PhoneNav() {
  return (
    <div className='absolute w-full h-[100vh] z-30 bg-white md:hidden'>
      <ul className='flex justify-center items-center flex-col'>
        <li className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><ThemeToggle/></li>
        <Link href="/" className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><li className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Home</p></li></Link>
        <Link href="/about" className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><li className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>About</p></li></Link>
        <Link href="/members" className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><li className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Members</p></li></Link>
        <Link href="/commission" className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><li className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Commisions</p></li></Link>
        <Link href="/history" className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><li className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>History</p></li></Link>
        <Link href="/news" className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><li className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>News</p></li></Link>
        <Link href="/events" className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><li className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Events</p></li></Link>
        <Link href="/refrees" className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><li className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Refree list</p></li></Link>
        <Link href="/results" className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><li className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Results</p></li></Link>
        <Link href="/result" className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><li className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Rules</p></li></Link>
        <Link href="/contact" className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><li className='text-black h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Contacts</p></li></Link>
      </ul>
    </div>
  )
}

export default PhoneNav
