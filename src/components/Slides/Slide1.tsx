"use client";
import {
  BlueRotateBackground,
  FirstPageTextRectangle,
  FirstPageTextRectangle1,
  FirstPageTextRectangle2,
  FirstPageTextRectangle3,
  SVGVector
} from "@/assets/Svg";
// import { motion } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";
import Header from "../common/Header";

const Slide1 = () => {
  return (
        <main className="w-full min-h-screen overflow-hidden  bg-[#4437A0] flex flex-col md:flex-row items-start justify-start h-auto relative  ">
          <BlueRotateBackground/>

      <section className="flex  h-full relative  flex-col items-start justify-start pt-[31px] w-full">
        <Header />
        <BorderLine />
        <SVGVector />
        <motion.p
          className="text-[#079307] absolute top-[30%] left-[40%] z-20  -rotate-[12deg] font-space-comics_400 text-[48px] tracking-[4.32px] shimmer "
          style={{
            WebkitTextStrokeWidth: "7px",
            WebkitTextStrokeColor: "#FFF566 ",
            paintOrder: "stroke fill",
          }}
        >
          PEPIUS <br />
          CAESER
        </motion.p>
        <motion.div
          animate={{
            translateX: [0, -2, 0, -2, 2], // Wiggle effect
            translateY: [0, 0, 2, -2, 2], // Wiggle effect
          }}
          transition={{
            duration: 2,
            repeat: Infinity, // Makes the wiggle repeat indefinitely
            repeatDelay: 0, // Adds delay between each repeat
          }}
          className="absolute top-[20%] "
        >
          <p
            className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFBA70] text-center font-jolly-lodger_400 leading-[100%]  text-[40px] w-[708px] tracking-[0px]"
            style={{
              WebkitTextStrokeWidth: "3px",
              WebkitTextStrokeColor: "#F12E05 ",
              paintOrder: "stroke fill",
            }}
          >
            PEPIUS CAESER <br /> THE RIGHT HAND OF ELON’S KEKIUS MAXIMUS
          </p>
          <FirstPageTextRectangle />
        </motion.div>

        <Rectangle1 />
        <Rectangle />
        <Rectangle2 />
        <Phone />
      </section>
    </main>
  );
};

export default Slide1;

export const BorderLine = () => {
  return (
    <div className="w-full h-[49px] mt-[22px] relative z-100  bg-[#FFF566] border-t-[8px] border-b-[8px] border-solid border-[#079307]"></div>
  );
};

const Rectangle1 = () => {
  return (
    <div className="absolute top-[72%] z-30 left-[0%]">
      <p
        style={{
          WebkitTextStrokeWidth: "3px",
          WebkitTextStrokeColor: "#F12E05",
          paintOrder: "stroke fill",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFF566] text-center font-jolly-lodger_400 leading-[100%] -rotate-[2deg]  text-[48px] w-[450px] tracking-[1.44px]"
      >
        MASSIVE STAKING REWARDS{" "}
        <span className="text-[36px]">DURING PRESALE</span>
      </p>
      <FirstPageTextRectangle1 />
    </div>
  );
};

const Rectangle2 = () => {
  return (
    <div className="absolute top-[10%] right-[10%] flex flex-col items-center ">
      <Image
        width={100}
        height={100}
        className="relative w-[70%] -bottom-[90px] z-0"
        src={"/Images/slide1Image1.gif"}
        alt="aksfja"
      />
      <FirstPageTextRectangle2 />
      <button
        className="text-[#FFF566] font-jolly-lodger_400 text-[48px] tracking-[2.88px] px-[59px] bg-[#079307] border-solid border-[5px] border-[#FFF566] rounded-[20px] "
        style={{
          WebkitTextStrokeWidth: "3px",
          WebkitTextStrokeColor: "#F12E05 ",
          paintOrder: "stroke fill",
        }}
      >
        BUY NOW !
      </button>
    </div>
  );
};
const Rectangle = () => {
  return (
    <>
      <Image
        width={100}
        height={100}
        src="/Images/slide1Image2.gif"
        className="relative w-[515px] h-[528px] z-50 left-[100px]"
        alt=""
      />
      {/* <div className="absolute w-auto top-1/2 translate-y-[70px] left-[-20px] ">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-[#FFF566] text-center font-jolly-lodger_400 leading-[100%]  text-[24px] w-[500px]  tracking-[1.44px]"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#F12E05 ",
            paintOrder: "stroke fill",
          }}
        >
          <TextGeneration
            className="items-center justify-center"
            text="Pepius is frustated by juggling mulitple dapps and wallets. So he
          decided to put it all together in one place a SupaDapp (AI Driven)"
          />
        </div>
        <FirstPageTextEllipse />
      </div> */}
    </>
  );
};

const Phone = () => {
  return (
    <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[5%] items-start justify-start">
      <Rectangle3 />
      {/* <Image width={100}
      height={100}
        src="/Images/firstpageImage2.png" alt="phone" className="w-[300px] h-[620px] z-50" /> */}
      {/* <div
        style={{
          WebkitTextStrokeColor: "#F12E05",
          WebkitTextStrokeWidth: "3px",
          paintOrder: "stroke fill",
        }}
        className="px-[44px] py-[7px] bg-[#079307] border-[5px] border-solid border-[#FFF566] text-[48px] font-jolly-lodger_400 text-[#FFF566] tracking-[2.88px] rounded-[20px]"
      >
        SUPERDAPP
      </div> */}
    </div>
  );
};

const Rectangle3 = () => {
  return (
    <div className="absolute left-1/2 -translate-y-1/2 ">
      <p
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFF566] text-center font-jolly-lodger_400 leading-[100%] rotate-[-12deg]  text-[40px] w-[500px] tracking-[1.44px]"
        style={{
          WebkitTextStrokeWidth: "3px",
          WebkitTextStrokeColor: "#F12E05 ",
          paintOrder: "stroke fill",
        }}
      >
        ThE REAL DEAL !
      </p>
      <FirstPageTextRectangle3 />
    </div>
  );
};
