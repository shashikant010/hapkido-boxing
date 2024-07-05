import React from 'react'
import Image from 'next/image'

function LatestEvent() {
  const eventphotos=[
    "https://picsum.photos/seed/img1/600/400","https://picsum.photos/seed/img1/600/400","https://picsum.photos/seed/img1/600/400"
]
  return (
    <>
    <div className='flex flex-col justify-center items-center text-center'>
      <h1 className='font-extrabold text-3xl font-serif p-3'>Latest event</h1>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-3 group m-2'>
        <Image src={eventphotos[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
        <Image src={eventphotos[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
        <Image src={eventphotos[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
        <Image src={eventphotos[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
        <Image src={eventphotos[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
        <Image src={eventphotos[0]} alt="image" width={300} height={200} className='opacity-80 hover:opacity-100'/>
        
      </div>
      
    </div>
  

    </>
  )
}

export default LatestEvent
