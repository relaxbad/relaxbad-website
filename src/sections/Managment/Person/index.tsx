import Image from "next/image";

interface PersonProps {
  name: string;
  role?: "prezes" | "wiceprezes" | "skarbnik" | "sekretarz";
  image: string;
  description: string;
}

const Person = ({ name, image, role, description }: PersonProps) => (
  <div className="flex  flex-col items-center ">
    <div className="">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="rounded-full "
      />
    </div>
    <p className="text-semibold">{name}</p>
    <p className="text-[#808080]">{description}</p>
  </div>
);

export default Person;
