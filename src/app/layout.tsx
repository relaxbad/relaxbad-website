import type { Metadata } from "next";
import "./globals.css";
import { POPPINS_FONT, STAATLICHES_FONT } from "../globals/fonts";
import Navbar from "@/components/Navbar";
import { Url } from "@/globals/routes";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Klub Sportowy Relaxbad",
  description:
    "Oficjalna strona klubu sportowego Relaxbad Nowa Wieś, Włocławek",
  robots: "index",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicons.ico",
      },
    ],
  },
  openGraph: {
    images: [
      {
        url: "https://relaxbad.pl/img/og-img.png",
        width: 400,
        height: 225,
        alt: "Large image for Relaxbad",
      },
    ],
    type: "website",
    locale: "pl_PL",
    title: "Klub Sportowy Relaxbad",
    description: "Klub badmintona, Nowa Wieś, Włocławek",
    url: "https://relaxbad.pl",
    siteName: "relaxbad.pl",
  },
  twitter: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${POPPINS_FONT.variable} ${STAATLICHES_FONT.variable}`}>
        <Navbar />
        <div>{children}</div>
        <footer id={Url.CONTACT.replace("#", "")}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
