const Header = () => {
  return (
    <header className="container max-w-[1119px] mx-auto flex rounded-[85px] border-solid border-[5px] relative  pt-[7.62px] pb-[14.27px] bg-[#41AFFE] px-[27px] items-center ">
      <img src="/Images/logo.png" alt="" />
      <h1
        className="font-space-comics_400 text-[28px] text-[#FFF]"
        style={{
          WebkitTextStrokeWidth: 3,
          WebkitTextStrokeColor: "#000",
        }}
      >
        $PECA
      </h1>
    </header>
  );
};

export default Header;
