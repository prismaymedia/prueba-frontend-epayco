import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder: string;
  as?: 'input' | 'textarea';
}

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ label, name, placeholder, as = 'input', ...props }, ref) => {
    const commonClasses = 'border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500';

    return (
      <div className="form-group mb-4">
        <label htmlFor={name} className="block text-gray-700 text-sm font-medium mb-1">{label}</label>
        {as === 'textarea' ? (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            ref={ref as React.RefObject<HTMLTextAreaElement>}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            className={`${commonClasses} h-32 resize-none`}
          />
        ) : (
          <input
            id={name}
            name={name}
            placeholder={placeholder}
            ref={ref as React.RefObject<HTMLInputElement>}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            className={commonClasses}
          />
        )}
      </div>
    );
  }
);

export default Input;
