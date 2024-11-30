import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center disabled:text-white font-semibold justify-center gap-2 transition-all whitespace-nowrap text-[14px] leading-[130%] rounded-[2px]  focus-visible:outline-none focus-visible:ring-1 disabled:opacity-50 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-SECONDARY disabled:text-ON_SURFACE/[38%] disabled:bg-ON_SURFACE/[12%] text-white hover:opacity-[92%] min-h-12',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border hover:bg-PRIMARY/[8%] text-PRIMARY border-OUTLINE bg-background',
        transparent: 'text-PRIMARY min-h-11 hover:bg-PRIMARY/[8%]',
        secondary: 'shadow-sm hover:bg-secondary/80',
        ghost: 'bg-SECONDARY disabled:ON_SURAFACE/[38%] hover:opacity-[92%] text-white',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
