import { FC } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { Animate } from "../../shared";
interface Props {
  className?: string;
}

export const HomeHero: FC<Props> = ({ className }) => {
  return (
    <Animate>
      <section
        className={cn(className, "relative md:h-[600px] h-[412px] w-full")}
      >
        <div className="absolute top-0 left-0 size-full bg-[#171D1B]/[16%] z-10" />
        <img src="/home-hero.png" className="absolute size-full object-cover" />

        <Container className="relative flex flex-col justify-center   z-20 gap-2 size-full text-white">
          <h5>TurkmenExpo</h5>
          <h1 className="h1 w-[60%]">Выставки, которые вдохновляют на успех</h1>
        </Container>
      </section>
    </Animate>
  );
};
