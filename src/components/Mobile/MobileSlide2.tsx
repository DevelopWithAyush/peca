import {
  Slide2BackgroundSvg,
  Slide2Mobile1Svg,
  Slide2Mobile2Svg,
} from "@/assets/Svg";
import React from "react";
import Image from "next/image";
import TextGeneration from "../common/TextGeneration";

const MobileSlide2 = () => {
  return (
    <section className="flex flex-col z-10 bg-[#F7E4AB] items-center w-full h-auto overflow-hidden relative justify-center">
      <Slide2BackgroundSvg className="" />
      <main className="w-full max-w-[500px] flex h-full flex-col items-center justify-normal p-5 ">
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
    <div className="w-full relative z-10 rounded-[32px] p-5 flex flex-col bg-[#FFF] items-center justify-start gap-4">
      <Image
        src="/Images/slide2.png"
        alt=""
        width={500} // Specify width
        height={300} // Specify height
        className=""
      />
      <p
        className="text-[40px] font-jolly-lodger_400 leading-[47px] tracking-[4px] text-[#FFBA70]"
        style={{
          WebkitTextStrokeWidth: "6px",
          WebkitTextStrokeColor: "#F12E05",
          paintOrder: "stroke fill",
        }}
      >
        PEPIUS CAESER{" "}
      </p>
      <p
        className="text-[16px] text-[#AC341B] leading-[160%] tracking-[2.88px] text-center text-balance font-modern-antiqua_400 "
        style={{
          WebkitTextStrokeColor: "#FFBA70",
          WebkitTextStrokeWidth: "2px",
          paintOrder: "stroke fill",
        }}
      >
        ON HIS WAY TO MAKE THE SUPERDAPP WITH THE SUPPORT OF THE WHOLE KINGDOM
      </p>
    </div>
  );
};

const SecondPoster = () => {
  return (
    <div className="relative z-10 w-full   ">
      <p
        className="absolute z-20  h-auto top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2  w-[80%]  text-center leading-[110%] text-[20px] text-[#FFBA70] font-jolly-lodger_400 tracking-[2px]"
        style={{
          WebkitTextStrokeColor: "#F12E05",
          WebkitTextStrokeWidth: "4px",
          paintOrder: "stroke fill",
        }}
      >
        <TextGeneration
          className="text-center items-center justify-center relative top-[10px]"
          text="NOW, CAESAR’S FIRST ORDER OF BUSINESS IS TO REPAY THE MEN WHO GIVE HIM
        POWER TO BUILD SUPADAPP BY CONTRIBUTING TO THE PRESALE"
        />
      </p>
      <Slide2Mobile1Svg />
    </div>
  );
};

const ThirdPoster = () => {
  return (
    <div className="relative z-10 w-full ">
      <p
        className="absolute z-20 top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-[80%] text-center leading-[110%] text-[20px] text-[#FFBA70] font-jolly-lodger_400 tracking-[2px]"
        style={{
          WebkitTextStrokeColor: "#F12E05",
          WebkitTextStrokeWidth: "4px",
          paintOrder: "stroke fill",
        }}
      >
        <TextGeneration
          text=" THEREFORE THEY GET $PECA CURRENCY AT A HIGHLY DISCOUNTED RATE AND WITH
        MASSIVE STAKING REWARDS DURING PRESALE"
          className="items-center justify-center relative top-[10px]"
        />
      </p>
      <Slide2Mobile2Svg />
    </div>
  );
};
