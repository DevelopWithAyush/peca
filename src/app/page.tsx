"use client";
import Carousel from "@/components/Carousel";
import MobileSlide1 from "@/components/Mobile/MobileSlide1";
import MobileSlide2 from "@/components/Mobile/MobileSlide2";
import MobileSlide3 from "@/components/Mobile/MobileSlide3";
import MobileSlide4 from "@/components/Mobile/MobileSlide4";
import MobileSlide5 from "@/components/Mobile/MobileSlide5";
import { AnimatePresence } from "motion/react";
export default function Home() {
  return (
    <main>
      {/* <Header/> */}
      <div className="lg:flex hidden flex-col items-start justify-start">
        <AnimatePresence>
          <Carousel />
        </AnimatePresence>
      </div>
      <div className="lg:hidden flex flex-col items-center relative  justify-center">
        <MobileSlide1 />
        <MobileSlide2 />
        <MobileSlide3 />
        <MobileSlide4 />
        <MobileSlide5 />
      </div>
    </main>
  );
}
