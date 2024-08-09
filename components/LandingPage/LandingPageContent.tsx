import SearchBar from './SearchBar';
import LandingPageHeader from './LandingPageHeader';

const LandingPageContent = () => (
  <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center sm:gap-8 md:px-6">
    <LandingPageHeader />
    <div className="flex flex-col gap-2 min-[400px]:flex-row">
      <SearchBar />
    </div>
  </div>
);

export default LandingPageContent;
