import { cn, scrollLock } from '@/lib/utils';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { navData } from '../layout/header';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Socials } from './socials';
import { Button } from '../ui/button';
import { langData } from './lang-menu';
import { LangStore } from '@/store/language';

interface Props {
  className?: string;
  burger: boolean;
  setBurger: (value: boolean) => void;
}

export const Burger: FC<Props> = ({ className, setBurger }) => {
  scrollLock();
  const setLang = LangStore((state) => state.setLang);

  return (
    <motion.div
      initial={{ translateX: '100%', opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      exit={{ translateX: '100%', opacity: 0 }}
      transition={{ ease: [0.1, 0, 0.2, 1] }}
      className={cn(
        'bg-SURFACE absolute top-20 bottom-0 right-0 left-0 z-30 pt-8 pb-6 min-h-screen !overflow-y-auto w-full',
        className,
      )}>
      <div className="flex flex-col gap-6 px-4 overflow-y-auto">
        <div className="">
          {navData.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              onClick={() => setBurger(false)}
              className="flex text-[14px] font-semibold h-12 items-center justify-between">
              {item.title}
              <ArrowRight size={18} />
            </Link>
          ))}
        </div>

        <hr className="border-OUTLINE_VAR my-3" />

        <Socials className="justify-between" />

        <hr className="border-OUTLINE_VAR my-3" />

        <div className="grid grid-cols-3 gap-4">
          {langData.map((item, i) => (
            <Button
              variant={'outline'}
              onClick={() => {
                setLang(item);
                setBurger(false);
              }}
              key={i}>
              {item.title}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
