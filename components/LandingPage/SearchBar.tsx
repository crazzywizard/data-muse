import Button from '@/components/Button';
import { VERCEL_URL } from '@/lib/consts';
import { useState } from 'react';

const SearchBar = () => {
  const [creator, setCreator] = useState('');

  const handleClick = () => {
    window.open(`${VERCEL_URL}/creator/${creator}`);
  };

  return (
    <div className="font-helvetica flex gap-3">
      <input
        className="rounded h-[34px] md:h-[56px] w-[250px] md:w-[656px] text-[24px] md:text-[36px] pl-3 
        outline-none shadow-gray_shadow"
        placeholder="search a wallet..."
        value={creator}
        onChange={(e) => setCreator(e.target.value)}
      />
      <Button
        className="bg-white !text-black px-2 md:px-4 shadow-gray_shadow !text-[32px] !font-bold"
        onClick={handleClick}
      >
        <p className="hidden md:block">Search</p>
        <img height="20" width="20" src="/images/search.png" className="block md:hidden" />
      </Button>
    </div>
  );
};

export default SearchBar;
