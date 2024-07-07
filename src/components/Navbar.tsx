"use client"
import React from 'react'
import Image from 'next/image'
import logo from '../components/circle-logo.png'
import Link from 'next/link'
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle"
import PhoneNav from './PhoneNav'
const Navbar = () => {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <>
    <div className='navbar h-auto w-full  gap-0 flex justify-between items-center pt-1 pb-1'>
      <Image src={logo} alt='logo' className='md:ml-20 size-12 md:size-28'/>
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
