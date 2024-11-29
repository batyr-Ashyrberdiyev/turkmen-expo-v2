import { cn } from '@/lib/utils';
import { FC } from 'react';

interface Props {
  className?: string;
  title: string;
  text: string;
  greenText: string;
  img: string;
  list: string[];
  reverse?: boolean;
}

export const ServicesBlock: FC<Props> = ({
  className,
  img,
  title,
  text,
  greenText,
  list,
  reverse = false,
}) => {
  return (
    <section
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
    </section>
  );
};
