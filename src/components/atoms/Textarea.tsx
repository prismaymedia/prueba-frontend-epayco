import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  error?: string;
  className?: string;
  rows?: number;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ placeholder, rows = 4, className = '', error, ...props }, ref) => {
    const baseClasses = 'w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-vertical';
    const errorClasses = error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300';

    return (
      <div className="w-full">
        <textarea
          ref={ref}
          placeholder={placeholder}
          rows={rows}
          className={`${baseClasses} ${errorClasses} ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
