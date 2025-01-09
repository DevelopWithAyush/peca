// import Image from "next/image";
import {
  FirstPageTextEllipse,
  FirstPageTextRectangle,
  FirstPageTextRectangle1,
  FirstPageTextRectangle2,
  FirstPageTextRectangle3,
  SVGVector,
} from "@/assets/Svg";
import Header from "../common/Header";

const Slide1 = () => {
  return (
    <main className="w-[100vw] min-h-screen bg-[#4437A0]  bg-[url(/Images/FirstSlideBackgroudn.png)] bg-cover bg-center pt-[35px]    ">
      <Header />
      {/* <Background /> */}
      <BorderLine />
      <SVGVector />
      <p
        className="text-[#079307] absolute top-[40%] left-1/2 -translate-x-1/2 z-20 -translate-y-1/2 -rotate-[12deg] font-space-comics_400 text-[64px] tracking-[5.76px] "
        style={{
          WebkitTextStrokeWidth: "7px",
          WebkitTextStrokeColor: "#FFF566 ",
        }}
      >
        $PECA
      </p>
      <div className="absolute top-[20%] ">
        <p
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFBA70] text-center font-jolly-lodger_400 leading-[100%]  text-[40px] w-[708px] tracking-[0px]"
          style={{
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#F12E05 ",
            paintOrder: "stroke fill",
          }}
        >
          PEPIUS CAESER <br /> THE RIGHT HAND OF ELON’S KEKIUS MAXIMUS
        </p>
        <FirstPageTextRectangle />
      </div>

      <Rectangle1 />
      <Rectangle />
      <Rectangle2 />
      <Phone />
    </main>
  );
};

export default Slide1;

const BorderLine = () => {
  return (
    <div className="w-full h-[49px] mt-[22px]  bg-[#FFF566] border-t-[8px] border-b-[8px] border-solid border-[#079307]"></div>
  );
};

const Rectangle1 = () => {
  return (
    <div className="absolute top-[72%] z-30 left-[0%]">
      <p
        style={{
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: "#F12E05",
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
      <img
        className="relative -bottom-[90px] z-0"
        src={"/Images/firstpageImage3.png"}
        alt="aksfja"
      />
      <FirstPageTextRectangle2 />
      <button
        className="text-[#FFF566] font-jolly-lodger_400 text-[48px] tracking-[2.88px] px-[59px] bg-[#079307] border-solid border-[5px] border-[#FFF566] rounded-[20px] "
        style={{
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: "#F12E05 ",
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
      <img
        src="/Images/firstpageImage1.png"
        className="relative z-50 left-[100px]"
        alt=""
      />
      <div className="absolute top-1/2 translate-y-[70px] left-[-20px] ">
        <p
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFF566] text-center font-jolly-lodger_400 leading-[100%]  text-[24px] w-[500px] tracking-[1.44px]"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#F12E05 ",
          }}
        >
          Pepius is frustated by juggling mulitple dapps and wallets. So he
          decided to put it all together in one place -a SupaDapp (AI Driven)
        </p>
        <FirstPageTextEllipse />
      </div>
    </>
  );
};

const Phone = () => {
  return (
    <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[5%] items-start justify-start">
      <Rectangle3 />
      <img src="/Images/firstpageImage2.png" alt="phone" />
      <div
        style={{
          WebkitTextStrokeColor: "#F12E05",
          WebkitTextStrokeWidth: "3px",
          paintOrder: "stroke fill",
        }}
        className="px-[44px] py-[7px] bg-[#079307] border-[5px] border-solid border-[#FFF566] text-[48px] font-jolly-lodger_400 text-[#FFF566] tracking-[2.88px] rounded-[20px]"
      >
        SUPERDAPP
      </div>
    </div>
  );
};

const Rectangle3 = () => {
  return (
    <div className="absolute left-1/2 -translate-y-1/2 ">
      <p
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#FFF566] text-center font-jolly-lodger_400 leading-[100%] rotate-[-12deg]  text-[40px] w-[500px] tracking-[1.44px]"
        style={{
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: "#F12E05 ",
        }}
      >
        ThE REAL DEAL !
      </p>
      <FirstPageTextRectangle3 />
    </div>
  );
};
