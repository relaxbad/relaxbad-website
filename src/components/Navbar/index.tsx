import Image from "next/image";
import LOGO from "@/assets/logo/logo-relaxbad.svg";
import { ROUTES, Url } from "@/globals/routes";
import Link from "next/link";
import HamburgerNav from "./HamburgerNav";
import { LEAGUE_LINK } from "@/globals/links";

export const Navbar = () => {
  return (
    <nav className="w-full fixed z-100">
      <div className="hidden relative mt-3 lg:flex flex-row w-full z-100">
        <div className="absolute flex justify-self-start  bg-white rounded-full">
          <Link href={Url.HOME}>
            <Image
              src={LOGO}
              alt="Logo klubu Relaxbad"
              className="h-7 w-40 my-3 mr-2"
            />
          </Link>
        </div>
        <ul className="text-sm flex flex-row mx-auto justify-center items-center bg-primary w-fit px-8 py-4 rounded-full gap-6">
          {ROUTES.map(({ url, label }) => (
            <Link
              key={url}
              href={url}
              className="text-green-950 "
              target={url === LEAGUE_LINK ? "_blank" : "_self"}
            >
              {label}
            </Link>
          ))}
        </ul>
      </div>
      <HamburgerNav />
    </nav>
  );
};

export default Navbar;
