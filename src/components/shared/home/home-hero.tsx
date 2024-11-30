import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';
import { Animate } from '../../shared';
interface Props {
  className?: string;
}

export const HomeHero: FC<Props> = ({ className }) => {
  return (
    <Animate>
      <section className={cn(className, 'relative h-[600px] w-full')}>
        <div className="absolute top-0 left-0 size-full bg-[#171D1B]/[16%] z-10" />
        <img src="/home-hero.png" className="absolute size-full object-cover" />

        <Container className="flex flex-col relative z-20 gap-2 justify-center items-start h-full text-white">
          <h5>TurkmenExpo</h5>
          <h1 className="h1 w-1/2">Выставки, которые вдохновляют на успех</h1>
        </Container>
      </section>
    </Animate>
  );
};
