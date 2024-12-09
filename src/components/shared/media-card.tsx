import { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  title: string;
  img: string;
}

export const MediaCard: FC<Props> = ({ className, title, img }) => {
  return (
    <article className={cn(className, "bg-SURFACE_CONTAINER")}>
      <div className="size-[298px] bg-IMG_BG/[8%]">
        <img src={img} alt="" className="size-full object-contain" />
      </div>

      <div className="py-3 px-4 text-[20px] leading-7 font-medium">
        <h4>{title}</h4>
      </div>
    </article>
  );
};
