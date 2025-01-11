const Header = () => {
  return (
    <section className="container max-w-[1119px] mx-auto px-5 md:px-0">
      <header className=" flex relative z-10 w-full    rounded-[85px] border-solid border-[3px] md:border-[5px]  py-[10px] px-5  md:pt-[7.62px] md:pb-[14.27px] bg-[#41AFFE] md:px-[27px] items-center ">
        <img src="/Images/logo.png" alt="" className="w-12 h-12" />
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
      </header>
    </section>
  );
};

export default Header;
