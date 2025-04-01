import LinkButton from "../LinkButton";
import FAJANS_BG from "@/assets/images/fajans-lotka.png";

const FajansCard = () => {
  return (
    <div
      className="bg-[#F4F8F9] rounded-3xl h-full w-full py-7 px-10 flex flex-col justify-between bg-cover bg-no-repeat bg-[170px]"
      style={{ backgroundImage: `url(${FAJANS_BG.src})` }}
    >
      <div className="mt-20  w-[70%]">
        <p className="font-semibold ">EDYCJA II - 2025</p>
        <h2>Turniej o</h2>
        <h2 className="text-blue-900">fajansową</h2>
        <h2>lotkę</h2>
      </div>

      <div>
        <LinkButton variant="secondary">Dowiedz się więcej</LinkButton>
      </div>
    </div>
  );
};
export default FajansCard;
