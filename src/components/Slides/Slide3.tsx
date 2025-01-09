const Slide3 = () => {
  return (
    <main className="min-h-screen w-full bg-[url(/Images/slide3.png)] bg-cover bg-center pt-[137px] flex flex-col   ">
      <img
        className="absolute top-0 left-0"
        src="/Images/slide3Image.png"
        alt=""
      />
      <img
        className="absolute top-0 right-[57px]"
        src="/Images/slide3Image1.png"
        alt=""
      />

      <p
        className="text-[#FFF] text-[36px] font-space-comics_400  pl-[350px]"
        style={{
          WebkitTextStrokeWidth: "4px",
          WebkitTextStrokeColor: "#EE0A73",
        }}
      >
        PECANOMICS
      </p>
      <div className="ml-[250px] mt-[6vh] flex flex-col items-start justify-start gap-12">
        <Text
          title="Presale Phase"
          desc="15% of the total supply will be allocated to the presale phase. Ensuring this early nectar will ensure liquidity to jump start the project."
        />
        <Text
          title="Vault"
          desc="3% of the total supply will be in the vote-to-earn vault and social cause fund. 
PS: The more you engage- the more you earn."
        />
      </div>
      <div className="w-full container max-w-[88rem] mx-auto flex flex-col md:flex-row  md:items-start md:justify-start items-center justify-center mt-[5vh] ">
        <div className="w-[50%] flex flex-col items-start justify-start gap-[38px]">
          <Text
            title="STAKING & REWARDS  "
            desc="10% of the total supply will be reserved for staking rewards, incentivizing long-term holders and fostering a stable ecosystem."
          />
          <Text
            title="Liquidity "
            desc="( 5% Dex, 7% CEX)
Liquidity pool of 12% for decentralized exchange listings."
          />
        </div>
        <div className="w-[50%] flex flex-col items-start justify-start gap-[38px]">
          <Text
            title="Project Development  "
            desc="35% of the total supply will be used up in developing platforms around the bitchy vision."
          />
          <Text
            title="Marketing "
            desc="A full 25% earmarked for spreading the word about Peca"
          />
        </div>
      </div>
    </main>
  );
};

export default Slide3;

type Props = {
  title: string;
  desc: string;
};

const Text = ({ title, desc }: Props) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[18px]">
      <p
        className="text-[#EE0A73] text-[20px] font-space-comics_400 uppercase"
        style={{
          WebkitTextStrokeWidth: "2px",
          WebkitTextStrokeColor: "#F8FBFF",
        }}
      >
        {title}
      </p>
      <p className="font-comic-neue-bold_700 max-w-[561px] text-[#FFF] text-[24px]">
        {" "}
        {desc}
      </p>
    </div>
  );
};
