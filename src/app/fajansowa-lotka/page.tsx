import Image from "next/image";
import FAJANS from "@/assets/images/fajans-lotka.webp";
import ARROW from "@/assets/icons/arrow-right.svg";
import Link from "next/link";
import { Url } from "@/globals/routes";
import FajansDesc from "@/components/FajansDesc";

const FajansowaLotka = () => (
  <div className="relative pb-10 md:pb-20 pt-20 md:pt-30">
    <Image
      src={FAJANS}
      alt="fajansowa-lotka"
      className="absolute top-0 -right-7 md:right-0 w-50 md:w-100 lg:w-150 -z-10"
    />
    <div className="container md:container-sm">
      <Link href={Url.HOME} className="flex items-center text-sm gap-2 mb-10">
        <Image src={ARROW} alt="arrow" className="rotate-180 size-3" />
        <p>Powrót do strony głównej</p>
      </Link>
      <p className="mt-10">EDYCJA II - 2025</p>
      <h2 className="mb-5 mt-2 w-1/2">
        Turniej o <span className="text-fajans">FAJANSOWĄ</span> lotkę
      </h2>
      <FajansDesc />
    </div>
  </div>
);

export default FajansowaLotka;
