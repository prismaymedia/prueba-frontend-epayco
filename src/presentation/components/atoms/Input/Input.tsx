import { forwardRef } from 'react';
import { cn } from '../../../../utils/cn';
import { InputProps } from './Input.types';

/**
 * Input Atom Component
 * Input reutilizable con estados de error
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type = 'text', ...props }, ref) => {
    const baseStyles =
      'flex w-full rounded-xl border-2 bg-white px-5 py-3.5 text-sm font-medium transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 shadow-sm hover:shadow-md';

    const normalStyles =
      'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20 hover:border-gray-400';
    const errorStyles =
      'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/30';

    return (
      <input
        type={type}
        className={cn(
          baseStyles,
          error ? errorStyles : normalStyles,
          className
        )}
        ref={ref}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
