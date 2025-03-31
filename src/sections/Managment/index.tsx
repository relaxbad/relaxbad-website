import Person from "./Person";
import GRZEGORZ from "@/assets/managment/grzes.jpg";
import MARIUSZ from "@/assets/managment/mariusz.jpg";
import RAFAŁ from "@/assets/managment/rafal.jpg";
import MACIEJ from "@/assets/managment/maciek.jpg";

const Management = () => (
  <div className="">
    <div className="container grid grid-cols-12 gap-4">
      <div className="col-span-8 col-start-3">
        <div className="mb-10">
          <h3 className="">Zarząd</h3>
          <p className="mt-5 w-110">
            To dzięki nim klub rozwija się i odnosi sukcesy, zapewniając
            zawodnikom najlepsze warunki do gry!
          </p>
        </div>
        <div className="flex gap-4 justify-between w-full">
          <Person
            name="Grzegorz Jankowski"
            description="Prezes Klubu"
            image={GRZEGORZ.src}
            role="prezes"
          />
          <Person
            name="Mariusz Kryska"
            description="Wiceprezes"
            image={MARIUSZ.src}
            role="wiceprezes"
          />
          <Person
            name="Rafał Podlasiak"
            description="Skarbnik"
            image={RAFAŁ.src}
            role="skarbnik"
          />
          <Person
            name="Maciej Żywiczka"
            description="Sekretarz"
            image={MACIEJ.src}
            role="sekretarz"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Management;
