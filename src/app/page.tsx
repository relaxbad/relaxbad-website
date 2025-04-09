import Blob from "@/components/Blob";
import FajansCard from "@/components/FajansCard";
import LeagueCard from "@/components/LeagueCard";
import { Url } from "@/globals/routes";
import AboutSection from "@/sections/AboutSection";
import BoardSection from "@/sections/BoardSection";
import FAQSection from "@/sections/FAQSection";
import SponsorCard from "@/components/SponsorCard";
import { SPONSORS } from "@/globals/sponsors";

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
      <section id={Url.ABOUT_US.replace("/#", "")}>
        <AboutSection />
      </section>
      <section id={Url.BOARD.replace("/#", "")}>
        <BoardSection />
      </section>
      <section id={Url.QUESTIONS.replace("/#", "")}>
        <FAQSection />
      </section>

      <div className="container">
        <p className="mb-10 text-sm font-bold">Wspierają nas: </p>
        <div className=" flex gap-4 justify-around">
          {SPONSORS.map((sponsor) => (
            <SponsorCard key={sponsor.name} {...sponsor} />
          ))}
        </div>
      </div>
    </div>
  );
}
