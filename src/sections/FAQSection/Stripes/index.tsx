import STRIPES from "@/assets/images/stripes-1.svg";
import Image from "next/image";

const Stripes = () => (
  <Image
    src={STRIPES}
    alt="stripes"
    role="presentation"
    className=" absolute -top-55 w-200 -left-130 -z-10"
  />
);

export default Stripes;
