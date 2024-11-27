import { FC } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";

interface Props {
  className?: string;
}

export const HomePartners: FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, "")}>
      <Container>
        <h2 className="h2 mb-8">Наши партнёры</h2>

        <div className="w-[188px] h-20 bg-SURFACE_CONTAINER border border-CONTAINER_OUTLINE radius-[4px] py-4 px-[38px]">
          <img src="/partner.svg" className="size-full object-cover" />
        </div>
      </Container>
    </section>
  );
};
