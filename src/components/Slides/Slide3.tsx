import Image from "next/image";

type Props = {
  title: string;
  color: string;
}

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
    <main className="min-h-screen relative w-full bg-[url(/Images/slide3.png)] bg-cover bg-center pt-[65px] flex flex-col   ">

      <Image
        src="/Images/slide3Image1.gif"
        alt=""
        width={244}
        height={244} // or any appropriate size that matches your intended design
        className="absolute max-w-[344px] w-[244px] rounded-br-[150px] aspect-square top-0 left-0"
      />

      <div className="flex flex-col items-start justify-normal gap-3">
        
      <p
        className="text-[#FFF] text-[36px] font-space-comics_400  pl-[350px]"
        style={{
          WebkitTextStrokeWidth: "8px",
          WebkitTextStrokeColor: "#EE0A73",
          paintOrder: "stroke fill",
        }}
        >
        PECANOMICS
        </p>
        <p className="pl-[350px] text-[#FFF] text-[48px] font-jolly-lodger_400 leading-[37px] uppercase mt-[50px]"
          style={{
          WebkitTextStrokeWidth: "4px",
            WebkitTextStrokeColor: "#EE0A73",
          paintOrder: "stroke fill",
        }}
        >{"The  engine  that  powers  Pepius  Caesar's  $PECA  machine."}</p>
        </div>
      <div className="w-full flex flex-row items-center justify-center gap-[67px] ">
        <Image
          src="/Images/slide3Image1.png"
          alt=""
          width={648} // Set the width to match max-w-[690px]
          height={636} // Set height to auto with layout
          layout="intrinsic" // Ensures the image maintains its aspect ratio
          className=" h-auto"
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
          WebkitTextStrokeWidth: "4px",
          paintOrder: "stroke fill",
        }}
      >
        {title}
      </p>
    </div>
  );
};


