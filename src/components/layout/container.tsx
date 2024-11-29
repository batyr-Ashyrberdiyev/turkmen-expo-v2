import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container: FC<Props> = ({ className, children }) => {
  return <div className={cn('max-w-[1288px] mx-auto', className)}>{children}</div>;
};
