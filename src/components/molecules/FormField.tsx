import React, { forwardRef } from "react";
import { Input } from "../atoms/Input";
import { Textarea } from "../atoms/Textarea";
import { Typography } from "../atoms/Typography";

interface FormFieldProps {
  label: string;
  type?: "text" | "textarea";
  placeholder?: string;
  error?: string;
  required?: boolean;
  name?: string;
  value?: string;
}

export const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  ({ label, type = "text", placeholder, error, required = false, name, ...props }, ref) => {
    return (
      <div className="mb-2">
        <Typography
          variant="label"
          className="block mb-1 text-sm font-medium text-stone-700"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </Typography>

        {type === "textarea" ? (
          <Textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            placeholder={placeholder}
            error={error}
            required={required}
            name={name}
            {...props}
          />
        ) : (
          <Input
            ref={ref as React.Ref<HTMLInputElement>}
            placeholder={placeholder}
            error={error}
            required={required}
            name={name}
            {...props}
          />
        )}
      </div>
    );
  }
);
