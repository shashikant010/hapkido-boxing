"use client"
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  useEffect(() => {
    document.title = "rules | Hapkido";
  }, []);
  return (
    <div className='flex justify-center items-center flex-col'>
        <h1 className='p-6 rounded-full bg-blue-900 text-white md:text-3xl text-xl text-center font-bold w-1/2 m-2'>Rules</h1>
        <div className='self-center'>
        
        <h2 className='text-center p-3 m-2 bg-yellow-100 md:text-2xl rounded-full font-bold font-serif underline text-black '>
              Yudo rules
            </h2>
           
              <ol className='list-decimal p-6 m-2 ml-4'>
               <Link href="/pdfs/hbio-rules.pdf" download><li className='font-bold'>Click here to download HBIO rules</li></Link>
               <Link href="/pdfs/pro-championship-rules.pdf" download><li className='font-bold'>Click here to download Pro championship rules</li></Link>
               <Link href="/pdfs/yudo-musical-forms-rules.pdf" download><li className='font-bold'>Click here to download yudo musical form rules</li></Link>
               
               </ol>
        </div>
    </div>
  )
}

export default page
