import TextGeneration from "../common/TextGeneration";


const labels: Props[] = [
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


const Slide3 = () => {
  return (
    <main className="min-h-screen relative w-full bg-[url(/Images/slide3.png)] bg-cover bg-center pt-[82px] flex flex-col   ">
      <img
        className="absolute top-0 left-0"
        src="/Images/slide3Image.png"
        alt=""
      />
      <div className="flex flex-col items-start justify-normal gap-3">
        
      <p
        className="text-[#FFF] text-[36px] font-space-comics_400  pl-[350px]"
        style={{
          WebkitTextStrokeWidth: "4px",
          WebkitTextStrokeColor: "#EE0A73",
        }}
        >
        PECANOMICS
        </p>
        <p className="pl-[350px] text-[#FFF] text-[48px] font-jolly-lodger_400 leading-[37px] uppercase"
          style={{
          WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "#EE0A73",
          paintOrder: "stroke fill",
        }}
        >The  engine  that  powers  Pepius  Caesar's  $PECA  machine.</p>
        </div>
      <div className="w-full flex flex-row items-center justify-center gap-[67px]">
        <img
          className="max-w-[690px] h-auto "
          src="/Images/slide3Image1.png"
          alt=""
        />
        <div className="flex flex-col items-start justify-normal gap-[67px]">
          {labels.map((label,index) => {
            return <Label title={label.title} color={label.color} key={index}/>
})}
        </div>
        </div>
     
    
    </main>
  );
};

export default Slide3;






type props = {
  title: string;
  color: string;
};

const Label = ({ title, color }: props) => {
  return (
    <div className="flex flex-row items-center justify-start gap-4">
      <div
        className="w-[73px] h-[41px] border-[2px] border-solid border-[#743B1C] rounded-[8px]"
        style={{
          background: color,
          boxShadow:
            "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 15.3px 0px #7C4E13 inset",
        }}
      ></div>
      <p
        className="text-[16px] text-[#FFF] leading-6 uppercase font-space-comics_400"
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


