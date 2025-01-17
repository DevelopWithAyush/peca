"use client";
import Carousel from "@/components/Carousel";
import MobileSlide1 from "@/components/Mobile/MobileSlide1";
import MobileSlide2 from "@/components/Mobile/MobileSlide2";
import MobileSlide3 from "@/components/Mobile/MobileSlide3";
import MobileSlide4 from "@/components/Mobile/MobileSlide4";
import MobileSlide5 from "@/components/Mobile/MobileSlide5";
import { AnimatePresence } from "motion/react";
import { useEffect } from "react";
export default function Home() {
  // const [isMute,setIsMute] = useState(false)

  const playSound = () => {
    const audio = new Audio('/Sound/royal.mp3'); // Correct path to the audio file
    audio.muted = true; // Mute initially to allow autoplay in some browsers
    audio.play()
      .then(() => {
        audio.muted = false; // Unmute after autoplay starts
      })
      .catch((error) => {
        console.error("Autoplay failed, waiting for user interaction", error);
      });
  };

  useEffect(() => {
    playSound(); // Attempt to play on page load

    const handleUserInteraction = () => {
      playSound(); // Play on first interaction if autoplay failed
      window.removeEventListener('mouseenter', handleUserInteraction);
    };

    window.addEventListener('mouseenter', handleUserInteraction);

    return () => {
      window.removeEventListener('mouseenter', handleUserInteraction);
    };
  }, []);
  return (
    <main>
      {/* <button onClick={() => {
        playSound();
      }}> button</button> */}
      {/* <Header/> */}
      <div className="lg:flex hidden flex-col items-start justify-start">
        <AnimatePresence>
          <Carousel  />
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
