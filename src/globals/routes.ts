interface Route {
  url: Url;
  label: string;
}

export enum Url {
  HOME = "/",
  ABOUT_US = "o-nas",
  FAJANSOWA_LOTKA = "fajansowa-lotka",
  BOARD = "zarzad",
  QUESTIONS = "pytania",
  CONTACT = "kontakt",
}

export const ROUTES: Route[] = [
  {
    url: Url.HOME,
    label: "Strona Główna",
  },
  {
    url: Url.ABOUT_US,
    label: "O Nas",
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
