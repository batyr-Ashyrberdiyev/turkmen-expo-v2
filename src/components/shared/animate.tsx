import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children: ReactNode;
  y?: number;
  duration?: number;
  margin?: string;
  delay?: number;
  initial?: any;
  inView?: any;
}

export const Animate: FC<Props> = ({
  className,
  children,
  duration = 0.4,
  margin = '-10px',
  delay = 0,
  initial = {},
  inView = {},
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, ...inView }}
      transition={{ ease: 'circOut', duration: duration, delay: delay }}
      viewport={{ once: true, margin: margin }}
      className={cn(className, '')}>
      {children}
    </motion.div>
  );
};
