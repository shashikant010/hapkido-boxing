"use client"
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { useEffect } from 'react'



function page() {
  useEffect(() => {
    document.title = "About Us | Hapkido ";
  }, []);
  return (
    <>
    
    <div className='flex justify-center items-center flex-col '>
      <h1 className='md:text-3xl  font-bold bg-orange-300 p-3 rounded-full font-serif m-2 text-black'>ABOUT HAPKIDO</h1>
      <div className='self-start'>
        <h2 className='text-left p-3 m-2 bg-yellow-100 md:text-2xl rounded-full font-bold font-serif underline text-black'>HBIO GOVERNING BODY</h2>
        <p className='p-3 m-2'>Hapkido Boxing International Organization is world governing Body with 47 Members Countries
            around the world. It is one of the largest and well- disciplined organization in the world. Hapkido
            Boxing International Organization was formed in early 2008.is the only Ilapkido Boxing
            oroanization recognized, The Ilapkido Boxing International organization is an
            international organization of Ilapkido Boxing. HBIOs rules are based on dernocratic
            principles and are forming the Governing body of the sport that is officially registered in
            Hong kong. H BIO is created to develop support and governin«v at an amateur level in
            addition to holding world championship events, IIBIO Sanctions the Championship of
            Ilapkido Boxing. IIBIO is Sanctions its own National Federations and has its own
            requirements. as of now, the global rnembership of IIBIO stand at 47 National
            Federation Members, spanning five continents.</p>
           
            <h2 className='text-left p-3 m-2 bg-yellow-100 md:text-2xl rounded-full font-bold font-serif underline text-black'>
              SEVEN CONTINENT FEDERATION
            </h2>
           
              <ol className='list-decimal p-6 m-2 ml-4'>
               <li>African Hapkido Boxing Federation (AllBF) 05 National Members Federation</li>
               <li>Asian Ilapkido Boxing Association (All IBA) 17 National Members Federations</li>
               <li>European Ilapkido Boxing Association (EIIBA) 13 National Mernbers Federations</li>
               <li>Central America Hapkido Boxing Federation (CAHBF) 06 National Mem bers Federations</li>
               <li>Oceanian Hapkido Boxing Federation (OHBF) 01 National Members Federations</li>
               <li>Ilapkido Boxing North America Federation (IIBNAF) 02 National Members Federation</li>
               <li>Ilapkido Boxing South Arnerica Federation (IIBSAF) 03 National Members Federation</li>
               </ol>
              


            <h2 className='text-left p-3 m-2 bg-yellow-100 text-2xl rounded-full font-bold font-serif underline'>

            </h2>
              <p className='p-3 m-2'>
              HBIO hold a world Championship every 2 years, with youth and adult championship in
              separate years; only national tearns are accepted . each metnber country can present only
              one competitor in each weight category. competitors are cornmonly the national
              charnpion of their weight category in that particular Hapkido Bo.xing Style and rnany are
              also officially recognized by their continents Federation.
              </p>
      </div>
              <Image src="/hapkido-flow-chart.png" alt="flow chart" width={1000} height={1000}/>
              <p className='p-3 m-2'>
              HBIO supports 5 different styles : 1 of thern on the Mat / Tatami and of them are in the
ring .
              </p>
    </div>
    </>
  )
}

export default page
