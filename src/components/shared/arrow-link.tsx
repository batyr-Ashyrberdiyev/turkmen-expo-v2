import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
  linkText: string;
  link?: string;
}

export const ArrowLink: FC<Props> = ({ className, linkText, link = '' }) => {
  return (
    <Link
      to={link}
      className={cn('flex font-semibold h-12 items-center group gap-2 text-PRIMARY', className)}>
      {linkText}
      <ArrowRight className="group-hover:translate-x-1 animate-pulse ease-out transition-all duration-400" />
    </Link>
  );
};
