import { Staatliches, Poppins } from "next/font/google";

export const POPPINS_FONT = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
  variable: "--font-poppins",
});

export const STAATLICHES_FONT = Staatliches({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: "normal",
  variable: "--font-alfa",
});
