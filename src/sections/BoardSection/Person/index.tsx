import Image, { StaticImageData } from "next/image";

interface PersonProps {
  name: string;
  role?: "prezes" | "wiceprezes" | "skarbnik" | "sekretarz";
  image: StaticImageData;
  description: string;
}

const Person = ({ name, image, role, description }: PersonProps) => (
  <div className="flex  flex-col items-center text-sm">
    <Image src={image} alt={name} className="rounded-full size-36" />
    <p className="font-semibold mt-3">{name}</p>
    <p className="text-[#808080]">{description}</p>
  </div>
);

export default Person;
