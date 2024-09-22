import clsx from "clsx";
import { ComponentRef, forwardRef } from "react";
import { InputProps } from "./Input.types";

export const Input = forwardRef<ComponentRef<"input">, InputProps>(
  (props, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={clsx(
          "border",
          "w-full",
          " p-3",
          "rounded-lg",
          "focus:ring-2",
          "focus:ring-blue-400",
          "focus:outline-none",
          "transition",
          "duration-300",
          "ease-in-out",
          props.className
        )}
      />
    );
  }
);
