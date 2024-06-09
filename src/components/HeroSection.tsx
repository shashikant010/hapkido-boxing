import Image from 'next/image';
import red from "./red.png"
import blue from "./blue.png"
import { useEffect, useState } from 'react';
const HeroSection = () => {
  const imageWidth=100;
  const [count,setCount]=useState(3)
  const [redImageProperties,setRedImageProperties]=useState("left-auto")
  const [blueImageProperties,setBlueImageProperties]=useState("left-auto")

useEffect(()=>{
  const come =  setTimeout(()=>{
    setRedImageProperties("translate-x-[30vw]")
    setBlueImageProperties("-translate-x-[30vw]")
  },4000)
},[])

  useEffect(()=>{
    if(count>0){
      const countdown = setInterval(()=>{
        setCount(count-1)
      },1000)
    return ()=>clearInterval(countdown)
    }
  })


  return (
    <div className='h-[100vh] w-[100vw] flex flex-col justify-center items-center bg-black absolute overflow-hidden'>
      <h1 className={`text-9xl ${count===0?"hidden":"block"} text-white`}>{count}</h1>
      <h1 className={`md:text-6xl text-white text-2xl md:left-auto animate-[ping_1s_ease-in-out_1_forwards_reverse] relative ${count===0?"block":"hidden"}`}>Welcme to Hapkido Boxing ,HR</h1> 
      <div className={`images flex border border-green-50 justify-between w-full items-center`}>
        <Image
        src={red}
        alt="Red Image"
        width={imageWidth}
        priority
        className={"h-auto relative self-start red transition-all ease-linear rotate-6 "+redImageProperties}
      />
      <Image
        src={blue}
        alt="blue Image"
        width={imageWidth}
        priority
        className={"h-auto relative self-end red transition-all ease-linear -rotate-6 "+blueImageProperties}
      /></div>
    </div>
  );
};

export default HeroSection;
