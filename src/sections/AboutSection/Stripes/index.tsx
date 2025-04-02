import STRIPES from "@/assets/images/stripes-1.svg";
import Image from "next/image";

const Stripes = () => (
  <Image
    src={STRIPES}
    alt="stripes"
    role="presentation"
    className=" absolute -top-70 w-200 -right-150 -z-10"
  />
);

export default Stripes;
