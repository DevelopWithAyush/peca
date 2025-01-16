import {
  SecondPageTextRectangle1,
  SecondPageTextRectangle2,
} from "@/assets/Svg";
import TextGeneration from "../common/TextGeneration";

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

      <div className=" z-10 flex h-auto flex-col md:flex-row items-center justify-center w-full md:pl-[160px] pt-[64px]  ">
        <div className="w-[50%] max-w-[725px] bg-white flex flex-col items-center justify-start px-[36px] pt-[28px] pb-[13px] rounded-[30px]">
          <img src="/Images/slide2.png" alt="" className="w-full" />
          <p
            className="text-[#FFBA70] text-[40px] font-jolly-lodger_400 leading-[117.5%] tracking-[4px] "
            style={{
              WebkitTextStrokeWidth: "3px",
              WebkitTextStrokeColor: "#F12E05",
              paintOrder: "stroke",
            }}
          >
            PEPIUS CAESER{" "}
          </p>
          <p className="text-[#AC341B] text-[20px] font-modern-antiqua_400 text-center mt-[14px] ">
            ON HIS WAY TO MAKE THE SUPERDAPP WITH THE SUPPORT OF THE WHOLE
            KINGDOM
          </p>
        </div>
        <div className="w-[50%]  flex flex-col items-center justify-start ">
          <div className="relative ">
            <p
              style={{
                WebkitTextStrokeWidth: "3px",
                WebkitTextStrokeColor: "#F12E05",
                paintOrder: "stroke",
              }}
              className="text-[#FFBA70] w-full px-[18px] max-w-[475px] leading-[110%]  text-center font-jolly-lodger_400 text-[36px] tracking-[3.6px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            >
              {" "}
              <TextGeneration className="items-center justify-center"
                text=" NOW, CAESAR’S FIRST ORDER OF BUSINESS IS TO REPAY THE MEN WHO GIVE
              HIM POWER TO BUILD SUPADAPP BY CONTRIBUTING TO THE PRESALE"
              />
            </p>
            <SecondPageTextRectangle1 />
          </div>
          <div className="relative ">
            <p
              style={{
                WebkitTextStrokeWidth: "2.5px",
                WebkitTextStrokeColor: "#F12E05",
                paintOrder: "stroke",
              }}
              className="text-[#FFBA70] w-full px-[18px] max-w-[475px] leading-[110%]  text-center font-jolly-lodger_400 text-[36px] tracking-[3.6px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            >
              {" "}
              <TextGeneration className="items-center justify-center"
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
