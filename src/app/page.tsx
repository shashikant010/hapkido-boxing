"use client"

import HeroSection from "@/components/HeroSection";
import Image from "next/image";
// import {Carousel} from "../components/Carousel"
import {EmblaCarousel} from "../components/Carousel2"
import LatestEvent from "../components/LatestEvent"
import Contact from "../components/Contact"
import NewsAndResults from "../components/NewsAndResults"
import MemberSlider from "../components/MemberSlider"

export default function Home() {
 
  
  return (
    <span className="flex flex-col gap-5 justify-center items-center ">
      <EmblaCarousel />
      <LatestEvent/>
      <Contact/>
      <NewsAndResults/>
      <MemberSlider/>
    </span>
  );
}
