import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

interface Props {
  className?: string;
  link?: string;
  title: string;
  linkText: string;
}

export const SectionHeader: FC<Props> = ({ className, link = '', title, linkText }) => {
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 150,
    },
    animate: {
      opacity: 1,
      y: 0,

      transition: {
        ease: [0.1, 0, 0.1, 1],
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={itemVariants}
      viewport={{ once: true, margin: '100px' }}
      className={cn(className, 'flex items-center justify-between mb-8')}>
      <h2 className="h2">{title}</h2>

      <Link to={link}>
        <Button
          variant={'transparent'}
          className="flex font-semibold h-12 items-center group gap-2 text-PRIMARY">
          {linkText}
          <ArrowRight />
        </Button>
      </Link>
    </motion.div>
  );
};
