import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-64 sm:w-96 px-4 py-2 rounded-lg ring-2 ring-yellow-300 focus:ring-2 focus:ring-yellow-400 outline-none text-white bg-transparent ${className}`}
        {...props}
      />
    );
  }
);