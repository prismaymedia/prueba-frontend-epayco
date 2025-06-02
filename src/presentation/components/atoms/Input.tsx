import React from 'react';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ className = '', ...props }, ref) => (
        <input
            ref={ref}
            className={`w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 placeholder-gray-400 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 ${className}`}
            {...props}
        />
    )
);

Input.displayName = 'Input';
