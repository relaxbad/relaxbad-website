import Image from "next/image";
import FAJANS from "@/assets/images/fajans-lotka.png";
import ARROW from "@/assets/icons/arrow-right.svg";
import Section from "@/components/Section";
import Link from "next/link";
import { Url } from "@/globals/routes";

const FajansowaLotka = () => (
  <div className="relative py-30">
    <Image
      src={FAJANS}
      alt="fajansowa-lotka"
      className="absolute top-0 right-0 w-150"
    />
    <div className="container">
      <Link href={Url.HOME} className="flex items-center text-sm gap-2 mb-10">
        <Image src={ARROW} alt="arrow" className="rotate-180 size-3" />
        <p>Powrót do strony głównej</p>
      </Link>
      <p>EDYCJA II - 2025</p>
      <h2 className="mb-5 mt-2">
        Turniej o <span className="text-fajans">FAJANSOWĄ</span> lotkę
      </h2>
      <div className="w-[50%]">
        <Section>
          <p>
            Turniej organizowany przy współpracy z Fajansem Włocławskim
            popularyzujący ..... W zmaganiach biorą udział zawodnicy z różnych
            poziomów umiejętności z podziałem na gry pojedyncze, gry podwójne,
            mixty.{" "}
          </p>
        </Section>

        <Section title="Kategorie gier">
          <ul className="list-disc list-inside">
            <li>Gry pojedyncze</li>
            <li>Gry podwójne</li>
            <li>Mixty</li>
          </ul>
        </Section>
        <Section title="Gdzie?">
          <p>Szkoła podstawowa nr 19 we Włocławku, ul. Szkolna 10</p>
        </Section>
        <Section title="Kiedy?">
          <p>Wrzesień 2025</p>
        </Section>
        <Section title="Zapisy">
          <p>relaxbad.nw@gmail.com</p>
        </Section>
        <Section title="Nagrody">
          <p>
            Nagroda, czyli Fajansowa Lotka symbolizuje nawiązanie do tradycji
            regionu. <br /> <br />
            Fundatorem finansowej lotki jest firma Fajans Włocławski z siedzibą
            przy ulicy Falbanka 28.{" "}
          </p>
        </Section>
      </div>
    </div>
  </div>
);

export default FajansowaLotka;
