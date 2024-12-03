import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
  id: string | undefined;
  i: number;
  title: string;
  link: string;
  img: string;
}

export const NewsCard: FC<Props> = ({ className, id, i, title, img }) => {
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    whileInView: (i: number) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay: 0.3 * i,
        ease: [0.1, 0, 0.2, 1],
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.article
      variants={itemVariants}
      initial="initial"
      whileInView="whileInView"
      custom={i}
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        className,
        'bg-SURFACE_CONTAINER border hover:drop-shadow-sm hover:shadow-md transition-shadow border-CONTAINER_OUTLINE',
      )}>
      <Link to={`/news/${id}`}>
        <div className="h-[182px] w-[298px]">
          <img src={img} alt="news" className="size-full object-cover" />
        </div>

        <div className="p-4 flex flex-col gap-2 font-medium">
          <h5 className="text-[12px] leading-[125%] text-ON_SURFACE_VAR">23 сентября 2024 г.</h5>
          <h4 className="text-[20px] leading-[125%]">{title} </h4>
        </div>
      </Link>
    </motion.article>
  );
};
