import {
  FifthSlideTextSvg,
  FifthSlideTextSvg1,
  FifthSlideTextSvg2,
  Slide5Svg,
} from "@/assets/Svg";
import React from "react";
import TextGeneration from "../common/TextGeneration";

const Slide5 = () => {
  return (
    <main className="w-full min-h-screen  bg-[#079307] bg-[url(/Images/slide5.png)] bg-cover bg-center flex flex-col justify-center items-center">
      <div className="px-[15px] relative pb-[25px]  pt-[135px] bg-[#F8D3D3] border-[#FFF] border-solid border-[23px] rounded-[45px] flex flex-row items-center justify-center ">
        <div className="absolute bottom-[27%] left-0">
          <div className="absolute left-[80%] top-[-125px]">
            <p
              className="text-[22px] text-[#F12E05] font-space-comics_400 absolute top-[20%] left-[20%] "
              style={{
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#FFBF59",
              }}
            >
              THE LONG ROAD AHEAD
            </p>
            <Slide5Svg />
          </div>
          <img src="/Images/slide5Images.png" alt="" />
        </div>
        <div className="flex flex-col items-end ">
          <div className="relative">
            <div className="absolute top-[30%] left-0 w-[100%] flex px-[48px]  flex-col items-start justify-start  ">
              <p
                className="text-[32px] text-[#FFF] font-jolly-lodger_400 tracking-[1.92px] leading-[110%] "
                style={{
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "#EE0A73",
                }}
              >
                {" "}
                Phase1:
              </p>
              <p className="text-[32px]  font-jolly-lodger_400 text-[#4437A0] tracking-[1.92px] leading-[110%]">
                <TextGeneration
                  className="items-center justify-start"
                  text="Website launch, Smart contract development, Audits and security,
                Presale launch, Community building, Marketing kickoff"
                />
              </p>
            </div>
            <FifthSlideTextSvg />
          </div>
          <div className="relative">
            <div className="absolute top-[30%] right-4  flex px-[48px]  flex-col items-start justify-start  ">
              <p
                className="text-[32px] text-[#FFF] font-jolly-lodger_400 tracking-[1.92px] leading-[110%] "
                style={{
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "#EE0A73",
                }}
              >
                {" "}
                Phase2:
              </p>
              <p className="text-[32px] w-[726px]  font-jolly-lodger_400 text-[#4437A0] tracking-[1.92px] leading-[110%]">
                <TextGeneration
                  className="items-start justify-start"
                  text="Worldwide marketing campaigns, Community growth, Softcap cross,
                Partnerships"
                />
              </p>
            </div>
            <FifthSlideTextSvg1 />
          </div>
          <div className="relative">
            <div className="absolute top-[52%] left-[40px] flex px-[48px]  flex-row items-start justify-start  ">
              <p
                className="text-[32px] text-[#FFF] font-jolly-lodger_400 tracking-[1.92px] leading-[110%] "
                style={{
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "#EE0A73",
                }}
              >
                {" "}
                Phase3:
              </p>
              <p className="text-[32px]  font-jolly-lodger_400 text-[#4437A0] text-center tracking-[1.92px] leading-[110%]">
                <TextGeneration
                  className={"items-center justify-center"}
                  text="DEX launch, Start with SupaDapp development, Airdrops, CEX
                listings, Marketing continues, SupaDapp launch"
                />
              </p>
            </div>
            <FifthSlideTextSvg2 />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Slide5;
