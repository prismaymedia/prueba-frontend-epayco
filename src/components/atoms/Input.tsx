import React, { forwardRef } from "react";
import { InputProps } from "../../types/Input";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, required = false, className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    );
  }
);
