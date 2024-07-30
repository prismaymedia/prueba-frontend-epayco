import React from 'react';

type TextareaProps = {
  placeholder: string;
  register: any;
  required?: boolean;
  className?: string;
};

const Textarea = ({ placeholder, register, required, className }: TextareaProps) => {
  return (
    <textarea
      {...register}
      placeholder={placeholder}
      required={required}
      className={`w-full p-2 mb-2 border border-gray-300 rounded ${className}`}
    />
  );
};

export default Textarea;
