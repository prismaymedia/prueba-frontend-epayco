import { forwardRef, TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => (
    <textarea
      {...props}
      ref={ref}
      className={[
        "border rounded p-2 w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300",
        className,
      ].join(" ")}
    />
  )
);

Textarea.displayName = "Textarea";
export default Textarea;
