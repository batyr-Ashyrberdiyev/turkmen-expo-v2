import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
  id: string | undefined;
  title: string;
  link: string;
  img: string;
}

export const NewsCard: FC<Props> = ({ className, id, title, img }) => {
  return (
    <article
      className={cn(
        className,
        'bg-SURFACE_CONTAINER border md:w-[298px] w-full hover:drop-shadow-sm hover:shadow-md transition-shadow border-CONTAINER_OUTLINE',
      )}>
      <Link to={`/news/${id}`}>
        <div className="h-auto w-full">
          <img src={img} alt="news" className="size-full object-contain" />
        </div>

        <div className="p-4 flex flex-col gap-2 font-medium">
          <h5 className="text-[12px] leading-[125%] text-ON_SURFACE_VAR">23 сентября 2024 г.</h5>
          <h4 className="text-[20px] leading-[125%]">{title} </h4>
        </div>
      </Link>
    </article>
  );
};
