import { type ComponentProps, forwardRef } from 'react';
import { mergeTailwindCSS } from '@/utils';

interface InputProps extends ComponentProps<'input'> {
  hasError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hasError, ...props }, ref) => {
    return (
      <input
        type={type}
        className={mergeTailwindCSS(
          'flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-900 placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          hasError ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus-visible:ring-1',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
export default Input;
