import { forwardRef } from 'react';
import { cn } from '../../../../utils/cn';
import { TextAreaProps } from './TextArea.types';

/**
 * TextArea Atom Component
 * TextArea reutilizable con estados de error
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, rows = 4, ...props }, ref) => {
    const baseStyles =
      'flex w-full rounded-xl border-2 bg-white px-5 py-3.5 text-sm font-medium transition-all duration-300 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 resize-y shadow-sm hover:shadow-md';

    const normalStyles =
      'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500/20 hover:border-gray-400';
    const errorStyles =
      'border-red-400 focus:border-red-500 focus:ring-red-500/20 bg-red-50/30';

    return (
      <textarea
        className={cn(
          baseStyles,
          error ? errorStyles : normalStyles,
          className
        )}
        rows={rows}
        ref={ref}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';
