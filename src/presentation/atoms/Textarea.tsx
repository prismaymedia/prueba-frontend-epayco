import React from 'react';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className = '', ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={`w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 ${className}`}
      {...props}
    />
  );
});


