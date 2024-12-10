import { FC, useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { LangsE, LangsTitleE, LangStore } from '@/store/language';
import { cn } from '@/lib/utils';

export const langData = [
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
        className={cn(className, 'flex items-center font-semibold gap-2 h-12 w-[100px]')}>
        <h4>{lang.title}</h4>
        <img src="/chevron-down.svg" className={cn('transition-all', open && 'rotate-180')} />
      </PopoverTrigger>

      <PopoverContent className="flex flex-col w-fit text-left p-0 drop-shadow-lg py-1">
        {langData
          .filter((item) => item.id !== lang.id)
          .map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setLang(item);
                setOpen(false);
              }}
              className="text-ON_SURFACE text-left hover:bg-IMG_BG/[8%] transition-all origin-right text-[12px] py-2.5 leading-5 px-5 font-medium w-[112px]">
              {item.title}
            </button>
          ))}
      </PopoverContent>
    </Popover>
  );
};
