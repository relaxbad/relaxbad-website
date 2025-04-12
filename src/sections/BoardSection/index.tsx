import Person from "./Person";
import GRZEGORZ from "@/assets/managment/grzes.jpg";
import MARIUSZ from "@/assets/managment/mariusz.jpg";
import RAFAŁ from "@/assets/managment/rafal.jpg";
import MACIEJ from "@/assets/managment/maciek.jpg";
import Blob from "@/components/Blob";

const BoardSection = () => (
  <div className="relative">
    <Blob className="-top-20 -right-40 opacity-65 rotate-45" color="blue" />
    <Blob className="-top-20 -left-30  rotate-45" />

    <div className="container grid grid-cols-12 gap-4">
      <div className="col-span-full lg:col-span-8 lg:col-start-3">
        <div className="mb-10 flex flex-col items-center lg:items-start">
          <h3>Zarząd</h3>
          <p className="mt-5 md:w-1/2 text-center lg:text-left">
            To dzięki nim klub rozwija się i odnosi sukcesy, zapewniając
            zawodnikom najlepsze warunki do gry!
          </p>
        </div>
        <div className="mt-24 md:mb-24 lg:mb-0 flex gap-4 gap-y-10 flex-wrap justify-around lg:justify-between w-full">
          <Person
            name="Grzegorz Jankowski"
            description="Prezes Klubu"
            image={GRZEGORZ}
            role="prezes"
          />
          <Person
            name="Mariusz Kryska"
            description="Wiceprezes"
            image={MARIUSZ}
            role="wiceprezes"
          />
          <Person
            name="Rafał Podlasiak"
            description="Skarbnik"
            image={RAFAŁ}
            role="skarbnik"
          />
          <Person
            name="Maciej Żywiczka"
            description="Sekretarz"
            image={MACIEJ}
            role="sekretarz"
          />
        </div>
      </div>
    </div>
  </div>
);

export default BoardSection;
