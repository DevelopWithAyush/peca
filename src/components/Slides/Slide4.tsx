import { Slide4Svg1, Slide4Svg2 } from "@/assets/Svg";
import React from "react";

const Slide4 = () => {
  return (
    <main className="w-full min-h-screen bg-[#4437A0] flex flex-col md:flex-row items-center justify-center bg-[url(/Images/FirstSlideBackgroudn.png)] bg-cover bg-center  ">
      <div className="rounded-[45px] border-[23px] border-solid border-[#FFF] bg-[#F8D3D3]   flex flex-row px-[34px] py-[80px] items-center justify-center">
        <div className="relative">
          <div className="absolute left-[60%] top-[-80px]">
            <p
              className="text-[#F12E05] absolute top-[40px] text-[22px] left-[80px] font-space-comics_400 "
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#FFD28A",
              }}
            >
              HOW TO BUY $PECA
            </p>
            <Slide4Svg1 className={" "} />
          </div>
          <img src="/Images/slide4Image.png" alt="" />
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 w-full h-full flex flex-col items-start justify-start gap-[20px]  pt-[126px] px-[47px] ">
            <p
              className="text-[#FFFDFD] font-jolly-lodger_400 text-[32px] tracking-[1.92px]"
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#EE0A73",
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
              className="text-[#4437A0] relative top-[-32px] text-[32px] font-jolly-lodger_400 tracking-[1.92px]"
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
  return (
    <div className="flex  flex-row items-center">
      <p
        className="text-[#FFFDFD] font-jolly-lodger_400 text-[32px] tracking-[1.92px]"
        style={{
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: "#EE0A73",
        }}
      >
        {title} {" "}
        <span
          className="text-[#4437A0] text-[32px] font-jolly-lodger_400 tracking-[1.92px]"
          style={{
            WebkitTextStrokeColor: "transparent",
            WebkitTextStrokeWidth: 0,
          }}
        >
         : {desc}
        </span>{" "}
      </p>
    </div>
  );
};
