import {
  MobileSlide4Svg,
  MobileSlide5Svg1,
  MobileSlide5Svg2,
  MobileSlide5Svg3,
  Slide5Background,
} from "@/assets/Svg";
import { motion } from "framer-motion"; // Use `motion` from framer-motion
import Image from "next/image"; // Import Image from next/image
import React from "react";

const MobileSlide5 = () => {
  return (
    <section className="flex flex-col z-10 bg-[#079307] items-center w-full h-[1100px] overflow-hidden relative justify-center">
      <Slide5Background className="h-[1100px] top-0" />
      <main className="w-full max-w-[500px] flex h-full flex-col items-center justify-center p-5">
        <div className="bg-[#F8D3D3] flex flex-col items-center justify-normal py-[30px] px-5 border-[8px] border-solid border-[#FFF] relative h-full rounded-[32px] w-full">
          <div className="relative w-auto">
            <p
              className="text-[11px] absolute top-[20%] z-20 left-1/2 -translate-x-1/2 w-[80%] text-[#F12E05] font-space-comics_400 tracking-[0.66px]"
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#FFD28A",
                paintOrder: "stroke fill",
              }}
            >
              THE LONG ROAD AHEAD
            </p>
            <MobileSlide4Svg />
          </div>
          <Image
            src="/Images/slide5Images.png"
            alt=""
            width={500} // Set width and height for Image component
            height={500}
            className="relative top-[-40px] z-0"
          />
          <FirstPoster />
        </div>
      </main>
    </section>
  );
};

export default MobileSlide5;

const FirstPoster = () => {
  return (
    <div className="relative top-[-149px]">
      <Phase
        phaseNumber="1"
        title="Website launch, Smart contract development, Audits and security, Presale launch, Community building, Marketing kickoff."
        phaseText="Phase1"
        SvgComponent={MobileSlide5Svg1}
        top="70%"
        left="50%"
      />
      <Phase
        phaseNumber="2"
        title="Worldwide marketing campaigns, Community growth, Softcap cross, Partnerships"
        phaseText="Phase2"
        SvgComponent={MobileSlide5Svg2}
        top="70%"
        left="50%"
      />
      <Phase
        phaseNumber="3"
        title="DEX launch, Start with SupaDapp development, Airdrops, CEX listings, Marketing continues, SupaDapp launch"
        phaseText="Phase3"
        SvgComponent={MobileSlide5Svg3}
        top="77%"
        left="57%"
      />
    </div>
  );
};

interface PhaseProps {
  phaseNumber: string;
  title: string;
  phaseText: string;
  SvgComponent: React.ComponentType;
  top: string;
  left: string;
}

const Phase = ({
  title,
  phaseText,
  SvgComponent,
  top,
  left,
}: PhaseProps) => {
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

  const words = title.split(" ");

  return (
    <div className="relative w-auto">
      <div
        className="absolute"
        style={{
          top: top,
          left: left,
          transform: "translateX(-50%) translateY(-50%)",
          width: "80%",
          height: "60%",
        }}
      >
        <motion.p
          className="text-[#FFF] text-[18px] font-jolly-lodger_400 tracking-[1.08px] leading-[110%]"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#EE0A73",
            paintOrder: "stroke fill",
          }}
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          {phaseText}{" "}
          <motion.span
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="text-[#4437A0] text-[18px] font-jolly-lodger_400 tracking-[1.08px] leading-[110%]"
            style={{
              WebkitTextStrokeColor: "transparent",
              WebkitTextStrokeWidth: 0,
            }}
          >
            :{" "}
            {words.map((word, index) => (
              <motion.span variants={child} className="inline-block mr-2" key={index}>
                {word}
              </motion.span>
            ))}
          </motion.span>
        </motion.p>
      </div>
      <SvgComponent />
    </div>
  );
};
