import FajansCard from "@/componets/FajansCard";
import LeagueCard from "@/componets/LeagueCard";
import About from "@/sections/About";
import Management from "@/sections/Managment";

export default function Home() {
  return (
    <div className="pt-20">
      <div className="container grid grid-cols-12 gap-4">
        <div className="col-span-full md:col-span-7 ">
          <LeagueCard />
        </div>
        <div className="col-span-5">
          <FajansCard />
        </div>
      </div>
      <About />
      <Management />
    </div>
  );
}
