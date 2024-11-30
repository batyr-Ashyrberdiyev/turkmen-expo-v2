import { FC } from 'react';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { cn } from '@/lib/utils';
import { FieldError } from 'react-hook-form';

interface Props {
  className?: string;
  control: any;
  label: string;
  name: string;
  area?: boolean;
  placeholder: string;
  error?: FieldError | undefined;
  description: string;
}

export const Field: FC<Props> = ({
  className,
  label,
  control,
  name,
  placeholder,
  area = false,
  error,
  description,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className, 'w-full')}>
          <FormLabel className="mb-1 text-[16px] leading-6 !text-ON_SURFACE font-medium">
            {label}
          </FormLabel>
          <FormControl>
            {!area ? (
              <Input
                className={cn('mb-1', error && 'ring-ERROR')}
                placeholder={placeholder}
                {...field}
              />
            ) : (
              <Textarea
                className={cn('mb-1', error && 'ring-ERROR')}
                placeholder={placeholder}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage className="!text-red-600 h5" />
          {!error && <FormDescription className="h5">{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
};
