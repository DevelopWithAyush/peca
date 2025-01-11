import {
  Slide2BackgroundSvg,
  Slide2Mobile1Svg,
  Slide2Mobile2Svg,
} from "@/assets/Svg";
import React from "react";

const MobileSlide2 = () => {
  return (
    <section className="flex flex-col z-10 bg-[#F7E4AB]  items-center w-full h-[1100px] overflow-hidden relative  justify-center">
      {/* <div className='absolute top-0  w-full h-full'> */}
      <Slide2BackgroundSvg className="" />
      {/* </div> */}
      <main className="w-full flex h-full flex-col items-center justify-normal p-5 ">
        <FirstPoster />
        <SecondPoster />
        <ThirdPoster /> 
      </main>
    </section>
  );
};

export default MobileSlide2;

const FirstPoster = () => {
  return (
    <div className="w-full relative z-10 rounded-[32px] p-5 flex flex-col bg-[#FFF] items-center justify-start gap-2">
      <img src="/Images/slide2.png" alt="" />
      <p
        className="
            text-[40px]
            font-jolly-lodger_400
            leading-[47px]
            tracking-[4px]
            text-[#FFBA70] "
        style={{
          WebkitTextStrokeWidth: "3px",
          WebkitTextStrokeColor: "#F12E05",
          paintOrder: "stroke fill",
        }}
      >
        PEPIUS CAESER{" "}
      </p>
      <p className="text-[16px] text-[#AC341B] leading-[160%] tracking-[2.88px] text-center text-balance font-modern-antiqua_400 ">
        ON HIS WAY TO MAKE THE SUPERDAPP WITH THE SUPPORT OF THE WHOLE KINGDOM
      </p>
    </div>
  );
};

const SecondPoster = () => {
  return (
    <div className="relative z-10 w-auto ">
      <p
        className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[80%]
            text-center
            leading-[110%]
            text-[20px]
            text-[#FFBA70]
            font-jolly-lodger_400
            tracking-[2px]
            "
        style={{
          WebkitTextStrokeColor: "#F12E05",
          WebkitTextStrokeWidth: "2px",
          paintOrder: "stroke fill",
        }}
      >
        NOW, CAESAR’S FIRST ORDER OF BUSINESS IS TO REPAY THE MEN WHO GIVE HIM
        POWER TO BUILD SUPADAPP BY CONTRIBUTING TO THE PRESALE
      </p>
      <Slide2Mobile1Svg />
    </div>
  );
};
const ThirdPoster = () => {
  return (
    <div className="relative z-10 w-auto ">
      <p
        className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[80%]
            text-center
            leading-[110%]
            text-[20px]
            text-[#FFBA70]
            font-jolly-lodger_400
            tracking-[2px]
            "
        style={{
          WebkitTextStrokeColor: "#F12E05",
          WebkitTextStrokeWidth: "2px",
          paintOrder: "stroke fill",
        }}
      >
        THEREFORE THEY GET $PECA CURRENCY AT A HIGHLY DISCOUNTED RATE AND WITH
        MASSIVE STAKING REWARDS DURING PRESALE{" "}
      </p>
      <Slide2Mobile2Svg />
    </div>
  );
};
