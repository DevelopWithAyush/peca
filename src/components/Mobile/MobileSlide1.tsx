import {
  MobileViewSlide1Svg,
  MobileViewSlide2Svg,
  MobileViewSlide3Svg,
  MobileViewSlide4Svg,
  Slide1Background,
} from "@/assets/Svg";
import { motion } from "motion/react";
import Header from "../common/Header";
import { BorderLine } from "../Slides/Slide1";
const MobileSlide1 = () => {
  return (
    <section className="flex flex-col items-center w-full h-[1000px] pt-[20px] overflow-hidden relative  justify-center">
      <Slide1Background className="h-[1000px] -top-[26px] z-0" />
        <Header />
        <BorderLine />
      <main className="w-full max-w-[500px] flex h-full flex-col items-start justify-normal pt-5 ">
        <FirstPoster />
        <SecondPoster />
        <ThirdPoster />
      </main>
    </section>
  );
};

export default MobileSlide1;

const FirstPoster = () => {
  return (
    <div className="w-fullh-auto relative top-[-60px] z-10 flex flex-col items-start justify-center">
      <img
        src="/Images/firstpageImage1.png"
        alt=""
        className="w-[187px] h-[190px] z-0 relative top-[40px]"
      />
      <div className="relative w-auto  left-[20px] ">
        <p
          className=" absolute w-[70%] text-center text-balance
        
         text-[#FFBA70]
         font-jolly-lodger_400
          text-[17px]
           -rotate-[3.299deg]
            top-1/2
             left-1/2
              -translate-x-1/2
              -translate-y-1/2
              leading-[110%]
              
               "
          style={{
            WebkitTextStrokeWidth: "1.5px",
            WebkitTextStrokeColor: "#F12E05",
            paintOrder: "stroke fill",
          }}
        >
          PEPIUS CAESER : <br /> THE RIGHT HAND OF ELON’S KEKIUS MAXIMUS
        </p>
        <MobileViewSlide1Svg />
      </div>
    </div>
  );
};

const SecondPoster = () => {
  return (
    <div className="w-full flex relative top-[-40px] flex-col items-center justify-center">
      <div className="flex flex-col w-auto items-center justify-center relative z-10">
        <p
          className="text-[#FFF566]
         w-[60%]
          text-[20px]
           font-jolly-lodger_400
            -translate-x-1/2
             -translate-y-1/2
             absolute top-1/2
              left-1/2
              leading-[110%]
              text-center 
              text-balance
              "
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#F12E05",
            paintOrder: "stroke fill",
          }}
        >
          MASSIVE STAKING REWARDS DURING PRESALE
        </p>
        <MobileViewSlide2Svg />
      </div>
    </div>
  );
};

const ThirdPoster = () => {
  return (
    <div className="w-full relative z-10 top-[-70px] flex flex-row items-center justify-center">
      <div className="w-full flex flex-col items-center  justify-center relative left-[20px]">
        <motion.p
          className="text-[#079307] relative top-[-30px]  z-20  -rotate-[12deg] font-space-comics_400 text-[18px] lg:text-[48px] tracking-[4.32px]  "
          style={{
            WebkitTextStrokeWidth: "3px",
            WebkitTextStrokeColor: "#FFF566 ",
            paintOrder: "stroke fill",
          }}
        >
          PEPIUS <br />
          CAESER
        </motion.p>

        <MobileViewSlide3Svg />
      </div>
      <div className="relative left-[-40px] flex flex-col items-center justify-center w-auto ">
        <div className="flex flex-col items-center">
          <img
            src="/Images/firstpageImage3.png"
            className="w-[132px] aspect-square relative top-[40px]"
            alt=""
          />
          <MobileViewSlide4Svg className="relative " />
        </div>
        <button
          className="text-[20px]
         font-jolly-lodger_400
          tracking-[1.2px]
           px-4
            py-2
             text-[#FFF566]
              bg-[#079307]
               border-[4px]
               border-solid
                border-[#FFF566]
                rounded-[12px]
                relative 
                top-[-10px]
                left-[15px]
                
                 "
          style={{
            WebkitTextStrokeWidth: "3px",
            WebkitTextStrokeColor: "#F12E05",
            paintOrder: "stroke fill",
          }}
        >
          BUY $PECA !
        </button>
      </div>
    </div>
  );
};
