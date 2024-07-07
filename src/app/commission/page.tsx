"use client"
import { useEffect } from 'react'
import Image from 'next/image'
import React from 'react'

function Page() {
  useEffect(() => {
    document.title = "commissions | Hapkido";
  }, []);
  return (
    <div className='flex justify-center items-center flex-col'>
        <h1 className='p-6 rounded-full bg-blue-900 text-white md:text-3xl text-xl text-center font-bold w-1/2 m-2'>Commissions</h1>
        <div className='self-start'>
        
        <p className='p-3 m-2'>Stay tuned for commisions....</p></div>
    </div>
  )
}

export default Page
