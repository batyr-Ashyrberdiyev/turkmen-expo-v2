import { FC } from "react";
import { Container } from "./container";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LangMenu, Logo, Socials } from "../shared";

interface Props {
  className?: string;
}

export const navData = [
  {
    title: "О компании",
    link: "",
  },
  {
    title: "Услуги",
    link: "",
  },
  {
    title: "Новости",
    link: "",
  },
  {
    title: "Мероприятия",
    link: "",
  },
  {
    title: "Медиа",
    link: "",
  },
  {
    title: "Контакты",
    link: "",
  },
];

export const Header: FC<Props> = ({ className }) => {
  return (
    <header className={cn("bg-SURFACE_CONTAINER py-4", className)}>
      <Container className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Logo />
          <LangMenu />
        </div>

        <nav className="flex items-center gap-4 font-semibold text-[14px]">
          {navData.map((item) => (
            <Link key={item.title} to={item.link}>
              {item.title}
            </Link>
          ))}
        </nav>

        <Socials />
      </Container>
    </header>
  );
};
