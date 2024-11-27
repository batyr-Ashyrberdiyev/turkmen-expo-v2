import { FC } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const NewsCard: FC<Props> = ({ className }) => {
  return (
    <article
      className={cn(
        className,
        "bg-SURFACE_CONTAINER border border-CONTAINER_OUTLINE"
      )}
    >
      <div className="h-[182px] w-[298px]">
        <img
          src="/news-img.png"
          alt="news"
          className="size-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 font-medium">
        <h5 className="text-[12px] leading-[125%] text-ON_SURFACE_VAR">
          23 сентября 2024 г.
        </h5>
        <h4 className="text-[20px] leading-[125%]">
          Ашхабад готовится к международной конференции и выставке CIET-2024
        </h4>
      </div>
    </article>
  );
};
