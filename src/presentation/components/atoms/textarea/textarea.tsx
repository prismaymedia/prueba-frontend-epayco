import React, { forwardRef } from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: React.ReactNode;
    error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, error, ...props }, ref): JSX.Element => {
        return (
            <div className="flex flex-col gap-1 mb-3.5 ">
                {label && <label className="text-sm font-medium dark:text-white">{label}</label>}
                <textarea
                    ref={ref}
                    {...props}
                    className={`border rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"
                        }`}
                />
                {error && <span className="text-xs text-red-500">{error}</span>}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

