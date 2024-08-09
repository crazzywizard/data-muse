const LandingPageHeader = () => {
  return (
    <div
      style={{ display: 'flex' }}
      className="space-y-3 flex flex-col"
      tw="flex flex-col items-center text-center w-[1000px]"
    >
      <div
        className="flex gap-2 font-bold tracking-tighter text-[24px] md:text-[40px]"
        tw="text-[40px] font-black pt-[100px]"
        style={{ display: 'flex' }}
      >
        <span className="hidden md:block">search a wallet →</span>view most loyal collectors
      </div>
    </div>
  );
};

export default LandingPageHeader;
