import { ROUTES } from "@/globals/routes";
import STRIPES from "@/assets/images/stripes-1.svg";
import Link from "next/link";
import Image from "next/image";
import { LEAGUE_LINK } from "@/globals/links";

interface HamburgerNavItemsProps {
  closeNav: () => void;
}

const HamburgerNavItems = ({ closeNav }: HamburgerNavItemsProps) => {
  return (
    <div className="bg-white z-50 fixed w-full h-svh overflow-hidden lg:hidden ">
      <div className="flex flex-col gap-6 pt-10 pl-10  container">
        {ROUTES.map(({ label, url }, index) => (
          <Link
            key={index}
            className="text-4xl  font-secondary"
            target={url === LEAGUE_LINK ? "_blank" : "_self"}
            href={url}
            onClick={closeNav}
          >
            {label}
          </Link>
        ))}
      </div>
      <Image
        src={STRIPES}
        alt=""
        role="presentation"
        className="absolute -bottom-10 -right-40 sm:right-0 w-[200%] sm:w-[120%] md:w-full md:right-40 overflow-visible max-w-none"
      />
    </div>
  );
};

export default HamburgerNavItems;
