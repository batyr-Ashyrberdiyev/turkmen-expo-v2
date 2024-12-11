import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { itemVariants } from '../event-card';
import { Animate } from '../animate';
import { useMediaQuery } from 'usehooks-ts';

interface Props {
  className?: string;
}

const HomePartners: FC<Props> = ({ className }) => {
  const tab = useMediaQuery('(min-width: 768px)');

  return (
    <section className={cn(className, '')}>
      <Container>
        <motion.h2
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={itemVariants}
          className="h2 mb-8">
          Наши партнёры
        </motion.h2>

        <Animate>
          <Carousel
            opts={{
              dragFree: true,
            }}>
            <CarouselContent overflowHidden={!tab}>
              {[...Array(8)].map((_, i) => (
                <CarouselItem
                  key={i}
                  className="basis-[188px] md:mr-8 mr-4 h-20 bg-SURFACE_CONTAINER border border-CONTAINER_OUTLINE radius-[4px] p-4">
                  <img src="/partner.svg" className="size-full object-contain" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Animate>
      </Container>
    </section>
  );
};

export default HomePartners;
