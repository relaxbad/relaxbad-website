"use client";

import { FAQType } from "@/globals/FAQ";
import { useState } from "react";

const Accordion = ({ title, answer }: FAQType) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 cursor-pointer">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full cursor-pointer"
      >
        <span className="text-sm font-semibold">{title}</span>
        <svg
          className="fill-black shrink-0 ml-8"
          width="12"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="5"
            width="12"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="5"
            width="12"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-800 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden mt-2">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
