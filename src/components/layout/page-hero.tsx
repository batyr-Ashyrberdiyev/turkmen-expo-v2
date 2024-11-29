import { cn } from '@/lib/utils';
import { FC } from 'react';

interface Props {
  className?: string;
  img: string;
  title: string;
}

export const PageHero: FC<Props> = ({ className, img, title }) => {
  return (
    <section className={cn(className, 'relative w-full h-[328px]')}>
      <div className="absolute top-0 left-0 size-full bg-[#171D1B]/[16%] z-10" />
      <img src={img} className="absolute top-0 left-0 size-full object-cover" />
      <h1 className="h1 position-center z-20 text-white">{title}</h1>
    </section>
  );
};
