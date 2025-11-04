import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    isLoading?: boolean;
    fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { variant = 'primary', isLoading = false, disabled, fullWidth, children, className = '', ...rest },
        ref,
    ) => {
        const baseClasses =
            'inline-flex items-center justify-center gap-2 rounded px-4 py-2 text-sm font-medium transition-colors';
        const widthClass = fullWidth ? 'w-full' : '';
        const stateClasses = disabled || isLoading ? 'opacity-70 cursor-not-allowed' : '';
        const composedClassName = [baseClasses, variantClasses[variant], widthClass, stateClasses, className]
            .filter(Boolean)
            .join(' ');

        return (
            <button ref={ref} className={composedClassName} disabled={disabled || isLoading} {...rest}>
                {isLoading ? 'Cargando…' : children}
            </button>
        );
    },
);

Button.displayName = 'Button';

