import React, { forwardRef } from "react";
import { TextareaProps } from "../../types/Textarea";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ placeholder, required = false, className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    );
  }
);
