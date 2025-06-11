import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error?: string;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type = 'text', className = '', error, ...props }, ref) => {
    const baseClasses = 'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors';
    const errorClasses = error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300';

    return (
      <div className="w-full">
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`${baseClasses} ${errorClasses} ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
