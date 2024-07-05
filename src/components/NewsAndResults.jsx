import React from 'react'

function NewsAndResults() {
  return (
    <>
      <h1 className='font-bold text-3xl font-serif'>News and Results</h1>
    <div className='w-full flex justify-center items-center m-5  '>
      <div className="w-full h-full flex justify-center md:flex-row flex-col">
        <div className='md:w-1/3 h-full p-4'>
        <h1 className='font-bold text-2xl font-serif'>Latest news</h1>
        <ul className='list-disc p-2'>
            <li>6th South Asia Hapkido Boxing Championship at Nepal on August 2021.</li>
            <li>National General Body Meeting at Pondicherry on December 2021</li>
            <li>11th Hapkido Boxing National Championship at Chennai on December</li>
        </ul>
        </div>
        
        <div className='md:w-1/3 h-full p-4'>
        <h1 className='font-bold text-2xl font-serif'>Results</h1>
        <ul className='list-disc p-2'>
            <li>8th National Result 2019 Boys & Girls</li>
            <li>9th National Result 2020 Boys & Girls</li>
        </ul>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default NewsAndResults
