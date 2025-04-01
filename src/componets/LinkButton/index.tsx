"use client";

import Image from "next/image";
import ARROW_RIGHT from "@/assets/icons/arrow-right.svg";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { Url } from "@/globals/routes";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

const LinkButton = (props: LinkProps) => (
  <Link
    className={`${
      props.variant === "secondary" ? "bg-[#E5F1F4]" : "bg-primary "
    } pl-4 pr-2 py-2 rounded-full flex justify-between items-center gap-4 w-fit`}
    {...props}
    href={props.href ?? Url.HOME}
  >
    <p className="text-sm">{props.children}</p>
    <div className="bg-white rounded-full flex justify-center items-center p-2">
      <Image
        src={ARROW_RIGHT}
        alt="arrow-right"
        width={20}
        height={20}
        className="size-3"
      />
    </div>
  </Link>
);

export default LinkButton;
