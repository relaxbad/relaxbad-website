import Image from "next/image";
import LOGO from "@/assets/logo/logo-relaxbad.svg";
import { ROUTES } from "@/globals/routes";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="fixed w-full  md:flex flex-row hidden z-100">
      <div className="relative w-full container mt-3">
        <div className="absolute flex justify-self-start  bg-white rounded-full">
          <Image src={LOGO} alt="logo" className="h-8 w-40 my-3 mr-2" />
        </div>
        <ul className="text-sm flex flex-row mx-auto justify-center items-center bg-primary w-fit px-8 py-4 rounded-full gap-5">
          {ROUTES.map((route) => (
            <Link key={route.url} href={route.url} className="text-green-950">
              {route.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
