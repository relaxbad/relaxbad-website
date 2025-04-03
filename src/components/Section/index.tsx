import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  title?: string;
}

const Section = ({ title, children }: SectionProps) => (
  <div className="mb-10 flex flex-col items-center lg:items-start">
    <h3 className="mb-2">{title}</h3>
    {children}
  </div>
);
export default Section;
