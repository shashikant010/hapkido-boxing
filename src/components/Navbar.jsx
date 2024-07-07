"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import logo from '../components/circle-logo.png'
import Link from 'next/link'
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle"
import PhoneNav from './PhoneNav'
const Navbar = () => {
  const logoref = useRef();
  const logoBackgroundRef = useRef();
  const [menuOpen,setMenuOpen]=useState(false)
  // hover:relative md:hover:scale-[3] hover:scale-[6] hover:top-[40vh] hover:left-[40vw] z-50 transition-all ease-in-out
  function growLogo(){
    console.log(logoref)
    logoref.current.className+="relative md:scale-[3] scale-[7] top-[40vh] left-[45vw] z-50 transition-all ease-in-out"
    logoBackgroundRef.current.className="absolute h-[100vh] w-screen bg-black bg-opacity-50 z-40 top-0 left-0 flex justify-end md:px-[30vw] px-[10vw] md:py-[20vh] py-[10vh] "
  }

  function hideLogo(){
    logoref.current.className="md:ml-20 size-12 md:size-28 "
    logoBackgroundRef.current.className="absolute h-[100vh] w-screen bg-black bg-opacity-50 z-40 top-0 left-0 justify-end md:px-[30vw] p-[10vw] py-[20vh] hidden"
  }
  return (
    <>
    <div className='navbar h-auto w-full  gap-0 flex justify-between items-center pt-1 pb-1'>
      <div className='absolute h-[100vh] w-screen bg-black bg-opacity-50 z-40 top-0 left-0 justify-end md:px-[30vw] px-[10vw] md:py-[20vh] hidden' ref={logoBackgroundRef}><span className='text-5xl text-white cursor-pointer ' onClick={hideLogo}>X</span></div>
      <Image src={logo} alt='logo' className='md:ml-20 size-12 md:size-28 ' ref={logoref} onClick={growLogo}/>
      <div className='text-center'>
        <strong className='md:text-3xl text-[10px] w-full'>HAPKIDO BOXING NATIONAL FEDERATION HARYANA</strong><br/>
        <p className='font-bold text-[8px] md:text-xs'>Affiliated - Hapkido boxing asia association </p>
        <p className='font-bold text-[8px] md:text-xs'>Member - Hapkido boxing international organisation</p>

      </div>
      <Image src={logo} alt='logo' className='md:mr-20 size-12 md:size-28 hidden md:block'/>
      <div className='md:hidden mr-2'>
      <input className="check-icon hidden" id="check-icon" name="check-icon" type="checkbox" checked={menuOpen}
      onChange={(e)=>{setMenuOpen(e.target.checked) 
        console.log(menuOpen)
    
      }}
      />
            <label className="icon-menu" htmlFor="check-icon">
                <div className="bar bar--1"></div>
                <div className="bar bar--2"></div>
                <div className="bar bar--3"></div>
            </label>
    </div>
    </div>
    <hr  className='h-[1.2px] bg-black' />
    {menuOpen&&
    <div >
       <div className='absolute w-full h-[100vh] z-30 md:hidden mobile-nav'>
      <ul className='flex justify-center items-center flex-col'>
        <li className='h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><ThemeToggle/></li>
        <Link href="/" className='h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center' onClick={()=>{setMenuOpen(false)}}><li className='  h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Home</p></li></Link>
        <Link href="/about" className='h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center' onClick={()=>{setMenuOpen(false)}}><li className='  h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>About</p></li></Link>
        <Link href="/member" className='h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center' onClick={()=>{setMenuOpen(false)}}><li className='  h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Members</p></li></Link>
        <Link href="/commission" className='h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center' onClick={()=>{setMenuOpen(false)}}><li className='  h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Commisions</p></li></Link>
        <Link href="/history" className='h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center' onClick={()=>{setMenuOpen(false)}}><li className='  h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>History</p></li></Link>
        <Link href="/news" className='h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center' onClick={()=>{setMenuOpen(false)}}><li className='  h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>News</p></li></Link>
        <Link href="/events" className='h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center' onClick={()=>{setMenuOpen(false)}}><li className='  h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Events</p></li></Link>
        <Link href="/refrees" className='h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center' onClick={()=>{setMenuOpen(false)}}><li className='  h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Refree list</p></li></Link>
        <Link href="/result" className='h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center' onClick={()=>{setMenuOpen(false)}}><li className='  h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Results</p></li></Link>
        <Link href="/rules" className='h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center' onClick={()=>{setMenuOpen(false)}}><li className='  h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Rules</p></li></Link>
        <Link href="/contact" className='h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center' onClick={()=>{setMenuOpen(false)}}><li className='  h-12 w-full text-center text-xl font-bold border border-black flex justify-center items-center'><p>Contacts</p></li></Link>
      </ul>
    </div>
      </div>}

    <div className='h-12 w-full  md:flex justify-center items-center hidden'>

      <ul className='md:flex gap-5 text-xl '>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/member"><li>Member</li></Link>
        <Link href="/commission"><li>Commission</li></Link>
        <Link href="/history"><li>History</li></Link>
        <Link href="/news"><li>News</li></Link>
        <Link href="/events"><li>Events</li></Link>
        <Link href="/refrees"><li>Refree list</li></Link>
        <Link href="/result"><li>Result</li></Link>
        <Link href="/rules"><li>Rules</li></Link>
        <Link href="/gallery"><li>Gallery</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
        <li><ThemeToggle/></li>
      </ul>

    </div>
    
    </>
  )
}

export default Navbar
