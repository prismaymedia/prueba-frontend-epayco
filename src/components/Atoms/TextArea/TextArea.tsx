import clsx from "clsx";
import { ComponentRef, forwardRef } from "react";
import { TextAreaProps } from "./TextArea.types";

export const TextArea = forwardRef<ComponentRef<"textarea">, TextAreaProps>(
  (props, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={clsx(
          "w-full",
          "p-3",
          "border",
          "rounded-lg",
          "shadow-sm",
          "focus:outline-none",
          "focus:ring-2",
          "focus:ring-blue-400",
          "border-gray-300",
          "resize-none h-32",
          props.className
        )}
      />
    );
  }
);
