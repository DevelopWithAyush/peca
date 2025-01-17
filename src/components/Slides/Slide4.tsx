import { Slide4Svg1, Slide4Svg2 } from "@/assets/Svg";
import { motion } from "motion/react";
import Image from "next/image";

const Slide4 = () => {
  return (
    <main className="w-full min-h-screen bg-[#4437A0] flex flex-col md:flex-row items-center justify-center bg-[url(/Images/FirstSlideBackgroudn.png)] bg-cover bg-center  ">
      <div className="rounded-[45px] border-[23px] border-solid border-[#FFF] bg-[#F8D3D3]   flex flex-row px-[34px] items-center justify-center">
        <div className="relative">
          <div className="absolute z-10 left-[60%] top-[-90px]">
            <p
              className="text-[#F12E05] absolute top-[40px] text-[22px] left-[80px] font-space-comics_400 "
              style={{
                WebkitTextStrokeWidth: "4px",
                WebkitTextStrokeColor: "#FFD28A",
                paintOrder:"stroke fill"
              }}
            >
              HOW TO BUY $PECA
            </p>
            <Slide4Svg1 />
          </div>
   

          <div className="w-[522px] h-auto relative top-[0px]  flex flex-col items-center justify-center p-4 bg-white rounded-[20px]">
            <Image
              src="/Images/slide4Image1.gif"
              alt=""
              width={518}
              height={618}
              layout="intrinsic"
              className=" rounded-[20px]"
              // Ensures the image maintains its aspect ratio
            />
          </div>

        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-start gap-[20px]  pt-[126px] px-[47px] ">
            <p
              className="text-[#FFFDFD] font-jolly-lodger_400 text-[32px] tracking-[1.92px]"
              style={{
                WebkitTextStrokeWidth: "6px",
                WebkitTextStrokeColor: "#EE0A73",
                paintOrder:"stroke fill"
              }}
            >
              Contract Address
            </p>
            <Text title="Token Supply" desc="8000,000,000" />
            <Text
              title="Get Wallet"
              desc=" - You will already have a wallet.
 If not, Install a crypto wallet"
            />
            <Text
              title="Fund Wallet"
              desc=" - Fund your wallet with sol coins at solana chain."
            />
            <Text
              title="
                Buy & Stake
                "
              desc="- Connect your wallet on the website."
            />
            <span
              className="text-[#4437A0] relative top-[-0px] leading-[120%] text-[32px] font-jolly-lodger_400 tracking-[1.92px]"
              style={{
                WebkitTextStrokeColor: "transparent",
                WebkitTextStrokeWidth: 0,
              }}
            >
              Buy tokens from your funds. Stake to get staking rewards.
            </span>{" "}
          </div>

          <Slide4Svg2 />
        </div>
      </div>
    </main>
  );
};

export default Slide4;

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
    <div className="flex  flex-row items-center">
      <p
        className="text-[#FFFDFD] font-jolly-lodger_400 text-[32px] leading-[120%] tracking-[1.92px]"
        style={{
          WebkitTextStrokeWidth: "6px",
          WebkitTextStrokeColor: "#EE0A73",
          paintOrder:"stroke fill"
        }}
      >
        {title}{" "}
        <motion.span
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="text-[#4437A0] text-[32px] font-jolly-lodger_400 tracking-[1.92px] "
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
          {/* <TextGeneration text={desc} /> */}
        </motion.span>{" "}
      </p>
    </div>
  );
};
