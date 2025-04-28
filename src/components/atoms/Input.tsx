import { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => (
    <input
      {...props}
      ref={ref}
      className={[
        "border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300",
        className,
      ].join(" ")}
    />
  )
);

Input.displayName = "Input";
export default Input;
