import PLAYERS_SMILE from "@/assets/images/about/players-smile.jpg";
import PLAYERS_FRONT from "@/assets/images/about/players-front.jpg";
import PLAYERS_BACK from "@/assets/images/about/players-back.jpg";
import Image from "next/image";

const AboutSection = () => (
  <div className="mt-20 md:my-30">
    <div className="container grid grid-cols-12 gap-4">
      <div className="hidden col-span-4 md:flex flex-col pr-10">
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
      <div className="col-span-full md:col-span-4 mb-10 md:mb-0 md:pt-20 md:mx-10 ">
        <h3 className="">O klubie</h3>
        <p className="mt-5">
          Nasz klub prężnie rozwija się już od 2019 roku. Organizujemy regularne
          treningi, wyjazdy na turnieje oraz Włocławską Amatorską Ligę
          Badmintona. Wydarzenia oraz nasze aktualne osiągnięcia można śledzić
          na facebooku.
        </p>
      </div>
      <div className="hidden col-span-3 md:flex items-end justify-end pl-10">
        <Image
          src={PLAYERS_BACK}
          alt="players"
          className="rounded-2xl w-full "
        />
      </div>
      <Image
        src={PLAYERS_FRONT}
        alt="players"
        className=" md:hidden col-span-6  rounded-2xl flex-wrap"
      />
      <Image
        src={PLAYERS_SMILE}
        alt="players"
        className="md:hidden col-span-6 rounded-2xl flex-wrap"
      />
      <div className="md:hidden overflow-hidden col-span-full rounded-2xl h-3/5">
        <Image
          src={PLAYERS_BACK}
          alt="players"
          className=" w-full -translate-y-[60px]"
        />
      </div>
    </div>
  </div>
);

export default AboutSection;
