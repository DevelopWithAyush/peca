import {
  SecondPageTextRectangle1,
  SecondPageTextRectangle2,
} from "@/assets/Svg";
import TextGeneration from "../common/TextGeneration";
import Image from "next/image";

const Slide2 = () => {
  return (
    <div className="w-full flex flex-col relative h-auto min-h-screen items-center bg-[#F7E4AB]">
      <svg
        width="953"
        height="982"
        viewBox="0 0 953 982"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-0 w-full h-full "
      >
        <ellipse cx="476.5" cy="471.5" rx="476.5" ry="653.5" fill="#FAB9B9" />
        <ellipse cx="476.5" cy="471.5" rx="381.2" ry="522.8" fill="#F8D3D3" />
      </svg>

      <div className=" z-10 flex h-auto flex-col md:flex-row items-center justify-center w-full container mx-auto max-w-[88rem] pt-[3vh]  ">
        <div
          style={{
            boxShadow: "0px 4px 47.9px 0px rgba(231, 94, 20, 0.56)",
          }}
          className="flex flex-col items-center justify-start  pt-[28px] pb-[13px] rounded-[30px] px-[36px]  bg-white">
          <Image
          src={"/Images/slide2.png"}
          width={626}
          height={653}
          alt="slide2"
          />
          <p
            className="text-[#FFBA70] text-[40px] font-jolly-lodger_400 leading-[117.5%] tracking-[4px] mt-[11.31px] "
            style={{
              WebkitTextStrokeWidth: "6px",
              WebkitTextStrokeColor: "#F12E05",
              paintOrder: "stroke",
            }}
          >
            PEPIUS CAESER{" "}
          </p>
          <p
            style={{
              WebkitTextStrokeColor: "#FFBA70",
              WebkitTextStrokeWidth:"2px",
              paintOrder: "stroke fill" ,
            }}
            className="text-[#AC341B] leading-[38px] tracking-[3.6px] text-[20px] font-modern-antiqua_400 text-center max-w-[636px] mt-[15.5px] ">
            ON HIS WAY TO MAKE THE SUPERDAPP WITH THE SUPPORT OF THE WHOLE
            KINGDOM
          </p>
        </div>
     
        <div className="flex-1  flex flex-col items-center justify-start ">
          <div className="relative ">
            
            <p
            
              style={{
                WebkitTextStroke: "6px #F12E05",
                 paintOrder: "stroke fill"
              }}

              className="text-[#FFBA70] w-full px-[18px] max-w-[475px] leading-[110%]  text-center font-jolly-lodger_400 text-[36px] tracking-[3.6px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[44%] "
            >
              {" "}
              <TextGeneration
                className="items-center justify-center"
                text=" NOW, CAESAR’S FIRST ORDER OF BUSINESS IS TO REPAY THE MEN WHO GIVE
              HIM POWER TO BUILD SUPADAPP BY CONTRIBUTING TO THE PRESALE"
              />
            </p>
            <SecondPageTextRectangle1 />
          </div>
          <div className="relative ">
            <p
              style={{
                WebkitTextStrokeWidth: "6px",
                WebkitTextStrokeColor: "#F12E05",
                paintOrder: "stroke",
              }}
              className="text-[#FFBA70] w-full px-[18px] max-w-[475px] leading-[110%]  text-center font-jolly-lodger_400 text-[36px] tracking-[3.6px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            >
              {" "}
              <TextGeneration
                className="items-center justify-center"
                text={`THEREFORE THEY GET $PECA CURRENCY AT A HIGHLY DISCOUNTED RATE AND WITH MASSIVE STAKING REWARDS DURING PRESALE
`}
              />
            </p>
            <SecondPageTextRectangle2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
