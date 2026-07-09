import type { ButtonHTMLAttributes } from 'react';

export const Button = ({ className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
        className={`bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all shadow ${className}`}
        {...props}
    />
);
