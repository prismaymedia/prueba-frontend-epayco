import React, { forwardRef } from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = forwardRef(({ 
  label, 
  error, 
  className = '', 
  ...props 
}, ref: React.Ref<HTMLTextAreaElement>) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <textarea
        className={`input min-h-[100px] ${error ? 'border-red-500' : ''} ${className} text-black`}
        {...props}
        ref={ref}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}); 