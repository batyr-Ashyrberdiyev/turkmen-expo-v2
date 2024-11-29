import { cn } from '@/lib/utils';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

export const Logo: FC<Props> = ({ className = 'text-[32px] leading-[150%]' }) => {
  return (
    <Link to="/" className={cn('flex !font-semibold', className)}>
      <div className="text-[#059784]">Turkmen</div>
      <div className="text-[#BC213A]">Expo</div>
    </Link>
  );
};
