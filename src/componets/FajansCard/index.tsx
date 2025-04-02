import LinkButton from "../LinkButton";
import FAJANS_BG from "@/assets/images/fajans-lotka.png";

const xsClassName = "bg-[right_-20px_top_-100px] bg-[length:200px]";
const smClassName = "sm:bg-[length:250px]";
const mdClassName = "md:bg-[length:270px]";
const lgClassName = "lg:bg-[right_-50px_top_-100px]";

const imageClassName = `bg-no-repeat ${xsClassName}  ${smClassName} ${mdClassName} ${lgClassName}`;

const FajansCard = () => {
  return (
    <div
      className={`bg-[#F4F8F9] rounded-3xl h-full w-full py-7 px-7 lg:px-10 flex flex-col justify-between ${imageClassName}`}
      style={{ backgroundImage: `url(${FAJANS_BG.src})` }}
    >
      <div className="mt-20 mb-5  sm:w-[70%]">
        <p className="font-semibold text-sm lg:text-base opacity-80">
          EDYCJA II - 2025
        </p>
        <h2>
          Turniej o <span className="text-blue-900">fajansową</span> lotkę
        </h2>
      </div>
      <LinkButton variant="secondary">Dowiedz się więcej</LinkButton>
    </div>
  );
};
export default FajansCard;
