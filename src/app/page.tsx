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
      "src": "https://picsum.photos/seed/img1/600/400",
      "alt": "Image 1 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img2/600/400",
      "alt": "Image 2 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img3/600/400",
      "alt": "Image 3 for carousel"
    },
    // {
    //   "src": "https://picsum.photos/seed/img1/600/400",
    //   "alt": "Image 1 for carousel"
    // },
    // {
    //   "src": "https://picsum.photos/seed/img2/600/400",
    //   "alt": "Image 2 for carousel"
    // },  
    // {
    //   "src": "https://picsum.photos/seed/img3/600/400",
    //   "alt": "Image 3 for carousel"
    // }
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
