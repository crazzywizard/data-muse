import { useRouter } from 'next/navigation';
import SearchBar from '../LeaderboardPage/SearchBar';

const NavBar = () => {
  const { push } = useRouter();

  return (
    <div className="px-5 bg-[#BCB4C5] flex justify-between items-center">
      <button type="button" onClick={() => push('/')}>
        <img src="/images/logo.png" />
      </button>
      <SearchBar />
    </div>
  );
};

export default NavBar;
