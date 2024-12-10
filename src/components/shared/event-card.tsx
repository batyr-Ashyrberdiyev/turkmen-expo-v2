import { FC } from 'react';
import { cn } from '@/lib/utils';
import { MapPinIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
  i: number;
}

export const itemVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.3,
      ease: [0.1, 0, 0.2, 1],
      duration: 0.3,
    },
  }),
};

export const EventCard: FC<Props> = ({ className, i }) => {
  return (
    <motion.article
      initial="initial"
      whileInView="animate"
      variants={itemVariants}
      custom={i}
      viewport={{ once: true, margin: '10px' }}
      className={cn(
        className,
        'p-4 bg-SURFACE_CONTAINER border hover:drop-shadow-sm hover:shadow-md hover:bg-IMG_BG/[8%] transition-shadow border-CONTAINER_OUTLINE rounded-[4px] ',
      )}>
      <div className="md:flex hidden gap-8">
        <div>
          <h3 className="h3">22-24 августа</h3>
          <h4>2025 года</h4>
        </div>

        <div className="size-[177px]">
          <img src="/event-img.png" alt="event" className="size-full object-contain" />
        </div>

        <div className="flex-auto">
          <h3 className="h3 !text-ON_SURFACE mb-4">Выставка-ярмарка KIDS EXPO TURKMENISTAN</h3>

          <div className="flex items-center gap-1">
            <MapPinIcon className="text-ON_SURFACE_VAR" />
            <h4 className="h4">Туркменистан, г. Ашхабад</h4>•<h4 className="h4">10:00-18:00</h4>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Button variant={'ghost'}>Зарегистрироваться</Button>
          <Button variant="transparent">Перейти на сайт</Button>
        </div>
      </div>

      <div className="flex md:hidden flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3>22-24 августа</h3>
          <h4>2025 года</h4>
        </div>

        <div className="flex items-center">
          <div className="flex-[1_1_60%]">
            <h3 className="h3 !text-ON_SURFACE mb-4">Выставка-ярмарка KIDS EXPO TURKMENISTAN</h3>
            <div>
              <h4 className="h4">Туркменистан, г. Ашхабад</h4>
              <h4 className="h4">10:00-18:00</h4>
            </div>
          </div>

          <div className="size-[112px] ">
            <img src="/event-img.png" alt="event" className="size-full object-contain" />
          </div>
        </div>

        <Button variant={'ghost'}>Зарегистрироваться</Button>
        <Button variant="transparent">Перейти на сайт</Button>
      </div>
    </motion.article>
  );
};
