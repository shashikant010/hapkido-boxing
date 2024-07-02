"use client"

import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import {Carousel} from "../components/Carousel"
import {slides} from "../data/crouseldata.json"
export default function Home() {
  return (
    <span className="flex justify-center items-center p-10">
      <Carousel data={slides}/>
    </span>
  );
}
