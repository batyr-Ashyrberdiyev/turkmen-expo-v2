import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { Animate } from './animate';

interface Props {
  className?: string;
  title: string;
  text: string;
  greenText: string;
  img: string;
  list: string[];
  reverse?: boolean;
  i: number;
}

export const ServicesBlock: FC<Props> = ({
  className,
  img,
  title,
  text,
  greenText,
  list,
  reverse = false,
}) => {
  return (
    <Animate>
      <motion.section
        className={cn(
          className,
          'flex md:flex-row flex-col items-center md:gap-8 gap-6 min-h-[353px]',
          reverse && 'md:flex-row-reverse',
        )}>
        <div className="md:flex-[0_1_628px] flex flex-col gap-4">
          <h3 className="h3 md:mb-0 mb-2">{title}</h3>
          <p className="text-base text-ON_SURFACE_VAR">{text}</p>

          <div className="flex flex-col md:gap-2 gap-1">
            <h4 className="text-base !text-PRIMARY !font-medium">{greenText}</h4>

            <ul className="text-base">
              {list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:flex-[0_1_628px] w-full h-[214px] md:h-auto relative ">
          <img src={img} alt="image" className="size-full object-cover rounded-[4px]" />
          <div className="overlay rounded-[4px]" />
        </div>
      </motion.section>
    </Animate>
  );
};
