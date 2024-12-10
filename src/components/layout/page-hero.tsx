import { cn } from '@/lib/utils';
import { FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
  img: string;
  title: string;
}

export const PageHero: FC<Props> = ({ className, img, title }) => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.1, 0, 0.2, 1], duration: 0.4 }}
      className={cn(className, 'relative w-full md:h-[328px] h-[232px]')}>
      <div className="absolute top-0 left-0 size-full bg-[#171D1B]/[16%] z-10" />
      <img src={img} className="absolute top-0 left-0 size-full object-cover" />
      <h1 className="h1 position-center z-20 text-center w-full px-4 text-white">{title}</h1>
    </motion.section>
  );
};
