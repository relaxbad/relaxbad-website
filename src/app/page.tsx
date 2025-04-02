import Blob from "@/componets/Blob";
import FajansCard from "@/componets/FajansCard";
import LeagueCard from "@/componets/LeagueCard";
import { Url } from "@/globals/routes";
import AboutSection from "@/sections/AboutSection";
import BoardSection from "@/sections/BoardSection";
import FAQSection from "@/sections/FAQSection";

export default function Home() {
  return (
    <div className="pt-20">
      <Blob className="-top-20 -right-20" />
      <div className="container grid grid-cols-12 gap-4">
        <div className="col-span-full lg:col-span-7 ">
          <LeagueCard />
        </div>
        <div className="col-span-full lg:col-span-5">
          <FajansCard />
        </div>
      </div>
      <section id={Url.ABOUT_US.replace("#", "")}>
        <AboutSection />
      </section>
      <section id={Url.BOARD.replace("#", "")}>
        <BoardSection />
      </section>
      <section id={Url.QUESTIONS.replace("#", "")}>
        <FAQSection />
      </section>
    </div>
  );
}
