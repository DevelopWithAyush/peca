import {
  MobileSlide4Svg,
  MobileSlide4Svg1,
  Slide1Background,
} from "@/assets/Svg";
import { motion } from "motion/react";
import React from "react";
import Image from "next/image"; // Import Image from Next.js

const MobileSlide4 = () => {
  return (
    <section className="flex flex-col z-10 bg-[#4437A0] items-center w-full h-[1100px] overflow-hidden relative justify-center">
      <Slide1Background className="h-[1100px] top-0" />
      <main className="w-full max-w-[500px] flex h-full flex-col items-center justify-center p-5">
        <div className="bg-[#F8D3D3] flex flex-col items-center justify-normal py-[30px] px-5 border-[8px] border-solid border-[#FFF] relative h-auto rounded-[32px] w-full ">
          <div className="relative w-auto">
            <p
              className="text-[11px] absolute top-[20%] z-20 left-1/2 -translate-x-1/2 w-[70%] text-[#F12E05] font-space-comics_400 tracking-[0.66px]"
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#FFD28A",
                paintOrder: "stroke fill",
              }}
            >
              HOW TO BUY $PECA
            </p>
            <MobileSlide4Svg />
          </div>
          <div className="  p-2 overflow-hidden bg-white rounded-[10px]  top-[-30px] z-0">
          <Image
            src="/Images/slide4Image1.gif" // Using Next.js Image component
            alt="Slide 4"
            width={0} // Define width
            height={0} // Define height
            layout="responsive"
            className="relative rounded-[10px] "
          />
          </div>
          <FirstPoster />
        </div>
      </main>
    </section>
  );
};

export default MobileSlide4;

const FirstPoster = () => {
  return (
    <div className="relative z-10 w-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[56%] w-[70%] h-[70%]">
        <p
          className="text-[#FFFDFD] font-jolly-lodger_400 text-[18px] tracking-[1.08px]"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#EE0A73",
            paintOrder: "stroke fill",
          }}
        >
          Contract Address
        </p>
        <Text title="Token Supply" desc="8000,000,000" />
        <Text
          title="Get Wallet"
          desc=" - You will already have a wallet. If not, Install a crypto wallet"
        />
        <Text
          title="Fund Wallet"
          desc=" - Fund your wallet with sol coins at solana chain."
        />
        <Text
          title="Buy & Stake"
          desc="- Connect your wallet on the website."
        />
        <span
          className="text-[#4437A0] relative text-[18px] font-jolly-lodger_400 tracking-[1.92px]"
          style={{
            WebkitTextStrokeColor: "transparent",
            WebkitTextStrokeWidth: 0,
          }}
        >
          Buy tokens from your funds. Stake to get staking rewards.
        </span>{" "}
      </div>

      <MobileSlide4Svg1 />
    </div>
  );
};

interface TextProps {
  title: string;
  desc: string;
}

const Text = ({ title, desc }: TextProps) => {
  const words = desc.split(" ");
  const child = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="flex flex-row items-center">
      <p
        className="text-[#FFFDFD] font-jolly-lodger_400 text-[18px] tracking-[1.92px]"
        style={{
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#EE0A73",
          paintOrder: "stroke fill",
        }}
      >
        {title}{" "}
        <motion.span
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="text-[#4437A0] text-[18px] font-jolly-lodger_400 tracking-[1.92px]"
          style={{
            WebkitTextStrokeColor: "transparent",
            WebkitTextStrokeWidth: 0,
          }}
        >
          :
          {words.map((word, index) => {
            return (
              <motion.span
                variants={child}
                className="inline-block mr-2"
                key={index}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.span>{" "}
      </p>
    </div>
  );
};
