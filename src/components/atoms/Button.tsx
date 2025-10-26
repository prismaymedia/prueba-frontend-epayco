import React from "react";

interface ButtonProps {
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success";
}

function Button({
  type = "button",
  onClick,
  disabled = false,
  children,
  variant = "primary",
}: ButtonProps) {
    const getVariantClasses = () => {
      switch (variant) {
        case "secondary":
          return "border-stone-300 bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-900 focus:ring-stone-400";
        case "success":
          return "border-green-300 bg-green-50 hover:bg-green-100 text-green-700 hover:text-green-900 focus:ring-green-400";
        default:
          return "border-stone-300 bg-white hover:bg-stone-50 text-stone-700 hover:text-stone-900 focus:ring-stone-400";
      }
    };

    return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer ${getVariantClasses()}`}
    >
        {children}
      </button>
    );
}

export { Button };
