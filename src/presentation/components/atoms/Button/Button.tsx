import { forwardRef } from 'react';
import { cn } from '../../../../utils/cn';
import { ButtonProps } from './Button.types';

/**
 * Button Atom Component
 * Botón reutilizable con múltiples variantes y tamaños
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95';

    const variants = {
      primary:
        'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:ring-purple-500/50',
      secondary:
        'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-700 hover:to-gray-800 focus:ring-gray-500/50',
      outline:
        'border-3 border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500/30 shadow-none hover:shadow-lg',
      ghost: 'text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500/30 shadow-none hover:shadow-md',
    };

    const sizes = {
      sm: 'text-sm px-5 py-2.5 min-h-[38px]',
      md: 'text-base px-6 py-3 min-h-[46px]',
      lg: 'text-lg px-8 py-4 min-h-[54px]',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Cargando...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
