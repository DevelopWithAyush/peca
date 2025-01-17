import Image from "next/image";

const Header = () => {
  return (
    <section className="container max-w-[1119px] mx-auto px-5 md:px-0">
      <header className=" flex relative z-10 w-full
          rounded-[85px]
          border-solid
          border-[3px]
          md:border-[5px]
          py-[10px] px-5
          md:pt-[7.62px]
          md:pb-[14.27px]
          bg-[#41AFFE]
          md:px-[27px]
          justify-between
          items-center ">
            
        <div  className="flex flex-row items-center ">
          <Image
            src="/Images/logo.gif"
            alt=""
            width={64}  // Equivalent to w-16 (16 * 4px = 64px)
            height={64} // Equivalent to h-16 (16 * 4px = 64px)
            className="bg-transparent"
          />
          <h1
            className="font-space-comics_400 leading-[110%] md:text-[16px] xl:text-[28px] text-[#FFF]"
            style={{
              WebkitTextStrokeWidth: "3px",
              WebkitTextStrokeColor: "#000",
              paintOrder: "stroke fill",
            }}
          >
            $PECA
          </h1>
        </div>

        <div className="flex flex-row items-center gap-4">
          <a href=""> <img src="/Images/x.png"  className="w-[32px] h-[32px]" alt="" /></a>
          <a href=""> <img src="/Images/Insta.png"  className="w-[32px] h-[32px]" alt="" /></a>
          <a href=""> <img src="/Images/Telegram.png"  className="w-[32px] h-[32px]" alt="" /></a>
          {/* {isMute ? ( 
            <button >
              <Image src="/Images/mute.png"  className="w-[32px] h-[32px]" alt="" />
          </button>
          ): (<Image src='/Images/play.png' className="w-[32px] h-[32px]" alt="" />) } */}
          {/* <a href=""> <img src="/Images/dxto.png"  className="w-[32px] h-[32px]" alt="" /></a> */}

        </div>

      </header>
    </section>
  );
};

export default Header;