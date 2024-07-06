"use client"
import React from 'react'
import Image from 'next/image'
import logo from '../components/circle-logo.png'
import Link from 'next/link'
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle"
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
      <Image src={logo} alt='logo' className='md:mr-20 size-12 md:size-28'/>
    </div>
    <hr  className='h-[1.2px] bg-black' />
    <div className='h-12 w-full  md:flex justify-center items-center hidden'>

      <ul className='md:flex gap-5 text-xl text-gray-400'>
        <Link href="/">
          <li className='active'>Home</li>
        </Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/member"><li>Member</li></Link>
        <Link href="/commission"><li>Commission</li></Link>
        <Link href="/history"><li>History</li></Link>
        <Link href="/news"><li>News</li></Link>
        <Link href="/events"><li>Events</li></Link>
        <Link href="/refreelist"><li>Refree list</li></Link>
        <Link href="/result"><li>Result</li></Link>
        <Link href="/rules"><li>Rules</li></Link>
        <Link href="/gallery"><li>Gallery</li></Link>
        <li><ThemeToggle/></li>
      </ul>

    </div>
    
    </>
  )
}

export default Navbar
