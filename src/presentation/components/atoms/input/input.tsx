import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, ...props }, ref): JSX.Element => {
        return (
            <div className="flex flex-col gap-1 mb-3.5">
                {label && <label className="text-sm font-medium dark:text-white">{label}</label>}
                <input
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

Input.displayName = "Input";

