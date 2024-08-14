import Button from '@/components/Button';
import { VERCEL_URL } from '@/lib/consts';
import { ethPublicClient } from '@/lib/publicClient';
import { useEffect, useState } from 'react';
import { isAddress } from 'viem';
import { getEnsAddress } from 'viem/ens';

const SearchBar = () => {
  const [creator, setCreator] = useState('');

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreator(e.target.value);
    if (!isAddress(e.target.value)) {
      const address = await ethPublicClient.getEnsAddress({ name: e.target.value });
      if (address && isAddress(address)) {
        setCreator(address);
      }
    }
  };

  const handleClick = () => {
    window.open(`${VERCEL_URL}/creator/${creator}`);
  };

  return (
    <form onSubmit={handleClick}>
      <div className="flex gap-3 font-helvetica">
        <input
          className="rounded h-[34px] md:h-[56px] w-[200px] md:w-[520px] text-[24px] md:text-[36px] pl-4 md:pl-10 
        outline-none shadow-gray_shadow"
          placeholder="search a wallet..."
          value={creator}
          onChange={handleInputChange}
        />
        <Button
          className="bg-white !text-black px-2 md:px-4 shadow-gray_shadow !text-[32px]"
          onClick={handleClick}
          type="submit"
        >
          <p className="hidden md:block !font-[700]">search</p>
          <img height="20" width="20" src="/images/search.png" className="block md:hidden" />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
