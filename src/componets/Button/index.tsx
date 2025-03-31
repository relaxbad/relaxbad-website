"use client";

import Image from "next/image";
import ARROW_RIGHT from "@/assets/icons/arrow-right.svg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = (props: ButtonProps) => (
  <button
    className={`${
      props.variant === "secondary" ? "bg-[#E5F1F4]" : "bg-primary "
    } pl-4 pr-2 py-2 rounded-full flex justify-between items-center gap-4`}
    {...props}
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
  </button>
);

export default Button;
