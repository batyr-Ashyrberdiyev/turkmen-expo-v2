import { FC } from 'react';
import { cn } from '@/lib/utils';
import { MapPinIcon } from 'lucide-react';
import { Button } from '../ui/button';

interface Props {
  className?: string;
}

export const EventCard: FC<Props> = ({ className }) => {
  return (
    <article
      className={cn(
        className,
        'p-4 bg-SURFACE_CONTAINER border hover:shadow-md hover:bg-IMG_BG/[8%] transition-all border-CONTAINER_OUTLINE rounded-[4px] flex  gap-8',
      )}>
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
    </article>
  );
};
