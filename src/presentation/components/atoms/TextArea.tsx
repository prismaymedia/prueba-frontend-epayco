import {forwardRef} from 'react';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => {
    return <textarea ref={ref} className={`border p-2 w-full ${className}`} {...props} />;
  }
);
