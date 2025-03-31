"use client";

import Button from "../Button";

const LeagueCard = () => {
  return (
    <div className="bg-secondary rounded-3xl w-full py-7 px-10 ">
      <div className="text-white mt-20 mb-20 w-[70%]">
        <p className="font-semibold ">SEZON 2024/2024</p>
        <h2>Włocławska Liga Badmintona</h2>
        <p className="mt-5">
          Organizujemy jedną z największych amatorskich lig badmintona w
          regionie
        </p>
      </div>

      <Button
        onClick={() => {
          console.log("Zobacz więcej");
        }}
      >
        Zobacz wyniki
      </Button>
    </div>
  );
};
export default LeagueCard;
