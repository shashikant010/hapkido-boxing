"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Textarea } from '@nextui-org/react';
import Link from 'next/link';

function Page() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const toEmail="Naveendahiya1995@gmail.com"
    async function sendEmail(){
        console.log("sending email")
       try {
         if(!name || !email || !message){
             alert("please fill all fields")
             return
         }
         const data={name,email,message,toEmail}
         const response= await fetch("https://profile-backend-6tw2.onrender.com/send-mail",
     {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify(data)
 
     }).catch((error)=>{
        alert("There was some error in sending mail")
     })
     if(response){
         alert("Thanks for Contacting us ! I will response You soon")
         setEmail("")
         setMessage("")
         setName("")
 
     }
       } catch (error) {
        alert("There was some error in sending mail")
       }
    }
  

  return (
    <div className='h-full flex justify-center bg-[url("/contact.png")] bg-contain contact-background'>
      <div className="left flex justify-center items-center flex-col p-16">
        
            <div className='flex justify-center items-center flex-col gap-8 border border-black md:p-12 p-6 bg-gray-200  rounded-2xl contact-section'>
            <h1 className='text-2xl font-bold font-mono'>GET IN TOUCH</h1>
            <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>{setName(e.target.value)}} className='text-black bg-transparent border-t-0 border-l-0 border-r-0 border-b-black focus:outline-none'/>
            <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='text-black bg-transparent  border-t-0 border-l-0 border-r-0 border-b-black focus:outline-none'/>
            <input type="text" name="" id="" placeholder='Enter your message ' value={message} onChange={(e)=>{setMessage(e.target.value)}} className='text-black bg-transparent border-t-0 border-l-0 border-r-0 border-b-black focus:outline-none'/>
              <button className='bg-purple-300 px-7  py-3 font-bold rounded text-black' onClick={sendEmail}>Submit</button>
                </div>
                <div className='grid md:grid-cols-1 '>
            <h1 className='extra-contacts p-4 rounded-full font-bold mx-6 my-4'>Email us Now On : Naveendahiya1995@gmail.com</h1>
            <h1 className='extra-contacts p-4 rounded-full font-bold mx-6 mb-7'>Call us Now On : 9050051475</h1>
            <Link href="https://maps.app.goo.gl/NpYKwD2MQBBSPXTS9" target='blanck'><h1 className='extra-contacts p-4 rounded-full font-bold mx-6 mb-7 flex'>Vpo bhatgaon stadium sonipat haryana india <div className='flex justify-center items-center flex-col'><Image src="/map.svg" alt="map" width={100} height={100} className='h-8 w-8'/>
            <p className='text-[8px]'>click to open in map</p></div></h1></Link>
        </div>
            
      </div>
      <div className="right hidden ">
    <Image src="/contact.png" alt="contact" height={400} width={400}/>
      </div>
    </div>
  )
}

export default Page
