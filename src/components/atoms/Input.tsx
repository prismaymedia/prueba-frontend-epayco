import React from 'react';

type InputProps = {
  placeholder: string;
  register: any;
  required?: boolean;
  className?: string;
};

const Input = ({ placeholder, register, required, className }: InputProps) => {
  return (
    <input
      {...register}
      placeholder={placeholder}
      required={required}
      className={`w-full p-2 mb-2 border border-gray-300 rounded ${className}`}
    />
  );
};

export default Input;
