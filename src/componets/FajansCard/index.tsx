"use client";

import Button from "../Button";

const FajansCard = () => {
  return (
    <div className="bg-[#F4F8F9] rounded-3xl h-full w-full py-7 px-10 flex flex-col justify-between">
      <div className="mt-20  w-[70%]">
        <p className="font-semibold ">EDYCJA II - 2025</p>
        <h2>Turniej o</h2>
        <h2 className="text-blue-900">fajansową</h2>
        <h2>lotkę</h2>
      </div>

      <div>
        <Button
          onClick={() => {
            console.log("Zobacz więcej");
          }}
          variant="secondary"
        >
          Dowiedz się więcej
        </Button>
      </div>
    </div>
  );
};
export default FajansCard;
