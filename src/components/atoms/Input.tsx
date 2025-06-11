import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = forwardRef(({ 
  label, 
  error, 
  className = '', 
  ...props 
}, ref: React.Ref<HTMLInputElement>) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <input
        className={`input ${error ? 'border-red-500' : ''} ${className} text-black`}
        {...props}
        ref={ref}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}); 