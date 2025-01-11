import { MobileSlide3BackgroundSvg } from "@/assets/Svg";

type Props = {
  title: string;
  color: string;
};

const labes: Props[] = [
  {
    title: "Project Development",
    color: "#F0BE4D",
  },
  {
    title: "marketing",
    color: "#9C70FC",
  },
  {
    title: "STAKing & REWARDS",
    color: "#BDC1D0",
  },
  {
    title: "PRESALE PHASE",
    color: "#F370B5",
  },
  {
    title: "VAULT",
    color: "#D45F23",
  },
  {
    title: "Liquidity",
    color: "#469BD0",
  },
];

const MobileSlide3 = () => {
  return (
    <section className="flex flex-col z-10 bg-[#FFCD44]  items-center w-full h-[1000px] overflow-hidden relative  justify-center">
      <MobileSlide3BackgroundSvg />
      {/* </div> */}
      <main className="w-full  flex h-full flex-col items-center gap-[60px] justify-normal p-5 ">
        <FirstPoster />
        <SecondPoster />
      
      </main>
    </section>
  );
};

export default MobileSlide3;

const FirstPoster = () => {
  return (
    <div className="flex flex-col items-start justify-start relative pt-[59px] z-10">
      <p
        className="text-[#FFF] self-center text-[20px] font-space-comics_400 "
        style={{
          WebkitTextStrokeWidth: "4px",
          WebkitTextStrokeColor: "#EE0A73",
          paintOrder: "stroke fill",
        }}
      >
        PECANOMICS
      </p>
      <p
        className="text-[#FFF] self-center text-[20px] font-jolly-lodger_400 uppercase mt-2 text-center text-balance "
        style={{
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#EE0A73",
          paintOrder: "stroke fill",
        }}
      >
        The engine that powers Pepius Caesars $PECA  machine.
      </p>
      <img
        src="/Images/MobilePieChart.png"
        alt=""
        className="relative z-10 self-center"
      />
    </div>
  );
};

const SecondPoster = () => {
  return (
    <div className="flex self-end flex-col items-start gap-[22px] justify-normal relative w-full px-11">
      {labes.map((item, index) => {
        return <Label key={index} title={item.title} color={item.color} />;
      })}
    </div>
  );
};

type props = {
  title: string;
  color: string;
};

const Label = ({ title, color }: props) => {
  return (
    <div className="flex flex-row items-center justify-start gap-4">
      <div
        className="w-[63px] h-[35px] border-[2px] border-solid border-[#743B1C] rounded-[8px]"
        style={{
          background: color,
          boxShadow:
            "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 15.3px 0px #7C4E13 inset",
        }}
      ></div>
      <p
        className="text-[12px] text-[#FFF] leading-6 uppercase font-space-comics_400"
        style={{
          WebkitTextStrokeColor: "#EE0A73",
          WebkitTextStrokeWidth: "2px",
          paintOrder: "stroke fill",
        }}
      >
        {title}
      </p>
    </div>
  );
};
