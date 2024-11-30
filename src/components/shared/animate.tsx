import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children: ReactNode;
  y?: number;
  duration?: number;
}

export const Animate: FC<Props> = ({ className, children, y = 20, duration = 0.4 }) => {
  return (
    <motion.div
      initial={{ translateY: y, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ ease: [0.55, 0, 0.1, 1], duration: duration }}
      viewport={{ once: true }}
      className={cn(className, '')}>
      {children}
    </motion.div>
  );
};
