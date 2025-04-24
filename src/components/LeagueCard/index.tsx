import { LEAGUE_LINK } from "@/globals/links";
import LinkButton from "../LinkButton";
import LEAGUE_BG from "@/assets/images/lotka.webp";

const xsClassName = "bg-[right_20px_bottom] bg-[length:130px]";
const mdClassName = "md:bg-[length:200px]";
const lgClassName = "lg:bg-[length:250px]";

const imageClassName = `bg-no-repeat  ${xsClassName}  ${mdClassName} ${lgClassName}`;

const LeagueCard = () => {
  return (
    <div
      className={`bg-secondary rounded-3xl w-full py-7 px-7 md:px-10 ${imageClassName} `}
      style={{ backgroundImage: `url(${LEAGUE_BG.src})` }}
    >
      <div className="text-white my-10 md:my-20  md:w-[70%]">
        <p className="font-semibold text-sm md:text-base opacity-80 ">
          SEZON 2024/2025
        </p>
        <h2>Włocławska Liga Badmintona</h2>
        <p className="mt-5 text-sm md:text-base">
          Organizujemy jedną z największych amatorskich lig badmintona w
          regionie
        </p>
      </div>

      <LinkButton href={LEAGUE_LINK} target="_blank">
        Zobacz wyniki
      </LinkButton>
    </div>
  );
};
export default LeagueCard;
