import { FC, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LangsE, LangsTitleE, LangStore } from "@/store/language";
import { cn } from "@/lib/utils";

const langData = [
  {
    title: LangsTitleE.RU,
    id: LangsE.RU,
  },
  {
    title: LangsTitleE.EN,
    id: LangsE.EN,
  },
  {
    title: LangsTitleE.TM,
    id: LangsE.TM,
  },
];

interface Props {
  className?: string;
}

export const LangMenu: FC<Props> = ({ className }) => {
  const lang = LangStore((state) => state.lang);
  const setLang = LangStore((state) => state.setLang);

  const [open, setOpen] = useState(false);

  return (
    <Popover modal={false} open={open} onOpenChange={() => setOpen(!open)}>
      <PopoverTrigger
        className={cn(
          className,
          "flex items-center font-semibold gap-2 w-[100px]"
        )}
      >
        <h4>{lang.title}</h4>
        <img
          src="/chevron-down.svg"
          className={cn("transition-all", open && "rotate-180")}
        />
      </PopoverTrigger>

      <PopoverContent className="flex flex-col w-fit text-left p-0 rounded-[8px]">
        {langData
          .filter((item) => item.id !== lang.id)
          .map((item) => (
            <button
              onClick={() => {
                setLang(item);
                setOpen(false);
              }}
              className="text-ON_SURFACE py-3 px-5 font-semibold"
            >
              {item.title}
            </button>
          ))}
      </PopoverContent>
    </Popover>
  );
};
