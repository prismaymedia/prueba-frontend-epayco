import React from "react";
import { InputProps } from "./Input.types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, id, ...props }, ref) => {
    return (
      <div className="relative z-0 w-full mb-5 group">
        <input
          ref={ref}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer  dark:border-gray-600 dark:focus:border-blue-500"
          id={id}
          placeholder=" "
          {...props}  
        />
        <label
          htmlFor={id}
          className="absolute text-sm text-gray-500 transform scale-75 top-3 -translate-y-6 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 dark:text-gray-400 dark:peer-focus:text-blue-500"
        >
          {placeholder}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";
