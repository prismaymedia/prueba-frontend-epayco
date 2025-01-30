import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-[200px] font-semibold py-2 rounded-md transition duration-300 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
