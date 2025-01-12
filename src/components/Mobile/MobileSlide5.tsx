import {
    MobileSlide4Svg,
    MobileSlide5Svg1,
    MobileSlide5Svg2,
    MobileSlide5Svg3,
    Slide5Background,
} from "@/assets/Svg";

const MobileSlide5 = () => {
  return (
    <section className="flex flex-col z-10 bg-[#079307]  items-center w-full h-[1100px] overflow-hidden relative  justify-center">
      {/* <div className='absolute top-0  w-full h-full'> */}
      <Slide5Background className="h-[1100px] top-0" />
      {/* </div> */}
      <main className="w-full flex h-full flex-col items-center justify-center  p-5  ">
        <div className="bg-[#F8D3D3] flex flex-col items-center  justify-normal py-[30px] px-5 border-[8px] border-solid border-[#FFF] relative  h-full rounded-[32px] w-full ">
          <div className="relative w-auto ">
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
          <img
            src="/Images/slide5Images.png"
            alt=""
            className="relative top-[-40px] z-0"
          />
          <FirstPoster />
        </div>
        {/* 
              <SecondPoster />
              <ThirdPoster />  */}
      </main>
    </section>
  );
};

export default MobileSlide5;

const FirstPoster = () => {
  return (
    <div className=" relative top-[-149px]">
      <div className=" w-auto relative">
        <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] flex flex-row ">
          <p
            className="text-[#FFF] text-[18px] font-jolly-lodger_400 tracking-[1.08px] leading-[110%]"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#EE0A73",
              paintOrder: "stroke fill",
            }}
          >
            Phase1{" "}
          </p>
          <p className="text-[18px] text-[#4437A0] font-jolly-lodger_400 tracking-[1.08px] leading-[110%]">
            {" "}
            - Website launch, Smart contract development, Audits and security,
            Presale launch, Community building, Marketing kickoff.
          </p>
        </div>
        <MobileSlide5Svg1 />
      </div>
      <div className="relative w-auto">
        <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[82%] h-[70%] ">
          <p
            className="text-[#FFF] text-[18px] font-jolly-lodger_400 tracking-[1.08px] leading-[110%]"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#EE0A73",
              paintOrder: "stroke fill",
            }}
          >
            Phase2 :{" "}
          </p>
          <p className="text-[18px] text-[#4437A0] font-jolly-lodger_400 tracking-[1.08px] leading-[110%]">
            {" "}
                      Worldwide marketing campaigns, Community growth, Softcap cross, Partnerships
          </p>
        </div>
        <MobileSlide5Svg2 />
      </div>
      <div className="relative w-auto">
              <div className="absolute top-[47%] left-1/2 -translate-x-1/2  w-[80%] h-[70%] flex flex-row ">
                  <p
                      className="text-[#FFF] text-[18px] font-jolly-lodger_400 tracking-[1.08px] leading-[110%]"
                      style={{
                          WebkitTextStrokeWidth: "1px",
                          WebkitTextStrokeColor: "#EE0A73",
                          paintOrder: "stroke fill",
                      }}
                  >
                      Phase2:
                  </p>
                  <p className="text-[18px] text-[#4437A0] font-jolly-lodger_400 tracking-[1.08px] leading-[110%]">
                  
                      - DEX launch, Start with SupaDapp development, Airdrops, CEX listings, Marketing continues, SupaDapp launch
                  </p>
              </div>
        <MobileSlide5Svg3 />
      </div>
    </div>
  );
};
