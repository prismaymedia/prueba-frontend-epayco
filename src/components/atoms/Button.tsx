import React from "react";
import { ButtonProps } from "../../types/Button";

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};
