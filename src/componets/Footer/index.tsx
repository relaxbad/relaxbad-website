import LOGO from "@/assets/logo/logo-relaxbad.svg";
import LOGO_LARGE from "@/assets/logo/logo-large.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-light-grey mt-10">
      <div className="container grid grid-cols-12 gap-4 pt-15 ">
        <div className="col-span-3">
          <Image src={LOGO} alt="logo" className="h-6 w-30 my-2" />
        </div>
        <div className="col-span-3">
          <h3>Kontakt</h3>
          <div className="footer-text flex flex-col gap-2 mt-4">
            <p>relaxbad@gmail.com</p>
            <p>661 191 848</p>
          </div>
        </div>
        <div className="col-span-3">
          <h3>Do pobrania</h3>
          <div className="footer-text flex flex-col gap-2 mt-4">
            <p>deklaracja członkowska</p>
            <p>Statut stowarzyszenia</p>
          </div>
        </div>
        <div className="col-span-3">
          <Image src={LOGO_LARGE} alt="logo" className=" -mt-15 " />
        </div>
      </div>
      <div className="border-gray-200 border-t text-gray-400 text-xs p-5 flex justify-between">
        <p>Relaxbad 20204, Wszelkie prawa zastrzerzone</p>
        <p>Strona zbudowana przez Katarzynę Jankowską</p>
      </div>
    </div>
  );
};
export default Footer;
