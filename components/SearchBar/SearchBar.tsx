import Button from '../Button';

const SearchBar = () => (
  <div className="font-helvetica flex gap-3">
    <input
      className="rounded h-[34px] md:h-[56px] w-[250px] md:w-[656px] text-[24px] md:text-[36px] pl-3 
      outline-none shadow-gray_shadow"
      placeholder="search a wallet..."
    />
    <Button className="bg-white !text-black px-2 md:px-4 shadow-gray_shadow !text-[32px] !font-bold">
      <p className="hidden md:block">Search</p>
      <img height="20" width="20" src="/images/search.png" className="block md:hidden" />
    </Button>
  </div>
);

export default SearchBar;
