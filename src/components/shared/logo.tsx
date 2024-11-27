import { cn } from '@/lib/utils';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
  return (
    <Link to="/">
      <div className={cn('h-14 w-[198px]', className)}>
        <img src="/logo.svg" alt="logo" className="size-full object-contain" />
      </div>
    </Link>
  );
};
