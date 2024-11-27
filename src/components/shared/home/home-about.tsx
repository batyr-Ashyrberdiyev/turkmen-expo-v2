import { FC } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { ArrowLink } from "../";

interface Props {
  className?: string;
}

export const HomeAbout: FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, "")}>
      <Container className="flex flex-col gap-8">
        <h2 className="h2">О нас</h2>

        <div className="flex gap-[52px]">
          <p className="pl-[18%] h4 flex-shrink flex-grow-0">
            И нет сомнений, что ключевые особенности структуры проекта формируют
            глобальную экономическую сеть и при этом — обнародованы. Внезапно,
            акционеры крупнейших компаний, инициированные исключительно
            синтетически, призваны к ответу. В целом, конечно,
            высокотехнологичная концепция общественного уклада играет важную
            роль в формировании.
          </p>
          <ArrowLink linkText="подробнее о нас" className="flex-shrink-0" />
        </div>

        <div className="w-full h-[400px]">
          <img
            src="/about-img.png"
            alt="about image"
            className="size-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
};
