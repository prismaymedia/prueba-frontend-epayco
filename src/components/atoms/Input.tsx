import React, { forwardRef } from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  name?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, value, onChange, onBlur, error, required = false, name, ...props }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          name={name}
          className={`w-full p-2 border rounded-md bg-white cursor-text ${
            error ? "border-red-500" : "border-stone-300"
          } focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent`}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

export { Input };
