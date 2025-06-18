import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input className="border rounded px-3 py-2 w-full" {...props} />
    {error && <span className="text-red-500 text-xs">{error}</span>}
  </div>
);