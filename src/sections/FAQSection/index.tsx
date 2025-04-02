import Accordion from "@/componets/Accordion";
import { FAQ } from "@/globals/FAQ";
import Stripes from "./Stripes";
import Blob from "@/componets/Blob";

const FAQSection = () => (
  <div className="relative">
    <Blob className="-bottom-30 -right-30  rotate-45" color="green" />
    <div className="container grid grid-cols-12 gap-4 mt-40">
      <div className="col-span-full md:col-span-7 mb-10 md:mb-30">
        <h1>
          Najczęściej zadawane <span className="text-primary">pytania</span>
        </h1>
      </div>
      <div className="col-span-full md:col-span-5 px-5 md:px-0">
        {FAQ.map((item, index) => (
          <Accordion key={index} title={item.title} answer={item.answer} />
        ))}
      </div>
    </div>
    <Stripes />
  </div>
);

export default FAQSection;
