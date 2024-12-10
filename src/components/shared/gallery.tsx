import { cn } from '@/lib/utils';
import { FC } from 'react';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel';

interface Props {
  className?: string;
}

export const Gallery: FC<Props> = ({ className }) => {
  return (
    <Carousel
      className={cn(
        'h-screen w-full fixed top-0 bottom-0 right-0 left-0 z-[60] bg-ON_SURFACE',
        className,
      )}>
      <CarouselContent></CarouselContent>
      <CarouselNext className="absolute top-1/2 right-10" />
      <CarouselPrevious className="absolute top-1/2 left-10" />
    </Carousel>
  );
};
