"use client"

import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import {Carousel} from "../components/Carousel"
// import Carousel2 from "../components/Carousel2"
import LatestEvent from "../components/LatestEvent"
import Contact from "../components/Contact"
import NewsAndResults from "../components/NewsAndResults"
import MemberSlider from "../components/MemberSlider"

export default function Home() {
 
  const slides =[
    {
      "src": "/images/image1.jpg",
      "alt": "Image 1 for carousel"
    },
    {
      "src": "/images/image2.jpg",
      "alt": "Image 2 for carousel"
    },
    {
      "src": "/images/image3.jpg",
      "alt": "Image 3 for carousel"
    },
    {
      "src": "/images/image4.jpg",
      "alt": "Image 3 for carousel"
    },
    {
      "src": "/images/image5.jpg",
      "alt": "Image 3 for carousel"
    },
    {
      "src": "/images/image6.jpg",
      "alt": "Image 3 for carousel"
    },
    {
      "src": "/images/image7.jpg",
      "alt": "Image 3 for carousel"
    },
    {
      "src": "/images/image8.jpg",
      "alt": "Image 3 for carousel"
    },
    
  ]
  return (
    <span className="flex flex-col gap-5 justify-center items-center ">
      <Carousel data={slides} />
      <LatestEvent/>
      <Contact/>
      <NewsAndResults/>
      <MemberSlider/>
    </span>
  );
}
