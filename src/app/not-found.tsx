import { Url } from "@/globals/routes";
import LinkButton from "@/components/LinkButton";

export default function NotFound() {
  return (
    <div className="container pt-16">
      <div className="flex pb-20 justify-center">
        <div className="pt-20 flex flex-col gap-4 text-center">
          <h1>404</h1>
          <h4 className="mb-10">Ups... chyba zabłądziłeś</h4>
          <LinkButton href={Url.HOME}>Wróć do strony głównej</LinkButton>
        </div>
      </div>
    </div>
  );
}
