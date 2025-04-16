import PLAYERS_BACK from "@/assets/images/about/players-back.jpg";
import PLAYERS_SMILE from "@/assets/images/about/players-smile.jpg";
import PLAYERS_FRONT from "@/assets/images/about/players-front.jpg";
import Image from "next/image";
import FacebookButton from "@/components/FacebookButton";
import Stripes from "./Stripes";
import Blob from "@/components/Blob";

const AboutSection = () => (
  <div className="mt-20 sm:-mb-10 md:-mb-24 lg:mb-30 relative  ">
    <Blob className="-top-80 -left-20" color="green" />
    <Blob className="-bottom-40 -right-20" color="green" />
    <div className="container grid grid-cols-12 gap-4">
      <div className="hidden col-span-4 lg:flex flex-col pr-10">
        <Image
          src={PLAYERS_FRONT}
          alt="players"
          className="rounded-2xl w-3/5 -mb-10 self-end z-10"
        />
        <Image
          src={PLAYERS_SMILE}
          alt="players"
          className="rounded-2xl w-3/5 "
        />
      </div>
      <div className="col-span-full lg:col-span-4 mb-10 lg:mb-0 lg:pt-20 lg:mx-10 flex flex-col items-center lg:items-start">
        <h3 className="">O klubie</h3>
        <p className="mt-5 mb-10 text-center lg:text-left">
          Nasz klub prężnie rozwija się już od 2021 roku. Organizujemy regularne
          treningi dla dzieci i dorosłych, wyjazdy na turnieje oraz Włocławską
          Amatorską Ligę Badmintona. Wydarzenia oraz nasze aktualne osiągnięcia
          można śledzić na facebooku.
        </p>
        <FacebookButton />
      </div>
      <div className="hidden col-span-3 lg:flex items-end justify-end pl-10">
        <Image
          src={PLAYERS_BACK}
          alt="players"
          className="rounded-2xl w-full "
        />
      </div>
      <Image
        src={PLAYERS_FRONT}
        alt="players"
        className=" lg:hidden col-span-6  rounded-2xl flex-wrap"
      />
      <Image
        src={PLAYERS_SMILE}
        alt="players"
        className="lg:hidden col-span-6 rounded-2xl flex-wrap"
      />
      <div className="lg:hidden overflow-hidden col-span-full rounded-2xl h-3/5">
        <Image
          src={PLAYERS_BACK}
          alt="players"
          className=" w-full -translate-y-[60px]"
        />
      </div>
    </div>
    <Stripes />
  </div>
);

export default AboutSection;
