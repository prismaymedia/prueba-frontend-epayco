import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold transition cursor-pointer";
  const variantStyle =
    variant === "primary"
      ? "bg-yellow-500 hover:bg-yellow-400 text-black"
      : "bg-gray-700 hover:bg-gray-600 text-white";

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};
