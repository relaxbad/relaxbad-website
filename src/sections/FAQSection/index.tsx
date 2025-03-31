import Accordion from "@/componets/Accordion";
import { FAQ } from "@/globals/FAQ";

const FAQSection = () => (
  <div className="container grid grid-cols-12 gap-4 mt-40">
    <div className="col-span-7 mb-30">
      <h1>
        Najczęściej zadawane <span className="text-primary">pytania</span>
      </h1>
    </div>
    <div className="col-span-5">
      {FAQ.map((item, index) => (
        <Accordion key={index} title={item.title} answer={item.answer} />
      ))}
    </div>
  </div>
);

export default FAQSection;
