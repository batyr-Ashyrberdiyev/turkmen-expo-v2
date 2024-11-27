import { FC } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { LangsE, LangsTitleE, LangStore } from '@/store/language';

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

  return (
    <Popover modal={false}>
      <PopoverTrigger className={className}>{lang.title}</PopoverTrigger>

      <PopoverContent>
        {langData
          .filter((item) => item.id !== lang.id)
          .map((item) => (
            <button onClick={() => setLang(item)} className="text-ON_SURFACE">
              {item.title}
            </button>
          ))}
      </PopoverContent>
    </Popover>
  );
};
