import React from 'react';

interface ButtonProps {
  label: string;
  type: 'submit' | 'button';
}

const Button: React.FC<ButtonProps> = ({ label, type }) => {
  return <button type={type} className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition-colors">{label}</button>;
};

export default Button;