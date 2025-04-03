import Image from "next/image";
import FACEBOOK_ICON from "@/assets/icons/facebook.svg";
import Link from "next/link";

const FacebookButton = () => {
  return (
    <Link
      href="https://www.facebook.com/profile.php?id=100057176150840"
      target="_blank"
      className="bg-blue-600 w-fit text-white pl-3 pr-10 py-3 rounded-2xl flex gap-3 hover:bg-blue-500 cursor-pointer"
    >
      <Image src={FACEBOOK_ICON} alt="facebook" className="size-7" />
      <div className="text-left">
        <p className="font-bold text-lg">Facebook</p>
      </div>
    </Link>
  );
};

export default FacebookButton;
