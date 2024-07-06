"use client"
import { useEffect } from 'react'


import Image from 'next/image'
import React from 'react'


function page() {
  useEffect(() => {
    document.title = "members | Hapkido";
  }, []);
  
  return (
    <div className='flex justify-center items-center flex-col'>
        <h1 className='p-6 rounded-full bg-blue-900 text-white md:text-3xl text-xl text-center font-bold w-1/2 m-2'>Members</h1>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-4 place-items-center m-4'>
            <Image src="/members-all/2.jpeg" width={300} height={300} alt="member1"/>
            <Image src="/members-all/3.jpeg" width={300} height={300} alt="member1"/>
            <Image src="/members-all/4.jpeg" width={300} height={300} alt="member1"/>
            <Image src="/members-all/5.jpeg" width={300} height={300} alt="member1"/>
            <Image src="/members-all/6.jpeg" width={300} height={300} alt="member1"/>
            <Image src="/members-all/7.jpeg" width={300} height={300} alt="member1"/>
            <Image src="/members-all/8.jpeg" width={300} height={300} alt="member1"/>
            <Image src="/members-all/9.jpeg" width={300} height={300} alt="member1"/>
            <Image src="/members-all/10.jpeg" width={300} height={300} alt="member1"/>
            <Image src="/members-all/12.jpeg" width={300} height={300} alt="member1"/>
            <Image src="/members-all/13.jpeg" width={300} height={300} alt="member1"/>
            <Image src="/members-all/14.jpeg" width={300} height={300} alt="member1"/>
        </div>
    </div>
  )
}

export default page
