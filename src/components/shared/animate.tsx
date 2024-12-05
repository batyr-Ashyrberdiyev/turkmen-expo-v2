import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children: ReactNode;
}
export const globalItemVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: () => ({
    opacity: 1,
    y: 0,

    transition: {
      ease: [0.1, 0, 0.2, 1],
      duration: 0.5,
    },
  }),
};

export const Animate: FC<Props> = ({ className, children }) => {
  return (
    <motion.div
      variants={globalItemVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={cn(className, '')}>
      {children}
    </motion.div>
  );
};
