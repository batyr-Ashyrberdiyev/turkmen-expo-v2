import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

interface Props {
  className?: string;
}

const HomePartners: FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, '')}>
      <Container>
        <h2 className="h2 mb-8">Наши партнёры</h2>

        <Carousel>
          <CarouselContent>
            {[...Array(6)].map((_, i) => (
              <CarouselItem
                key={i}
                className="basis-[188px] mr-8 h-20 bg-SURFACE_CONTAINER border border-CONTAINER_OUTLINE radius-[4px] p-4">
                <img src="/partner.svg" className="size-full object-contain" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default HomePartners;
