import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { mergeTailwindCSS } from '@/utils';

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-black text-white shadow hover:bg-black/90 focus-visible:ring-black',
        destructive: 'bg-red-500 text-white shadow-sm hover:bg-red-500/90',
        outline: 'border border-gray-300 bg-white shadow-sm hover:bg-gray-100 hover:text-gray-900',
        secondary: 'bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200',
        ghost: 'bg-transparent hover:bg-gray-100 hover:text-gray-900',
        link: 'text-blue-500 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
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

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={mergeTailwindCSS(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export default Button;
