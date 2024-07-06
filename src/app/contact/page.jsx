"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Textarea } from '@nextui-org/react';

function page() {
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
    <div className='h-full flex justify-center bg-[url("/contact.png")] bg-contain '>
      <div className="left flex justify-center items-center flex-col">
        
            <div className='flex justify-center items-center flex-col gap-8 m-4 border border-black p-10 bg-gray-200  rounded-2xl'>
            <h1 className='text-2xl font-bold text-pink-800'>GET IN TOUCH</h1>
            <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="text" name="" id="" placeholder='Enter your message ' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
              <button className='bg-purple-300 px-7  py-3 font-bold rounded text-black' onClick={sendEmail}>Submit</button>
                </div>
                <div className='grid md:grid-cols-1 '>
            <h1 className='bg-red-400 p-4 rounded-full font-bold mx-6 my-4'>Email us Now On : Naveendahiya1995@gmail.com</h1>
            <h1 className='bg-red-400 p-4 rounded-full font-bold mx-6 mb-7'>Call us Now On : 9050051475</h1>
        </div>
            
      </div>
      <div className="right hidden ">
    <Image src="/contact.png" alt="contact" height={400} width={400}/>
      </div>
    </div>
  )
}

export default page
