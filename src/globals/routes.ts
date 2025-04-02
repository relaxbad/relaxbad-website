import { LEAGUE_LINK } from "./links";

interface Route {
  url: Url | string;
  label: string;
}

export enum Url {
  HOME = "/#!",
  ABOUT_US = "#o-nas",
  FAJANSOWA_LOTKA = "#fajansowa-lotka",
  BOARD = "#zarzad",
  QUESTIONS = "#pytania",
  CONTACT = "#kontakt",
}

export const ROUTES: Route[] = [
  {
    url: Url.HOME,
    label: "Strona Główna",
  },
  {
    url: LEAGUE_LINK,
    label: "WALB",
  },
  {
    url: Url.ABOUT_US,
    label: "O Klubie",
  },
  {
    url: Url.FAJANSOWA_LOTKA,
    label: "Fajansowa Lotka",
  },
  {
    url: Url.BOARD,
    label: "Zarząd",
  },
  {
    url: Url.QUESTIONS,
    label: "Pytania",
  },
  {
    url: Url.CONTACT,
    label: "Kontakt",
  },
];
