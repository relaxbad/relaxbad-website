import MIASTO_WLOCLAWEK from "@/assets/sponsors/miasto-wloclawek.svg";
import LEWIATAN from "@/assets/sponsors/lewiatan-logo.svg";
import MWM from "@/assets/sponsors/mwm-logo.png";
import GMINA_WLOCLAWEK from "@/assets/sponsors/gmina-wloclawek.png";
import STAROSTWO_WLOCLAWEK from "@/assets/sponsors/powiat-wloclawski.svg";
import POWERBAD from "@/assets/sponsors/powerbad.png";
import FAJANS_LOGO from "@/assets/sponsors/fajans_logo.png";

export interface Sponsor {
  name: string;
  logo: string;
  link: string;
}

export const SPONSORS: Sponsor[] = [
  {
    name: "Gmina Włocławek",
    logo: GMINA_WLOCLAWEK,
    link: "https://gmina.wloclawek.pl/www/",
  },
  {
    name: "Miasto Włocławek",
    logo: MIASTO_WLOCLAWEK,
    link: "https://www.wloclawek.eu/",
  },
  {
    name: "Starostwo Powiatowe we Włocławku",
    logo: STAROSTWO_WLOCLAWEK,
    link: "https://samorzad.gov.pl/web/powiat-wloclawski",
  },
  {
    name: "MWM Sport",
    logo: MWM,
    link: "https://mwm-sport.eu/",
  },
  {
    name: "Polska Sieć Handlowa Lewiatan",
    logo: LEWIATAN,
    link: "https://lewiatan.pl/",
  },
  {
    name: "PowerBad",
    logo: POWERBAD,
    link: "https://powerbad.com/",
  },
  {
    name: "Fajans Włocławski",
    logo: FAJANS_LOGO,
    link: "https://fajanswloclawek.pl/",
  },
];
