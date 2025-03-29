import Image from "next/image";
import LOGO from "@/assets/logo/logo-relaxbad.svg";

export const Navbar = () => {
  return (
    <nav className="fixed w-full  flex flex-row">
      <div className="relative w-full container mt-3">
        <div className="absolute flex justify-self-start ">
          <Image src={LOGO} alt="logo" className="h-7 my-2" />
        </div>
        <ul className="text-sm flex flex-row mx-auto justify-center items-center bg-primary w-fit px-6 py-2 rounded-full gap-5">
          <li className="navbar__link">Strona Główna</li>
          <li className="navbar__link">Fajansowa Lotka</li>
          <li className="navbar__link">O klubie</li>
          <li className="navbar__link">Zarząd</li>
          <li className="navbar__link">Pytania</li>
          <li className="navbar__link">Kontakt</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
