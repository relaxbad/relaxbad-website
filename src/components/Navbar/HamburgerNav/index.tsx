"use client";

import HamburgerNavItems from "../HamburgerNavItems";
import Hamburger from "@/components/Hamburger";
import Image from "next/image";
import { useState } from "react";
import LOGO from "@/assets/logo/logo-relaxbad.svg";

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white py-2 px-1 lg:hidden shadow-xs">
        <div className="container flex justify-between items-center ">
          <Image src={LOGO} alt="Logo klubu Relaxbad" className="h-6 w-fit" />
          <Hamburger
            toggleMenu={() => setIsOpen((prev) => !prev)}
            isOpen={isOpen}
          />
        </div>
      </div>
      {isOpen && <HamburgerNavItems closeNav={() => setIsOpen(false)} />}
    </>
  );
};
export default HamburgerNav;
