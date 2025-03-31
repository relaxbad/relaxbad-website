import PLAYERS_SMILE from "@/assets/images/about/players-smile.jpg";
import PLAYERS_FRONT from "@/assets/images/about/players-front.jpg";
import PLAYERS_BACK from "@/assets/images/about/players-back.jpg";
import Image from "next/image";

const About = () => (
  <div className="my-30">
    <div className="container grid grid-cols-12 gap-4">
      <div className="col-span-4 flex flex-col pr-10">
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
      <div className="col-span-4 pt-20 mx-10">
        <h3 className="">O klubie</h3>
        <p className="mt-5">
          Nasz klub prężnie rozwija się już od 2019 roku. Organizujemy regularne
          treningi, wyjazdy na turnieje oraz Włocławską Amatorską Ligę
          Badmintona. Wydarzenia oraz nasze aktualne osiągnięcia można śledzić
          na facebooku.
        </p>
      </div>
      <div className="col-span-3 flex items-end justify-end pl-10">
        <Image
          src={PLAYERS_BACK}
          alt="players"
          className="rounded-2xl w-full "
        />
      </div>
    </div>
  </div>
);

export default About;
