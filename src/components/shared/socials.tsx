import { FC } from 'react';
import { cn } from '@/lib/utils';
interface Props {
  className?: string;
}

const socials = [
  {
    url: '/social/in.svg',
  },
  {
    url: '/social/face.svg',
  },
  {
    url: '/social/x.svg',
  },
  {
    url: '/social/inst.svg',
  },
];

export const Socials: FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center', className)}>
      {socials.map(({ url }, i) => (
        <a key={i} className="cursor-pointer">
          <img src={url} />
        </a>
      ))}
    </div>
  );
};
