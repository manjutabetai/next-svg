import { OchiLogo } from "./OchiLogo";

const Header = () => {
  return (
    <header className="-mb-28 flex justify-center bg-sky-500 py-4">
      {/* <FizziLogo className="z-10 h-20 cursor-pointer text-sky-800" /> */}
      <OchiLogo className="z-10 h-20 cursor-pointer text-sky-300" />
    </header>
  );
};

export default Header;
