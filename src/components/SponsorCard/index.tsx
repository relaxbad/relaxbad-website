import { Sponsor } from "@/globals/sponsors";
import Image from "next/image";
import Link from "next/link";

const SponsorCard = ({ link, logo, name }: Sponsor) => (
  <Link href={link} target="_blank">
    <Image src={logo} alt={name} className="w-20" />
  </Link>
);

export default SponsorCard;
