"use client"

import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import {Carousel} from "../components/Carousel"
import {slides} from "../data/crouseldata.json"
import LatestEvent from "../components/LatestEvent"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <span className="flex flex-col gap-5 justify-center items-center ">
      <div className="p-3"><Carousel data={slides}/></div>
      <LatestEvent/>
      <Contact/>
    </span>
  );
}
