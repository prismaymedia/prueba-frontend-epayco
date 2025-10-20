import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({ 
  children, 
  required, 
  className = '',
  ...props 
}) => {
  return (
    <label className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${className}`} {...props}>
      {children}
      {required && <span className="text-red-500 dark:text-red-400 ml-1">*</span>}
    </label>
  );
};