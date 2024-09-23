import React from 'react';

interface InputProps {
  placeholder: string;
  register: any;
  error?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, register, error }) => {
  return (
    <div>
      <input
        {...register}
        placeholder={placeholder}
        className={`w-full border rounded-lg px-4 py-2 focus:outline-none 
                    ${error ? 'border-red-500 bg-red-100' : 'border-gray-300'} 
                    focus:ring-2 focus:ring-blue-500`}
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>

  );
};

export default Input;