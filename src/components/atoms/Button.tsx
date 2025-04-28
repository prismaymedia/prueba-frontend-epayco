import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({
  children,
  className = "",
  disabled = false,
  ...rest
}: ButtonProps) => (
  <button
    {...rest}
    disabled={disabled}
    className={[
      "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
      disabled && "opacity-50 cursor-not-allowed",
      className,
    ].join(" ")}
  >
    {children}
  </button>
);

export default Button;
