import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-600 border border-blue-600 text-white shadow-sm hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-blue-200 text-blue-600 hover:bg-blue-50',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50',
};

const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-xs font-medium',
    md: 'px-4 py-2 text-sm font-medium',
    lg: 'px-6 py-3 text-base font-semibold',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { variant = 'primary', size = 'md', isLoading = false, disabled, fullWidth, children, className = '', ...rest },
        ref,
    ) => {
        const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 focus-visible:ring-offset-2';
        const widthClass = fullWidth ? 'w-full' : '';
        const stateClasses = disabled || isLoading ? 'opacity-70 cursor-not-allowed' : 'active:scale-[0.98]';
        const composedClassName = [
            baseClasses,
            variantClasses[variant],
            sizeClasses[size],
            widthClass,
            stateClasses,
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <button ref={ref} className={composedClassName} disabled={disabled || isLoading} {...rest}>
                {children}
            </button>
        );
    },
);

Button.displayName = 'Button';

