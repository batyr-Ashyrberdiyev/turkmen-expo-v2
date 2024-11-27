import { FC } from "react";
import { cn } from "@/lib/utils";
import { Container, SectionHeader } from "@/components/layout";
import { EventCard } from "../";

interface Props {
  className?: string;
}

export const HomeEvents: FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, "")}>
      <Container>
        <SectionHeader title="Ближайшие события" linkText="все события" />

        <div className="flex flex-col gap-8">
          <EventCard />
          <EventCard />
        </div>
      </Container>
    </section>
  );
};
