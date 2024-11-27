import { FC } from "react";
import { Container } from "../layout";
import { navData } from "./header";
import { Link } from "react-router-dom";
import { Logo, Socials } from "../shared";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({}) => {
  return (
    <footer className={"bg-SURFACE_CONTAINER pt-8 pb-7"}>
      <Container>
        <div className="flex justify-between items-center">
          <nav className="flex text-[14px] items-center gap-4 font-semibold">
            {navData.map(({ link, title }) => (
              <Link key={title} to={link}>
                {title}
              </Link>
            ))}
          </nav>

          <Logo />
        </div>

        <hr className="border-OUTLINE_VAR mt-4 mb-2" />

        <div className="flex justify-between items-center">
          <h6 className="h5">2024 © Все права защищены</h6>
          <Socials />
        </div>
      </Container>
    </footer>
  );
};
