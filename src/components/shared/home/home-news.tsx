import { FC } from "react";
import { cn } from "@/lib/utils";
import { Container, SectionHeader } from "@/components/layout";
import { NewsCard } from "../";

interface Props {
  className?: string;
}

export const HomeNews: FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, "")}>
      <Container>
        <SectionHeader title="Новости" linkText="лента новостей" />

        <div className="flex gap-8">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </Container>
    </section>
  );
};
