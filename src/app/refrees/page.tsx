
"use client"
import { useEffect } from 'react'
import Image from 'next/image'
import React from 'react'

function page() {
  useEffect(() => {
    document.title = "refrees | Hapkido";
  }, []);
  return (
    <div className='flex justify-center items-center flex-col'>
        <h1 className='p-6 rounded-full bg-blue-900 text-white md:text-3xl text-xl text-center font-bold w-1/2 m-2'>Refree List</h1>
        <div className='grid grid-cols-1  place-items-center m-4'>
            <Image src="/refrees/20.jpg" width={1000} height={1000} alt="refree"/>
            <Image src="/refrees/21.jpg" width={1000} height={1000} alt="refree"/>
            <Image src="/refrees/22.jpg" width={1000} height={1000} alt="refree"/>
            <Image src="/refrees/23.jpg" width={1000} height={1000} alt="refree"/>
    
        </div>
    </div>
  )
}

export default page
