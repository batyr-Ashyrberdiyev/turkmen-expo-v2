import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface Props {
  className?: string;
  title: string;
  text: string;
  greenText: string;
  img: string;
  list: string[];
  reverse?: boolean;
  i: number;
}

const itemVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.3 * i,
      ease: [0.1, 0, 0.2, 1],
      duration: 0.3,
    },
  }),
};

export const ServicesBlock: FC<Props> = ({
  className,
  img,
  title,
  text,
  greenText,
  list,
  i,
  reverse = false,
}) => {
  return (
    <motion.section
      variants={itemVariants}
      initial="initial"
      whileInView="animate"
      custom={i}
      className={cn(
        className,
        'flex items-center gap-8 min-h-[353px]',
        reverse && 'flex-row-reverse',
      )}>
      <div className="flex-[0_1_628px] flex flex-col gap-4">
        <h3 className="h3">{title}</h3>
        <p className="h4">{text}</p>

        <div className="flex flex-col gap-2">
          <h4 className="h4 !text-PRIMARY !font-medium">{greenText}</h4>

          <ul className="h4">
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-[0_1_628px] h-full relative ">
        <img src={img} alt="image" className="size-full object-cover rounded-[4px]" />
        <div className="overlay rounded-[4px]" />
      </div>
    </motion.section>
  );
};
