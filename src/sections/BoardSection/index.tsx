import Person from "./Person";
import GRZEGORZ from "@/assets/managment/grzes.jpg";
import MARIUSZ from "@/assets/managment/mariusz.jpg";
import RAFAŁ from "@/assets/managment/rafal.jpg";
import MACIEJ from "@/assets/managment/maciek.jpg";

const BoardSection = () => (
  <div className="">
    <div className="container grid grid-cols-12 gap-4">
      <div className="col-span-full md:col-span-8 md:col-start-3">
        <div className="mb-10">
          <h3>Zarząd</h3>
          <p className="mt-5 w-1/2">
            To dzięki nim klub rozwija się i odnosi sukcesy, zapewniając
            zawodnikom najlepsze warunki do gry!
          </p>
        </div>
        <div className="mt-24 flex gap-4 gap-y-10 flex-wrap justify-around md:justify-between w-full">
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
