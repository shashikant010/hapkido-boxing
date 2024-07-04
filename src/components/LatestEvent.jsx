import React from 'react'
import {events} from "../data/latestEvent.json"
import Image from 'next/image'

function LatestEvent() {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='font-extrabold text-3xl font-serif p-3'>Latest event</h1>
      <div className='grid grid-cols-4 gap-3 group'>
        <Image src={events[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
        <Image src={events[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
        <Image src={events[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
        <Image src={events[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
        <Image src={events[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
        <Image src={events[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
        <Image src={events[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
        <Image src={events[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
      </div>
    </div>
  )
}

export default LatestEvent
