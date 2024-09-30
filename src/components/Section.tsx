import { FC, HTMLAttributes, ReactNode } from "react";

interface ISectionProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

const Section: FC<ISectionProps> = ({children, className}) => {
  return (
    <section className={`${className} max-md:p-5`}>
      {children}
    </section>
  )
}

export default Section;
