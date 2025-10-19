import {
  type ChangeEventHandler,
  useId,
  forwardRef,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "@/utils";

interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "color"> {
  color?: "default" | "primary" | "secondary" | "tertiary";
  label?: string;
  placeholder?: string;
  id?: string;
  name?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
  wrapperClassName?: string;
  description?: string;
  errorMessage?: string;
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
}

export const TextareaUI = forwardRef<HTMLTextAreaElement, TextareaProps>(
function TextareaUI({
  color = "default",
  label,
  placeholder,
  id,
  name,
  isDisabled,
  isRequired,
  value,
  onChange,
  onBlur,
  className,
  wrapperClassName,
  description,
  errorMessage,
  autoResize,
  minRows = 2,
  maxRows,
  ...rest
}: TextareaProps, ref) {
  const generatedId = useId();
  const controlId = id || name || generatedId;
  const isControlDisabled = isDisabled ?? false;
  const isControlRequired = isRequired ?? false;
  const hasError = Boolean(errorMessage);
  const descriptionId = description ? `${controlId}-description` : undefined;
  const errorId = hasError ? `${controlId}-error` : undefined;
  const describedBy =
  [descriptionId, errorId].filter(Boolean).join(" ") || undefined;
  const defaultClasses =
    "block px-6 py-3 rounded-lg min-h-20 max-h-44 field-sizing-content w-full disabled:cursor-not-allowed disabled:opacity-50 transition-all ease-in-out duration-200";
  const getColorClasses = () => {
    switch (color) {
      case "default":
        return "bg-slate-100 border-slate-200 placeholder-slate-400 text-slate-700";
      case "primary":
        return "text-primary-700 bg-primary-50 border-primary-300 placeholder-primary-400";
      case "secondary":
        return "text-secondary-700 bg-secondary-50 border-secondary-300 placeholder-secondary-400";
      case "tertiary":
        return "text-tertiary-700 bg-tertiary-50 border-tertiary-300 placeholder-tertiary-400";
      default:
        return "";
    }
  };

  const textareaClasses = cn(
    defaultClasses,
    getColorClasses(),
    className
  );

  

  return (
    <div className={wrapperClassName}>
      {label && (
        <label
          htmlFor={controlId}
          className="mb-1 block font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={controlId}
        name={name}
        placeholder={placeholder}
        value={value}
        className={textareaClasses}
        disabled={isControlDisabled}
        required={isControlRequired}
        aria-disabled={isControlDisabled}
        aria-invalid={hasError || undefined}
        aria-describedby={describedBy}
        rows={minRows}
        onChange={(e) => {
          if (autoResize) {
            const el = e.currentTarget;
            el.style.height = "auto";
            const lineHeight = parseInt(
              window.getComputedStyle(el).lineHeight || "20",
              10
            );
            const maxH = maxRows ? maxRows * lineHeight : undefined;
            const newH = Math.max(el.scrollHeight, minRows * lineHeight);
            el.style.height = (maxH ? Math.min(newH, maxH) : newH) + "px";
          }
          onChange?.(e);
        }}
        onBlur={onBlur}
        {...rest}
      />
      {description && (
        <span
          id={descriptionId}
          className="text-gray-400 mt-1 block text-xs"
        >
          {description}
        </span>
      )}
      {errorMessage && (
        <span
          id={errorId}
          role="alert"
          className="text-red-600 mt-1 block text-xs"
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
}
);
