import { FC } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";

interface Props {
  className?: string;
}

export const HomeHero: FC<Props> = ({ className }) => {
  return (
    <section
      className={cn(
        className,
        "h-[600px] w-full bg-[url('/home-hero.png')]  bg-no-repeat bg-cover bg-center"
      )}
    >
      <Container className="flex flex-col  gap-2 justify-center items-start h-full text-white">
        <h5>TurkmenExpo</h5>
        <h1 className="h1 w-1/2">Выставки, которые вдохновляют на успех</h1>
      </Container>
    </section>
  );
};
