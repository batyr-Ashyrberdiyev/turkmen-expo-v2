import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/layout';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import { itemVariants } from '../event-card';

interface Props {
  className?: string;
}

const HomePartners: FC<Props> = ({ className }) => {
  const partnerVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: () => ({
      opacity: 1,
      y: 0,

      transition: {
        // delay: 0.1 * i,
        ease: [0.1, 0, 0.6, 1],
        duration: 0.6,
      },
    }),
  };

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

        <Carousel>
          <CarouselContent>
            {[...Array(6)].map((_, i) => (
              <motion.div
                variants={partnerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                key={i}>
                <CarouselItem className="basis-[188px] mr-8 h-20 bg-SURFACE_CONTAINER border border-CONTAINER_OUTLINE radius-[4px] p-4">
                  <img src="/partner.svg" className="size-full object-contain" />
                </CarouselItem>
              </motion.div>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default HomePartners;
